import MainLogo from 'components/MainLogo';
import SectionHeader from 'components/SectionHeader';
import Footer from 'components/sections/Footer';
import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${colors.secondaryBackground};
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media ${devices.desktop} {
    font-size: clamp(14px, 1vw, 19.2px);
  }
`;

const Card = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  background-color: ${colors.tertiaryBackground};
  border-radius: 1em;
  padding: 4rem 8vw 4rem 8vw;
  font-weight: 300;

  @media ${devices.tablet} {
    padding: 6rem 5rem 5rem 5rem;
    margin-bottom: 0;
    max-width: 85vw;
    background-size: auto 55%;
  }

  @media ${devices.desktop} {
    padding: 3.55em 4.2em 2.55em 4.2em;
    max-width: 57em;
    margin: 0 auto;
    background-size: auto 80%;
  }
`;

const Heading = styled.h3`
  font-weight: 300;
  font-size: 2.1rem;
  margin-bottom: 0.4rem;
  line-height: 1.1;

  @media ${devices.desktop} {
    font-size: 1.15em;
    margin-bottom: 0.2em;
  }
`;

const Explanation = styled.p`
  font-size: 1.5rem;
  color: ${colors.lightGrey};
  margin-bottom: 2rem;

  @media ${devices.desktop} {
    font-size: 0.85em;
    margin-bottom: 1.75em;
  }
`;

const Title = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  line-height: 1.1;

  @media ${devices.desktop} {
    font-size: 0.8em;
    margin-bottom: 0.1em;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 4rem;
  @media ${devices.desktop} {
    font-size: 0.75em;
    margin-bottom: 4em;
  }
`;

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400&display=swap"
        ></link>
      </Head>
      <Wrapper>
        <LogoContainer>
          <MainLogo />
        </LogoContainer>
        <SectionHeader>Terms of service</SectionHeader>
        <Card>
          <Heading>Information</Heading>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            limited products from Supreme New York. We do not take any
            responsibility if the user does not purchase the desired product.
            Our software only increases the chances of purchasing the products,
            it does not guarantee that the user will purchase the product. By
            purchasing our software, the user purchases only the bot. It does
            not include the products that the user wants to purchase. The user
            must pay for the products separately.
          </Explanation>
          <Title>XDDD</Title>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            limited products from Supreme New York. We do not take any
            responsibility if the user does not purchase the desired product.
            Our software only increases the chances of purchasing the products,
            it does not guarantee that the user will purchase the product. By
            purchasing our software, the user purchases only the bot. It does
            not include the products that the user wants to purchase. The user
            must pay for the products separately.
          </Explanation>
          <Heading>1. Terms</Heading>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            By accessing the website at https://veloxbots.io/, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </Explanation>
          <Heading>1. Terms</Heading>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            By accessing the website at https://veloxbots.io/, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </Explanation>{' '}
          <Heading>1. Terms</Heading>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            By accessing the website at https://veloxbots.io/, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </Explanation>{' '}
          <Heading>1. Terms</Heading>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            By accessing the website at https://veloxbots.io/, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </Explanation>{' '}
          <Heading>1. Terms</Heading>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            By accessing the website at https://veloxbots.io/, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </Explanation>{' '}
          <Heading>1. Terms</Heading>
          <Explanation>
            This is a digital software that increases the chances of purchasing
            By accessing the website at https://veloxbots.io/, you are agreeing
            to be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </Explanation>
        </Card>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Terms;
