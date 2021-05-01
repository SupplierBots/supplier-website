import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Stripe } from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

interface Price extends Stripe.Price {
  product: Stripe.Product;
}

interface Props {
  price: Price;
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
      </Head>
      <div>
        <h2>{price.product.name}</h2>
        <img src={price.product.images[0]} alt="Product" />
        <p>Cost: ${((price.unit_amount as number) / 100).toFixed(2)}</p>
        <button onClick={initiateCheckout}>Purchase</button>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
  });

  const price = await stripe.prices.retrieve(process.env.STRIPE_PRICE_ID, {
    expand: ['product'],
  });

  return { props: { price } };
};

export default Index;
