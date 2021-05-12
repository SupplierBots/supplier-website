import styled from 'styled-components';
import { moveUpDown } from 'constants/animations';
import SecondaryButton from 'components/SecondaryButton';
import PurchaseButton from 'components/PurchaseButton';
import { devices } from 'constants/mediaQueriesBreakpoints';
import StyledParticles from 'components/StyledParticles';
import MainLogo from 'components/MainLogo';

const Wrapper = styled.section`
  background-image: url('static/hero-transition-mobile.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100% auto;

  @media ${devices.desktop} {
    background-image: url('static/hero-transition-desktop.svg');
  }
`;

const Content = styled.div`
  animation: ${moveUpDown} 3s cubic-bezier(0.61, 1, 0.88, 1) infinite;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.desktop} {
    display: grid;
    grid-template-column: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'details screens';
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    width: min(99vw, 1600px);
    grid-column-gap: min(99vw, 160px);
    font-size: min(1vw, 22px);
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 5.5vh;
  margin-bottom: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  button:first-child {
    margin-bottom: 1.5rem;
  }

  @media ${devices.desktop} {
    flex-direction: row;
    margin-top: 0.7em;

    button:first-child {
      margin-right: 1em;
      margin-bottom: 0;
    }
  }
`;

const Screens = styled.div`
  position: relative;

  img {
    height: 42vh;
    width: auto;

    @media ${devices.desktop} {
      grid-area: screens;
      height: auto;
      width: 37.5em;
    }
  }
`;

const Details = styled.div`
  grid-area: details;

  @media ${devices.desktop} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 30vh;
  }
`;

const SupportedDevices = styled.span`
  position: absolute;
  top: 39%;
  left: 21%;
  font-size: 2vh;
  font-weight: 300;

  @media ${devices.desktop} {
    left: 22%;
    font-size: 1.75em;
  }
`;

const FeaturesButton = styled(SecondaryButton)`
  width: 16rem;

  @media ${devices.desktop} {
    height: 2.6em;
    width: 9em;
    font-size: 0.9em;
  }
`;

interface Props {
  productPrice: string;
  featuresScrollCallback: () => void;
}

const HeroSection = ({
  productPrice,
  featuresScrollCallback,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <StyledParticles />
      <Content>
        <Details>
          <MainLogo />
          <ButtonsContainer>
            <PurchaseButton price={productPrice} />
            <FeaturesButton onClick={featuresScrollCallback}>
              See features
            </FeaturesButton>
          </ButtonsContainer>
        </Details>
        <Screens>
          <SupportedDevices>Desktop & Mobile</SupportedDevices>
          <img src="/static/screens.png" alt="Screens" />
        </Screens>
      </Content>
    </Wrapper>
  );
};

export default HeroSection;
