import { devices } from 'constants/mediaQueriesBreakpoints';
import styled from 'styled-components';

export const SmallLogoContainer = styled.div`
  margin-bottom: 4rem;
  @media ${devices.desktop} {
    font-size: 0.75em;
    margin-bottom: 4em;
  }
`;
