import FeatureCard from 'components/FeatureCard';
import SectionHeader from 'components/SectionHeader';
import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import { RefObject } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${colors.secondaryBackground};
  padding-top: 5rem;
  padding-bottom: 1px;

  @media ${devices.tablet} {
    padding-top: 2rem;
  }

  @media ${devices.desktop} {
    font-size: clamp(14px, 1vw, 19.2px);
    padding-top: 0;
  }
`;

const FeaturesList = styled.div`
  max-width: 90vw;
  margin: 0 auto;

  @media ${devices.tablet} {
    max-width: 85vw;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: middle;
    justify-content: space-around;
  }

  @media ${devices.desktop} {
    display: grid;
    grid-template-columns: 18em 18em 18em;
    grid-gap: 1.5em;
    max-width: 55em;
  }
`;

interface Props {
  scrollRef: RefObject<HTMLInputElement>;
}

const FeaturesSection = ({ scrollRef }: Props): JSX.Element => {
  return (
    <Wrapper ref={scrollRef}>
      <SectionHeader>Features</SectionHeader>
      <FeaturesList>
        <FeatureCard
          iconName="lifetime-icon"
          title="Lifetime license"
          description="No recurring fees. No hidden costs. Pay once and get all incoming updates and improvements for free. Spend money on items, not renewals."
        />
        <FeatureCard
          iconName="devices-icon"
          title="Run on multiple devices"
          description="Don't limit yourself to only one device. Supplier is a multi-platform software, which allows you to run four instances simultaneously - two desktop and two mobile."
        />
        <FeatureCard
          iconName="widgets-icon"
          title="User-friendly UI"
          description="Keywords or complicated setup is not a problem anymore. With our beautiful, polished and thoughful user interface configuration is a matter of seconds."
        />
      </FeaturesList>
    </Wrapper>
  );
};

export default FeaturesSection;
