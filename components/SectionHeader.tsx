import { devices } from 'constants/mediaQueriesBreakpoints';
import { colors } from 'constants/theme';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Text = styled.h3`
  font-size: 3.75rem;
  font-weight: 300;
  text-align: center;
  background: ${colors.mainGradientLR};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media ${devices.desktop} {
    font-size: 2.3em;
    margin-bottom: 0.25em;
  }
`;

const Separator = styled.div`
  width: 4rem;
  height: 2px;
  margin: 0 auto;
  background: ${colors.lightPurple};
  margin-bottom: 3.5rem;

  @media ${devices.desktop} {
    margin-bottom: 2.3em;
  }
`;

interface Props {
  children: ReactNode;
}

const SectionHeader = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Text>{children}</Text>
      <Separator />
    </>
  );
};

export default SectionHeader;
