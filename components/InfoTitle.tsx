import { devices } from 'constants/mediaQueriesBreakpoints';
import styled from 'styled-components';

export const InfoTitle = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
  line-height: 1.1;

  @media ${devices.desktop} {
    font-size: 1em;
    margin-bottom: 0.1em;
  }
`;
