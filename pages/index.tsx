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
import { devices } from 'constants/mediaQueriesBreakpoints';

export const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  pointer-events: none;
  z-index: -9999;
`;

const Name = styled.h2`
  font-size: 11vw;
  color: ${colors.lightPurple};
  font-weight: 300;
  margin-top: 2%;
`;

const Slogan = styled.h2`
  font-size: 6.5vw;
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
  animation: ${moveUpDown} 3s cubic-bezier(0.61, 1, 0.88, 1) infinite;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3vw;
`;

const LogoContainer = styled.div`
  margin-top: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Screens = styled.img`
  /* width: auto; */
  max-height: 50vh;
  object-fit: contain;
`;

const ActionButtonsContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  button:first-child {
    margin-bottom: 1.5rem;
  }
`;

const BottomPolygon = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 15vh solid ${colors.secondaryBackground};
  border-right: 99vw solid transparent;
  bottom: 5vh;
  z-index: -20;
`;

const BottomPoly2 = styled.div`
  position: absolute;
  width: 100%;
  height: 5vh;
  background: ${colors.secondaryBackground};
  bottom: 0;
  z-index: -20;
`;

const FeaturesSection = styled.div`
  background: ${colors.secondaryBackground};
  height: 300rem;
`;

const Logo = styled.div`
  /* flex: 1; */
  width: 24vw;
`;
const MainContent = styled.div``;
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
        <MainContent>
          <LogoContainer>
            <Logo>
              <Image
                src="/static/supplier-logo.svg"
                height="auto"
                width="auto"
                layout="responsive"
              />
            </Logo>
            <MainParagraphsContainer>
              <Name>Supplier</Name>
              <Slogan>Made to cop easily</Slogan>
            </MainParagraphsContainer>
          </LogoContainer>
          <ActionButtonsContainer>
            <PurchaseButton price={price} />
            <SecondaryButton width="16rem" onClick={scrollToFeatures}>
              See features
            </SecondaryButton>
          </ActionButtonsContainer>
        </MainContent>
        <Screens src="/static/screens.png" alt="Screens" />
      </HeroSection>
      <BottomPolygon />
      <BottomPoly2 />
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
