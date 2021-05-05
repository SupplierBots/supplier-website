import Image from 'next/image';
import styled from 'styled-components';
import { colors } from 'constants/theme';
import { moveUpDown } from 'constants/animations';
import SecondaryButton from 'components/SecondaryButton';
import PurchaseButton from 'components/PurchaseButton';
import { devices } from 'constants/mediaQueriesBreakpoints';

const Wrapper = styled.section`
  background-image: url('static/background-transition-mobile.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100% auto;

  @media ${devices.tablet} {
    height: 100vh;
  }

  @media ${devices.desktop} {
    background-image: url('static/background-transition-desktop.svg');
  }
`;

const Content = styled.div`
  animation: ${moveUpDown} 3s cubic-bezier(0.61, 1, 0.88, 1) infinite;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 24vw;
`;

const MainParagraphs = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  line-height: 1;
  margin-top: 2%;
`;

const Name = styled.h1`
  font-size: 11vw;
  color: ${colors.lightPurple};
  font-weight: 300;
  margin-top: 2%;
`;

const Slogan = styled.h2`
  font-size: 6.5vw;
  background: ${colors.mainGradientLR};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 300;
`;

const BrandingContainer = styled.div`
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
`;

const Screens = styled.img`
  max-height: 42vh;
  object-fit: contain;
`;

interface Props {
  productPrice: string;
}

const HeroSection = ({ productPrice }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <BrandingContainer>
          <Logo>
            <Image
              src="/static/supplier-logo.png"
              alt="Supplier Logo"
              height="auto"
              width="auto"
              layout="responsive"
              unoptimized
              priority
            />
          </Logo>
          <MainParagraphs>
            <Name>Supplier</Name>
            <Slogan>Made to cop easily</Slogan>
          </MainParagraphs>
        </BrandingContainer>
        <ButtonsContainer>
          <PurchaseButton price={productPrice} />
          <SecondaryButton width="16rem">See features</SecondaryButton>
        </ButtonsContainer>
        <Screens src="/static/screens.png" alt="Screens" />
      </Content>
    </Wrapper>
  );
};

export default HeroSection;
