import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, shadows } from 'constants/theme';
import { hasPointer } from 'constants/mediaQueriesBreakpoints';

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.button<Props>`
  background: ${colors.mainGradient45};
  border: none;
  border-radius: 0.5rem;

  height: ${({ height }) => (height ? height : '4.5rem')};
  width: ${({ width }) => (width ? width : '19rem')};

  outline: none;
  box-shadow: ${shadows.primary};
  z-index: 1;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        ${colors.primaryBackground},
        ${colors.primaryBackground}
      ),
      ${colors.mainGradient45};
    background-origin: border-box;
    border: double 1px transparent;
    background-clip: padding-box, border-box;
    z-index: -1;
    transition: opacity 0.3s;
    opacity: 0;
    border-radius: 0.5rem;
  }

  @media ${hasPointer} {
    :hover::before {
      opacity: 1;
    }
  }
`;

const ButtonContent = styled.p<Props>`
  font-family: 'Lato', sans-serif;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.7rem')};

  color: ${colors.primaryBackground};
  transition: 0.3s all;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${hasPointer} {
    ${/* sc-selector */ ButtonWrapper}:hover & {
      color: transparent;
      background: ${colors.mainGradient45};
      /* stylelint-disable-next-line */ /* prefix is necessary: background-clip doesn't work in Chromium */
      -webkit-background-clip: text;
      background-clip: text;
      text-shadow: ${shadows.primary};
    }
  }
`;

const PrimaryButton = (props: Props): JSX.Element => (
  <ButtonWrapper {...props} type="button">
    <ButtonContent {...props}>{props.children}</ButtonContent>
  </ButtonWrapper>
);

export default PrimaryButton;
