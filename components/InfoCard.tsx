import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import styled from 'styled-components';

export const InfoCard = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  background-color: ${colors.tertiaryBackground};
  border-radius: 1em;
  padding: 4rem 8vw 4rem 8vw;
  font-weight: 300;

  @media ${devices.tablet} {
    padding: 6rem 5rem 5rem 5rem;
    margin-bottom: 0;
    max-width: 85vw;
    background-size: auto 55%;
  }

  @media ${devices.desktop} {
    padding: 3.55em 4.2em 2.55em 4.2em;
    max-width: 57em;
    margin: 0 auto;
    background-size: auto 80%;
  }
`;
