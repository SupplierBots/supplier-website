import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { colors } from 'constants/theme';
import Stripe from 'stripe';
import StyledParticles from 'components/StyledParticles';
import HeroSection from 'components/sections/HeroSection';

const FeaturesSection = styled.div`
  background: ${colors.secondaryBackground};
  height: 300rem;
`;

interface Props {
  price: string;
}

const Index: NextPage<Props> = ({ price }) => {
  return (
    <>
      <Head>
        <link rel="Logo" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400&display=swap"
        ></link>
      </Head>
      <StyledParticles />
      <HeroSection productPrice={price} />
      <FeaturesSection>START</FeaturesSection>
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
