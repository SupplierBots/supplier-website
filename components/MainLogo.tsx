import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

const MainLogo = (): JSX.Element => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default MainLogo;
