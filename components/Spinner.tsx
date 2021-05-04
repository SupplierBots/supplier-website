import { colors } from 'constants/theme';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const mainAnim = keyframes`
    100% {
      transform: rotate(360deg);
    }
`;

const dotAnim = keyframes`
   80%, 100% {
      transform: rotate(360deg);
    }
`;

const dotBeforeAnim = keyframes`
   50% {
    transform: scale(0.4);
  } 100%, 0% {
    transform: scale(1.0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19rem;
  height: 4.5rem;
`;

const DotsContainer = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  animation: ${mainAnim} 2.5s infinite linear both;
`;

const Dot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${dotAnim} 2s infinite ease-in-out both;

  :before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: ${colors.primaryBackground};
    border-radius: 100%;
    animation: ${dotBeforeAnim} 2s infinite ease-in-out both;
  }

  ${/* sc-selector */ Wrapper}:hover &:before {
    background-color: ${colors.pink};
  }

  :nth-child(1) {
    animation-delay: -1.1s;
  }
  :nth-child(2) {
    animation-delay: -1s;
  }
  :nth-child(3) {
    animation-delay: -0.9s;
  }
  :nth-child(4) {
    animation-delay: -0.8s;
  }
  :nth-child(5) {
    animation-delay: -0.7s;
  }
  :nth-child(6) {
    animation-delay: -0.6s;
  }
  :nth-child(1):before {
    animation-delay: -1.1s;
  }
  :nth-child(2):before {
    animation-delay: -1s;
  }
  :nth-child(3):before {
    animation-delay: -0.9s;
  }
  :nth-child(4):before {
    animation-delay: -0.8s;
  }
  :nth-child(5):before {
    animation-delay: -0.7s;
  }
  :nth-child(6):before {
    animation-delay: -0.6s;
  }
`;

const Spinner = (): JSX.Element => {
  return (
    <Wrapper>
      <DotsContainer>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </DotsContainer>
    </Wrapper>
  );
};

export default Spinner;
