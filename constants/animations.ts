import { keyframes } from 'styled-components';

export const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1vh);
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const scaleUpDown = keyframes`
  0%, 100% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(1.4);;
  }
`;
