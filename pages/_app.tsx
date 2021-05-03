import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
  }

  a,
  a:hover {
    text-decoration: none;
    -webkit-user-drag: none;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
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
