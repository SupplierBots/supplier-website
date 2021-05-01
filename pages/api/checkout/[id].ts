import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export interface CheckoutSessionResponse {
  customerEmail: string;
  success: boolean;
}

interface CheckoutSession extends Stripe.Checkout.Session {
  payment_intent: Stripe.PaymentIntent;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const id: string = req.query.id as string;
  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.');
    }

    const checkout_session = (await stripe.checkout.sessions.retrieve(id, {
      expand: ['payment_intent'],
    })) as CheckoutSession;

    const response = {
      customerEmail: checkout_session.customer_details?.email,
      success: checkout_session.payment_intent.status === 'succeeded',
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
