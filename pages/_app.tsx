import { colors } from 'constants/theme';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import * as gtag from '../lib/gtag';
const isProduction = process.env.NODE_ENV === 'production';

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    /* 16px * 62.5% = 10px = 1rem */
    font-size: 62.5%;
  }

  body {
    font-family: "Lato", sans-serif;
    background: ${colors.primaryBackground};
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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) {
        gtag.pageview(url);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
