import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import params from 'constants/particlesConfig';
import { colors } from 'constants/theme';
import { moveUpDown } from 'constants/animations';
import SecondaryButton from 'components/SecondaryButton';
import PrimaryButton from 'components/PrimaryButton';
import { useRef } from 'react';
import Stripe from 'stripe';
import PurchaseButton from 'components/PurchaseButton';

export const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -9999;
`;

const Name = styled.h2`
  font-size: 8rem;
  color: ${colors.lightPurple};
  font-weight: 300;
`;

const Slogan = styled.h2`
  font-size: 5rem;
  background: ${colors.mainGradientLR};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
`;

const MainParagraphsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  line-height: 1;
  margin-top: 1rem;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: ${moveUpDown} 3s cubic-bezier(0.61, 1, 0.88, 1) infinite;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20rem;
`;

const MockupsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 100vh;
`;

const Screens = styled.img`
  width: 800px;
  height: auto;
  position: absolute;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  button:first-child {
    margin-right: 1.5rem;
  }
`;

const BottomPolygon = styled.div`
  position: absolute;
  background: ${colors.secondaryBackground};
  height: 15vh;
  width: 100vw;
  clip-path: polygon(0 0, 100% 80%, 100% 100%, 0 100%);
  bottom: 0;
  z-index: -20;
`;

const TopPolygon = styled.div`
  position: absolute;
  background-image: ${colors.mainGradient45};
  height: 6vh;
  width: 50vw;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  top: 0;
  right: 0;
  z-index: -20;
`;

const FeaturesSection = styled.div`
  background: ${colors.secondaryBackground};
  height: 300rem;
`;

interface Props {
  price: string;
}

const Index: NextPage<Props> = ({ price }) => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <link rel="Logo" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400&display=swap"
        ></link>
      </Head>
      <StyledParticles params={params} />
      <HeroSection>
        <LogoContainer>
          <Image src="/static/supplier-logo.svg" height={140} width={140} />
          <MainParagraphsContainer>
            <Name>Supplier</Name>
            <Slogan>Made to cop easily</Slogan>
            <ActionButtonsContainer>
              <PurchaseButton price={price} />
              <SecondaryButton width="16rem" onClick={scrollToFeatures}>
                See features
              </SecondaryButton>
            </ActionButtonsContainer>
          </MainParagraphsContainer>
        </LogoContainer>
        <MockupsContainer>
          <Screens src="/static/screens.png" alt="Screens" />
        </MockupsContainer>
      </HeroSection>
      <BottomPolygon />
      <FeaturesSection ref={featuresRef}></FeaturesSection>
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
