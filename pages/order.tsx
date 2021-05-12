import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { CheckoutSessionResponse } from './api/checkout/[id]';

import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import { getJSON } from 'utils/fetcher';
import Footer from 'components/sections/Footer';
import styled from 'styled-components';
import { colors } from 'constants/theme';
import { devices } from 'constants/mediaQueriesBreakpoints';
import ProcessingSpinner from 'components/ProcessingSpinner';
import MainLogo from 'components/MainLogo';
import Image from 'next/image';

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${colors.secondaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media ${devices.desktop} {
    font-size: min(1vw, 22px);
  }
`;

const Card = styled.div`
  width: 90vw;
  background-color: ${colors.tertiaryBackground};
  border-radius: 1em;
  padding: 5rem 8vw 5rem 8vw;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.tablet} {
    padding: 6rem 5rem 5rem 5rem;
    margin-bottom: 0;
    max-width: 85vw;
  }

  @media ${devices.desktop} {
    padding: 2.4em 3em 2.55em 3em;
    max-width: 40em;
    margin: 0 auto;
  }
`;

const ProcessingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 2.1rem;
  font-weight: 300;
  margin-top: 20vh;

  @media ${devices.tablet} {
    margin-top: 15vh;
  }

  @media ${devices.desktop} {
    margin-top: 8vh;
    font-size: 1.1em;
  }
`;

const Details = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 0.5rem;

  @media ${devices.desktop} {
    margin-bottom: 0.1em;
    font-size: 0.85em;
  }
`;

const Status = styled.div`
  font-size: 2.1rem;
  font-weight: 300;
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  @media ${devices.desktop} {
    font-size: 1.1em;
    margin-bottom: 0.8em;
  }
`;

const EmailAddress = styled.span`
  background: ${colors.mainGradientLR};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HomePageLink = styled.a`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${colors.lightPurple};
  margin-top: 2rem;
  border-bottom: 1px solid ${colors.lightPurple};
  align-self: flex-start;

  @media ${devices.desktop} {
    margin-top: 1.2em;
    font-size: 0.8em;
  }
`;

const StatusIcon = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;

  @media ${devices.desktop} {
    width: 1em;
    height: 1em;
    margin-left: 0.3em;
  }
`;

const StyledFooter = styled.div`
  margin-top: auto;
  width: 100%;
`;

const LogoContainer = styled.div`
  @media ${devices.desktop} {
    font-size: 0.65em;
    margin-bottom: 3em;
  }
`;

const Order: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isValidating } = useSWR<CheckoutSessionResponse, Error>(
    id ? `/api/checkout/${id}` : null,
    getJSON,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Only retry up to 10 times.
        if (retryCount >= 10) return;
        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
      revalidateOnFocus: false,
    },
  );

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400&display=swap"
        ></link>
        <title>Supplier - Order status</title>
      </Head>
      <Wrapper>
        <LogoContainer>
          <MainLogo />
        </LogoContainer>

        {!isValidating && error && (
          <Card>
            <Status>
              Something went wrong
              <StatusIcon>
                <Image
                  src={`/static/error-icon.svg`}
                  layout="fill"
                  objectFit="cover"
                />
              </StatusIcon>
            </Status>
            <Details>
              Unfortunately we couldn&apos;t check your order status.
            </Details>
            <Details>
              If you got charged please send us a message to receive a license
              key:
              <EmailAddress> contact@supplierbots.io</EmailAddress>
            </Details>
            <Link href="/" passHref>
              <HomePageLink>Return to home page</HomePageLink>
            </Link>
          </Card>
        )}
        {isValidating || (!error && !data) ? (
          <ProcessingContainer>
            <p>Processing</p>
            <ProcessingSpinner />
          </ProcessingContainer>
        ) : null}
        {!isValidating && data && !error && (
          <Card>
            <Status>
              Thanks for a purchase
              <StatusIcon>
                <Image
                  src={`/static/success-icon.svg`}
                  layout="fill"
                  objectFit="cover"
                />
              </StatusIcon>
            </Status>
            <Details>
              We will send a license key to{' '}
              <EmailAddress>{data.customerEmail}</EmailAddress> shortly.
            </Details>
            <Details>
              If you don&apos;t receive it within 24 hours, please send us a
              message: <EmailAddress>contact@supplierbots.io</EmailAddress>
            </Details>
            <Link href="/" passHref>
              <HomePageLink>Return to home page</HomePageLink>
            </Link>
          </Card>
        )}
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </Wrapper>
    </>
  );
};

export default Order;
