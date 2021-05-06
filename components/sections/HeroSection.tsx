import Image from 'next/image';
import styled from 'styled-components';
import { colors } from 'constants/theme';
import { moveUpDown } from 'constants/animations';
import SecondaryButton from 'components/SecondaryButton';
import PurchaseButton from 'components/PurchaseButton';
import { devices } from 'constants/mediaQueriesBreakpoints';
import StyledParticles from 'components/StyledParticles';

const Wrapper = styled.section`
  background-image: url('static/background-transition-mobile.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100% auto;

  @media ${devices.desktop} {
    background-image: url('static/background-transition-desktop.svg');
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

const Logo = styled.div`
  width: 20vw;

  @media ${devices.tablet} {
    width: min(20vw, 11.4rem);
  }

  @media ${devices.desktop} {
    width: 7.5em;
  }
`;

const MainParagraphs = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  line-height: 1;
  margin-top: 3%;
`;

const Name = styled.h1`
  font-size: 11vw;
  color: ${colors.lightPurple};
  font-weight: 300;

  @media ${devices.tablet} {
    font-size: min(11vw, 6.3rem);
  }

  @media ${devices.desktop} {
    font-size: 4em;
    margin-top: 0;
  }
`;

const Slogan = styled.h2`
  font-size: 6.5vw;
  background: ${colors.mainGradientLR};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;

  @media ${devices.tablet} {
    font-size: min(6.5vw, 3.75rem);
  }

  @media ${devices.desktop} {
    font-size: 2.5em;
  }
`;

const Branding = styled.div`
  margin-top: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

const HeroSection = ({ productPrice }: Props): JSX.Element => {
  return (
    <Wrapper>
      <StyledParticles />
      <Content>
        <Details>
          <Branding>
            <Logo>
              <Image
                src="/static/supplier-logo.png"
                alt="Supplier Logo"
                height="auto"
                width="auto"
                layout="responsive"
                priority
              />
            </Logo>
            <MainParagraphs>
              <Name>Supplier</Name>
              <Slogan>Made to cop easily</Slogan>
            </MainParagraphs>
          </Branding>
          <ButtonsContainer>
            <PurchaseButton price={productPrice} />
            <FeaturesButton>See features</FeaturesButton>
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
