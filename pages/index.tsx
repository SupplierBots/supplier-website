import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Stripe from 'stripe';
import HeroSection from 'components/sections/HeroSection';
import FeaturesSection from 'components/sections/FeaturesSection';
import FaqSection from 'components/sections/FaqSection';
import ContactSection from 'components/sections/ContactSection';
import Footer from 'components/sections/Footer';

interface Props {
  price: string;
}

const Index: NextPage<Props> = ({ price }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400&display=swap"
        ></link>
      </Head>
      <HeroSection productPrice={price} />
      <FeaturesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
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
  const priceAmount = Math.round(stripePrice.unit_amount! / 100);
  return { props: { price: priceAmount } };
};

export default Index;
