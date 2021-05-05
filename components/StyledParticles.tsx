import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const Renderer = styled(Particles)`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  pointer-events: none;
  z-index: -100;
`;

const StyledParticles = (): JSX.Element => {
  return (
    <Renderer
      options={{
        particles: {
          number: {
            value: isMobile ? 8 : 3,
            density: {
              enable: true,
              value_area: isMobile ? 100 : 100,
            },
          },
          color: {
            value: '#c95ba3',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#9253c1',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },

        retina_detect: isMobile,
        fpsLimit: 30,
      }}
    />
  );
};

export default StyledParticles;
