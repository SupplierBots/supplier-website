import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import Stripe from 'stripe';
import sendgrid from '@sendgrid/mail';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});
sendgrid.setApiKey(process.env.SENDGRID_SECRET_KEY);

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

interface LicenseGeneratorResponse {
  success: boolean;
  license: { key: string; assigned: boolean };
}
const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }
  const buf = await buffer(req);

  const webhookSignature = req.headers['stripe-signature']!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf.toString(),
      webhookSignature,
      webhookSecret,
    );
  } catch (err) {
    console.log(`❌ Error message: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type !== 'payment_intent.succeeded') {
    res.status(500).send(`Unexpected event type ${event.type}`);
    return;
  }

  const paymentIntent = event.data.object as Stripe.PaymentIntent;

  if (!paymentIntent.customer) {
    res.status(500).send('Missing customer ID');
    return;
  }

  const { email: customerEmail } = (await stripe.customers.retrieve(
    paymentIntent.customer as string,
  )) as Stripe.Customer;

  if (!customerEmail) {
    res.status(500).json('Missing customer email');
    return;
  }

  try {
    const response = await fetch(
      'https://us-central1-safedrop-83b20.cloudfunctions.net/generateLicense',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Generator: process.env.LICENSE_GEN_HEADER,
        },
        body: JSON.stringify({ key: process.env.LICENSE_GEN_KEY }),
      },
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const {
      success,
      license,
    } = (await response.json()) as LicenseGeneratorResponse;

    if (!success) {
      res.status(500).json({
        error: `Didn't receive valid license`,
        customerEmail,
      });
      return;
    }

    const mail: sendgrid.MailDataRequired = {
      to: customerEmail,
      from: { name: 'Supplier', email: 'contact@supplierbots.io' },
      templateId: 'd-bdc70fd18ebe4127a3c7044e3270508e',
      dynamicTemplateData: {
        license: license.key,
      },
    };

    try {
      await sendgrid.send(mail);

      res.status(200).json({
        license: license.key,
        customerEmail,
      });
    } catch (ex) {
      res.status(500).json({
        error: `Couldn't send an email`,
        license: license.key,
        customerEmail,
      });
    }
  } catch (ex) {
    res.status(500).json({
      error: `Exception: ${ex.toString()}`,
      customerEmail,
    });
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default cors(webhookHandler as any);
