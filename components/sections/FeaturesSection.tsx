import FeatureCard from 'components/FeatureCard';
import { scaleUpDown } from 'constants/animations';
import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${colors.secondaryBackground};
  padding-bottom: 20rem;
  padding-top: 5rem;

  @media ${devices.tablet} {
    padding-top: 0;
  }
`;

const Heading = styled.h3`
  font-size: 4.25rem;
  font-weight: 300;
  text-align: center;
  background: ${colors.mainGradientLR};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const FeaturesList = styled.div`
  div {
    margin-bottom: 2rem;

    @media ${devices.tablet} {
      margin-bottom: 0;
    }
  }

  max-width: 90vw;
  margin: 0 auto;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    max-width: 85vw;
  }

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem;
    max-width: 100rem;
  }
`;

const Separator = styled.div`
  width: 4rem;
  height: 2px;
  margin: 0 auto;
  background: ${colors.lightPurple};
  margin-bottom: 5rem;
`;

const FeaturesSection = (): JSX.Element => {
  return (
    <Wrapper>
      <Heading>Features</Heading>
      <Separator />
      <FeaturesList>
        <FeatureCard
          iconName="devices-icon"
          title="Run on multiple devices"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
        <FeatureCard
          iconName="devices-icon"
          title="Run on multiple devices"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
        <FeatureCard
          iconName="devices-icon"
          title="Run on multiple devices"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
        <FeatureCard
          iconName="devices-icon"
          title="Run on multiple devices"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
        <FeatureCard
          iconName="devices-icon"
          title="Run on multiple devices"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
        <FeatureCard
          iconName="devices-icon"
          title="Run on multiple devices"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et sunt animi ex iusto odio exercitationem id atque officiis. Voluptatem amet neque aliquam deleniti, dignissimos, tempore doloribus quibusdam perferendis facere accusantium eaque temporibus ex placeat"
        />
      </FeaturesList>
    </Wrapper>
  );
};

export default FeaturesSection;
