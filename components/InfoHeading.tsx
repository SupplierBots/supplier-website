import { devices } from 'constants/mediaQueriesBreakpoints';
import styled from 'styled-components';

export const InfoHeading = styled.h3`
  font-weight: 300;
  font-size: 2.1rem;
  margin-bottom: 0.4rem;
  line-height: 1.1;

  @media ${devices.desktop} {
    font-size: 1.15em;
    margin-bottom: 0.2em;
  }
`;
