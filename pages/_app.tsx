import React from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import { theme as brazilTheme } from "../styles/themes/brazil";
import { theme as franceTheme } from "../styles/themes/france";
import { theme as chinaTheme } from "../styles/themes/china";
import { LoadingScreen } from "../components/LoadingScreen";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => {
      return props.theme.text.fontFamily;
    }}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no"
        />
      </Head>
      {/* <ThemeProvider theme={brazilTheme}> */}
      {/* <ThemeProvider theme={franceTheme}> */}
      {/* <ThemeProvider theme={brazilTheme}> */}
      {!loading ? (
        <ThemeProvider theme={chinaTheme}>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp;
