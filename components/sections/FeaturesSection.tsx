import FeatureCard from 'components/FeatureCard';
import SectionHeader from 'components/SectionHeader';
import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${colors.secondaryBackground};
  padding-bottom: 20rem;
  padding-top: 5rem;

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

const FeaturesSection = (): JSX.Element => {
  return (
    <Wrapper>
      <SectionHeader>Features</SectionHeader>
      <FeaturesList>
        <FeatureCard
          iconName="devices-icon"
          title="Good bot"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
        <FeatureCard
          iconName="devices-icon"
          title="Nice bot"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
        <FeatureCard
          iconName="devices-icon"
          title="The best bot"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
      </FeaturesList>
    </Wrapper>
  );
};

export default FeaturesSection;
