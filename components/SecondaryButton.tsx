import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, shadows } from 'constants/theme';
import { hasPointer } from 'constants/mediaQueriesBreakpoints';
import { isFirefox } from 'react-device-detect';

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.button<Props>`
  border-radius: 0.5rem;
  height: 4.5rem;

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

  background: linear-gradient(
      ${colors.primaryBackground},
      ${colors.primaryBackground}
    ),
    ${colors.mainGradient45};
  background-origin: border-box;
  border: double ${isFirefox ? '0.07vw' : '1px'} transparent;
  background-clip: padding-box, border-box;

  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.3s;
    opacity: 0;
    border-radius: 0.5rem;
    background: ${colors.mainGradient45};
    border-radius: 0;
  }
  @media ${hasPointer} {
    :hover::before {
      opacity: 1;
    }
  }
`;

const ButtonContent = styled.p<Props>`
  font-family: 'Lato';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.7rem')};

  color: ${colors.primaryBackground};
  transition: 0.3s all;
  z-index: 10;
  text-align: center;

  display: flex;
  display: -webkit-inline-box;
  align-items: center;
  justify-content: center;

  color: transparent;
  background: ${colors.mainGradient45};
  -webkit-background-clip: text;
  text-shadow: ${shadows.primary};

  @media ${hasPointer} {
    ${ButtonWrapper}:hover & {
      color: ${colors.primaryBackground};
    }
  }
`;

const SecondaryButton = (props: Props): JSX.Element => (
  <ButtonWrapper {...props} type="button">
    <ButtonContent {...props}>{props.children}</ButtonContent>
  </ButtonWrapper>
);

export default SecondaryButton;
