import { InfoCard } from 'components/InfoCard';
import { InfoExplanation } from 'components/InfoExplanation';
import { InfoHeading } from 'components/InfoHeading';
import { InfoTitle } from 'components/InfoTitle';
import { InfoWrapper } from 'components/InfoWrapper';
import MainLogo from 'components/MainLogo';
import SectionHeader from 'components/SectionHeader';
import Footer from 'components/sections/Footer';
import { SmallLogoContainer } from 'components/SmallLogoContainer';
import { NextPage } from 'next';
import Head from 'next/head';

const CookiePolicy: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400&display=swap"
        ></link>
        <title>Supplier - Cookie policy</title>
      </Head>
      <InfoWrapper>
        <SmallLogoContainer>
          <MainLogo />
        </SmallLogoContainer>
        <SectionHeader>Cookie policy</SectionHeader>
        <InfoCard>
          <InfoExplanation>
            We use cookies to help improve your experience of our website at
            https://www.supplierbots.io. This cookie policy is part of Supplier
            Patryk Heljasiński&apos;s privacy policy. It covers the use of
            cookies between your device and our site.
            <br />
            We also provide basic information on third-party services we may
            use, who may also use cookies as part of their service. This policy
            does not cover their cookies.
            <br />
            If you don’t wish to accept cookies from us, you should instruct
            your browser to refuse cookies from https://www.supplierbots.io. In
            such a case, we may be unable to provide you with some of your
            desired content and services.
          </InfoExplanation>
          <InfoHeading>What is a cookie?</InfoHeading>
          <InfoExplanation>
            A cookie is a small piece of data that a website stores on your
            device when you visit. It typically contains information about the
            website itself, a unique identifier that allows the site to
            recognise your web browser when you return, additional data that
            serves the cookie’s purpose, and the lifespan of the cookie itself.
            <br />
            Cookies are used to enable certain features (eg logging in), track
            site usage (eg analytics), store your user settings (eg time zone,
            notification preferences), and to personalise your content (eg
            advertising, language).
            <br />
            Cookies set by the website you are visiting are usually referred to
            as first-party cookies. They typically only track your activity on
            that particular site.
            <br />
            Cookies set by other sites and companies (i.e. third parties) are
            called third-party cookies They can be used to track you on other
            websites that use the same third-party service.
          </InfoExplanation>
          <InfoHeading>Types of cookies and how we use them</InfoHeading>
          <InfoTitle>Essential cookies</InfoTitle>
          <InfoExplanation>
            Essential cookies are crucial to your experience of a website,
            enabling core features like user logins, account management. We do
            not use this type of cookie on our site.
          </InfoExplanation>
          <InfoTitle>Performance cookies</InfoTitle>
          <InfoExplanation>
            Performance cookies track how you use a website during your visit.
            Typically, this information is anonymous and aggregated, with
            information tracked across all site users. They help companies
            understand visitor usage patterns, identify and diagnose problems or
            errors their users may encounter, and make better strategic
            decisions in improving their audience’s overall website experience.
            These cookies may be set by the website you’re visiting
            (first-party) or by third-party services. They do not collect
            personal information about you. We use performance cookies on our
            site.
          </InfoExplanation>
          <InfoTitle>Functionality cookies</InfoTitle>
          <InfoExplanation>
            Functionality cookies are used to collect information about your
            device and any settings you may configure on the website you’re
            visiting (like language and time zone settings). With this
            information, websites can provide you with customised, enhanced, or
            optimised content and services. These cookies may be set by the
            website you’re visiting (first-party) or by third-party services. We
            do not use this type of cookie on our site.
          </InfoExplanation>
          <InfoTitle>Targeting/advertising cookies</InfoTitle>
          <InfoExplanation>
            Targeting/advertising cookies help determine what promotional
            content is most relevant and appropriate to you and your interests.
            Websites may use them to deliver targeted advertising or limit the
            number of times you see an advertisement. This helps companies
            improve the effectiveness of their campaigns and the quality of
            content presented to you. These cookies may be set by the website
            you’re visiting (first-party) or by third-party services.
            Targeting/advertising cookies set by third-parties may be used to
            track you on other websites that use the same third-party service.
            We use this type of cookie on our site.
          </InfoExplanation>
        </InfoCard>
      </InfoWrapper>
      <Footer />
    </>
  );
};

export default CookiePolicy;
