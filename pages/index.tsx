import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Stripe } from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

interface Props {
  price: string;
}

const Index: NextPage<Props> = ({ price }) => {
  const initiateCheckout = async () => {
    const response = await fetch('/api/checkout', { method: 'POST' });
    const { sessionId } = await response.json();
    console.log(sessionId);
    const stripe = await stripePromise;
    if (!stripe || !sessionId) return;
    stripe.redirectToCheckout({ sessionId });
  };

  return (
    <div>
      <Head>
        <link rel="Logo" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400&display=swap"
        ></link>
      </Head>
      <div>
        <h2>Supplier</h2>
        <p>Cost: ${price}</p>
        <button onClick={initiateCheckout}>Purchase</button>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
  });

  const stripePrice = await stripe.prices.retrieve(
    process.env.STRIPE_PRICE_ID,
    {
      expand: ['product'],
    },
  );
  const priceAmount = (stripePrice.unit_amount! / 100).toFixed(2);
  return { props: { price: priceAmount } };
};

export default Index;
