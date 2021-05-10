import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${colors.tertiaryBackground};
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1em;
  transition: 0.3s all;
  margin-bottom: 2rem;

  background-image: url('static/card-pattern.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 100% auto;

  @media ${devices.tablet} {
    margin-bottom: 0;
    width: calc(50% - 1.25rem);
  }

  @media ${devices.desktop} {
    width: auto;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: ${colors.lightGrey};

  @media ${devices.desktop} {
    font-size: 0.925em;
  }
`;

const Title = styled.p`
  margin: 0.5rem 0 1rem 0;
  font-size: 2.1rem;

  @media ${devices.desktop} {
    margin: 0.08em 0 0.4em 0;
    font-size: 1.15em;
  }
`;

const Content = styled.div`
  padding: 4rem 8vw 5.5rem 8vw;

  @media ${devices.tablet} {
    padding: 4rem 4rem 5.5rem 4rem;
  }

  @media ${devices.desktop} {
    padding: 2.1em 2.1em 2.9em 2.1em;
  }
`;

const Icon = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;
  @media ${devices.desktop} {
    width: 2.6em;
    height: 2.6em;
  }
`;

interface Props {
  iconName: string;
  title: string;
  description: string;
}
const FeatureCard = ({ iconName, title, description }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <Icon>
          <Image
            src={`/static/${iconName}.svg`}
            layout="fill"
            objectFit="cover"
          />
        </Icon>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
};

export default FeatureCard;
