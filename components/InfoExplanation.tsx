import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import styled from 'styled-components';

export const InfoExplanation = styled.p`
  font-size: 1.5rem;
  color: ${colors.lightGrey};
  margin-bottom: 2rem;

  @media ${devices.desktop} {
    font-size: 0.95em;
    margin-bottom: 1.75em;
  }
`;
