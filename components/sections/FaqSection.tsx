import SectionHeader from 'components/SectionHeader';
import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${colors.secondaryBackground};
  padding-top: 3rem;
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
  padding: 4rem 8vw 4rem 8vw;

  background-image: url('static/question-marks.svg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto 30%;

  @media ${devices.tablet} {
    padding: 6rem 5rem 5rem 5rem;
    margin-bottom: 0;
    max-width: 85vw;
    background-size: auto 55%;
  }

  @media ${devices.desktop} {
    padding: 4em 4.2em 2.55em 4.2em;
    max-width: 57em;
    margin: 0 auto;
    background-size: auto 80%;
  }
`;

const Question = styled.div`
  font-size: 2.1rem;
  margin-bottom: 0.4rem;
  line-height: 1.1;

  @media ${devices.desktop} {
    font-size: 1.15em;
    margin-bottom: 0.2em;
  }
`;

const Answer = styled.div`
  font-size: 1.8rem;
  color: ${colors.lightGrey};
  margin-bottom: 2rem;

  @media ${devices.desktop} {
    font-size: 0.925em;
    margin-bottom: 1.75em;
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

const FaqSection = (): JSX.Element => {
  return (
    <Wrapper>
      <SectionHeader>FAQ</SectionHeader>
      <Card>
        <Question>
          Which sites do we support<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Currently our bot works on EU & US Supreme stores, we will add JPN one
          in the near future.
        </Answer>
        <Question>
          Which operating systems is our bot compatible with
          <QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Destkop version works on Windows & MacOS devices. Mobile one runs on
          all iOS 11+ devices.
        </Answer>
        <Question>
          Where can I download the bot and find out how to configure it
          <QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Detailed tutorials, links to download and more information are
          available here: https://docs.supplierbot.io/
        </Answer>
        <Question>
          Do you have Discord server<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Not yet, but we are going to launch it soon. Follow our social media
          to be up to date.
        </Answer>
        <Question>
          Do I have to pay for desktop and mobile version separately
          <QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          No, price includes access to both versions without any additional
          cost.
        </Answer>
        <Question>
          Do you have any affiliate program<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Yes, if you are interested in cooperation and have wide audience
          contact us for more details.
        </Answer>
      </Card>
    </Wrapper>
  );
};

export default FaqSection;
