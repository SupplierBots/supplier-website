import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});
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

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    if (paymentIntent.customer) {
      const { email } = (await stripe.customers.retrieve(
        paymentIntent.customer as string,
      )) as Stripe.Customer;
      console.log(`Customer email: ${email}`);
    }
  }

  res.json({ received: true });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default cors(webhookHandler as any);
