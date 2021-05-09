import SectionHeader from 'components/SectionHeader';
import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${colors.secondaryBackground};
  padding-bottom: 7rem;
  padding-top: 5rem;
  font-weight: 300;

  @media ${devices.tablet} {
    padding-top: 9rem;
  }

  @media ${devices.desktop} {
    font-size: clamp(14px, 1vw, 19.2px);
  }
`;

const Card = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  background-color: ${colors.tertiaryBackground};
  border-radius: 1em;
  padding: 4.5rem 8vw 5.5rem 8vw;
  margin-bottom: 2rem;

  @media ${devices.tablet} {
    background-image: url('static/logo-background.svg');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 20%;

    padding: 4.5rem 5rem 4.5rem 5rem;
    margin-bottom: 0;
    max-width: 60vw;
    background-size: auto 45%;
  }

  @media ${devices.desktop} {
    padding: 2.25em 4.2em 2.7em 4.2em;
    max-width: 30em;
    margin: 0 auto;
    margin: 0 auto 4.2em auto;
    background-size: auto 50%;
  }
`;

const Question = styled.div`
  font-size: 2.1rem;
  line-height: 1.2;
  text-align: center;

  @media ${devices.desktop} {
    font-size: 1.25em;
  }
`;

const EmailIcon = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;

  @media ${devices.desktop} {
    width: 1.7em;
    height: 1.7em;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const EmailAddress = styled.a`
  font-size: 1.75rem;
  margin-left: 1rem;
  cursor: pointer;
  color: ${colors.lightPurple};

  @media ${devices.desktop} {
    font-size: 1em;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  position: relative;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 1.5rem;
  }

  @media ${devices.desktop} {
    width: 2.1em;
    height: 2.1em;
  }
`;

const QuestionMark = styled.span`
  font-size: 2.3rem;
  font-weight: 400;
  background: ${colors.mainGradientLR};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 2px;

  @media ${devices.desktop} {
    font-size: 1.15em;
  }
`;

const Separator = styled.div`
  width: 2rem;
  height: 1px;
  margin: 3rem auto;
  background: ${colors.darkGrey};

  @media ${devices.desktop} {
    margin: 1.5em auto;
  }
`;

const ContactSection = (): JSX.Element => {
  return (
    <Wrapper>
      <SectionHeader>Contact Us</SectionHeader>
      <Card>
        <Question>
          Do you have any other questions<QuestionMark>?</QuestionMark>
        </Question>
        <EmailContainer>
          <EmailIcon>
            <Image
              src={`/static/email-icon.svg`}
              layout="fill"
              objectFit="cover"
            />
          </EmailIcon>
          <EmailAddress href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=contact@supplierbots.io">
            contact@supplierbots.io
          </EmailAddress>
        </EmailContainer>
        <Separator />
        <SocialIconsContainer>
          <SocialIcon href="https://twitter.com/SupplierBots" target="_blank">
            <Image
              src={`/static/twitter-icon.svg`}
              layout="fill"
              objectFit="cover"
            />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/supplierbots"
            target="_blank"
          >
            <Image
              src={`/static/instagram-icon.svg`}
              layout="fill"
              objectFit="cover"
            />
          </SocialIcon>
          <SocialIcon
            href="https://www.facebook.com/supplierbots"
            target="_blank"
          >
            <Image
              src={`/static/facebook-icon.svg`}
              layout="fill"
              objectFit="cover"
            />
          </SocialIcon>
        </SocialIconsContainer>
      </Card>
    </Wrapper>
  );
};

export default ContactSection;
