import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import styled from 'styled-components';

export const InfoWrapper = styled.div`
  background-color: ${colors.secondaryBackground};
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media ${devices.desktop} {
    font-size: clamp(14px, 1vw, 19.2px);
  }
`;
