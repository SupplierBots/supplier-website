import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import styled from 'styled-components';

const Wrapper = styled.footer`
  padding: 4rem 0;

  @media ${devices.desktop} {
    padding: 4rem 0 3.5rem 0;
    font-size: clamp(14px, 1vw, 19.2px);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-weight: 300;
  color: ${colors.lightPurple};

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: flex-end;
    max-width: 57em;
    margin: 0 auto;
  }
`;

const Link = styled.a`
  cursor: pointer;
  color: ${colors.lightGrey};

  font-size: 1.5rem;

  @media ${devices.desktop} {
    margin-top: 0;
    font-size: 0.75em;
  }

  :not(:last-of-type) {
    margin-bottom: 0.2rem;

    @media ${devices.desktop} {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  @media ${devices.desktop} {
    font-size: 0.75em;
    margin-top: 0;
    margin-left: 4rem;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <Link>Terms of service</Link>
        <Link>Privacy policy</Link>
        <Copyright>Copyright © 2021 Supplier</Copyright>
      </Content>
    </Wrapper>
  );
};

export default Footer;
