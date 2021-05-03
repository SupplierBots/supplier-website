import { AppProps } from 'next/dist/next-server/lib/router/router';
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-app-region: no-drag;
  }

  html {
    /* 16px * 62.5% = 10px = 1rem */
    font-size: 62.5%;
  }

  body {
    font-family: "Lato", sans-serif;
    overflow: hidden;
    background: #1B191C;
    color: #F1E3FF;
  }

  a,
  a:hover {
    text-decoration: none;
    -webkit-user-drag: none;
  }
`;

export const theme: DefaultTheme = {
  pink: '#C95BA3',
  violet: '#9253C1',
  lightPurple: '#F1E3FF',

  primaryBackground: '#1B191C',
  secondaryBackground: '#242225',
  tertiaryBackground: '#282629',

  darkGrey: '#747273',
  lightGrey: '#B4B1B2',
  redDanger: 'linear-gradient(123.69deg, #D20000 0%, #890000 100%)',

  mainGradientLR: 'linear-gradient(to right, #C95BA3, #9253C1)',
  mainGradientTB: 'linear-gradient(#C95BA3, #9253C1)',
  mainGradient45: 'linear-gradient(to right bottom, #C95BA3, #9253C1)',

  primaryBoxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
  sidebarBoxShadow: '5px 0px 10px rgba(0, 0, 0, 0.25)',

  fontSmall: '1.1rem',
  fontMedium: '1.3rem',
  fontRegular: '1.4rem',
  fontBig: '1.6rem',
  fontLarge: '1.8rem',
  fontHeading: '2.2rem',
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
