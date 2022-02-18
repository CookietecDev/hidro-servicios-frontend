import React from 'react'
import Menu from "../components/containers/Menu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import '../styles/global.css'

const SiteApp = (props) => {
  const { Component, pageProps } = props;

  const GlobalStyle = createGlobalStyle`
     body {
      font-family: 'Raleway', sans-serif !important;
      padding: 0;
      margin: 0;
    }
  `;

  const theme = {
    primary: '#2F5597',
    secondary: '#95BFE2',
    text: '#35393A',
    default: '#FFFFFF'
  };

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default SiteApp;


