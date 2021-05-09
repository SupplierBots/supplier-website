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
  font-size: 1.5rem;
  color: ${colors.lightGrey};
  margin-bottom: 2rem;

  @media ${devices.desktop} {
    font-size: 0.85em;
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
          Jak było w szkole<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla
          sequi aliquam maxime quia aperiam corrupti animi nostrum eaque nisi.
          Tempore doloribus quibusdam perferendis facere accusantium eaque
          temporibus ex placeat.
        </Answer>
        <Question>
          Co na obiad<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla
          sequi aliquam maxime quia aperiam corrupti animi nostrum eaque nisi.
          Tempore doloribus quibusdam perferendis facere accusantium eaque
          temporibus ex placeat.
        </Answer>
        <Question>
          Działa na Nokii 3310<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla
          sequi aliquam maxime quia aperiam corrupti animi nostrum eaque nisi.
          Tempore doloribus quibusdam perferendis facere accusantium eaque
          temporibus ex placeat.
        </Answer>
        <Question>
          Może potwórzymy angielski<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla
          sequi aliquam maxime quia aperiam corrupti animi nostrum eaque nisi.
          Tempore doloribus quibusdam perferendis facere accusantium eaque
          temporibus ex placeat.
        </Answer>
        <Question>
          Srasz<QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla
          sequi aliquam maxime quia aperiam corrupti animi nostrum eaque nisi.
          Tempore doloribus quibusdam perferendis facere accusantium eaque
          temporibus ex placeat.
        </Answer>
        <Question>
          Mogę zapłacić PaySafeCardem lub karmą dla chomików
          <QuestionMark>?</QuestionMark>
        </Question>
        <Answer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla
          sequi aliquam maxime quia aperiam corrupti animi nostrum eaque nisi.
          Tempore doloribus quibusdam perferendis facere accusantium eaque
          temporibus ex placeat.
        </Answer>
      </Card>
    </Wrapper>
  );
};

export default FaqSection;
