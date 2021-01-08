import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root { 
    --white: #FFFFFF;
    --black: #000000;
    --green: #00C39A;
    --blue: #05668D;
    --light-blue: rgba(5, 102, 141, 0.1);
    --dark-grey: #494949;
    --grey: #353535;
    --light-grey: #C6C6C6;
    --lighter-grey: #F9F6F6;
    --extra-light-grey: #FEFEFE;
;

    --border-radius-6: 6px;
  }

  html{
    font-size: 10px;
    @media (max-width: 803px) {
      font-size: 7px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "montserrat";
    src: url("/fonts/montserrat/Montserrat-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "montserrat";
    src: url("/fonts/montserrat/Montserrat-Medium.ttf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "montserrat";
    src: url("/fonts/montserrat/Montserrat-SemiBold.ttf");
    font-style: bold;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "montserrat";
    src: url("/fonts/montserrat/Montserrat-Bold.ttf");
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "montserrat";
    src: url("/fonts/montserrat/Montserrat-ExtraBold.ttf");
    font-style: bold;
    font-weight: 800;
    font-display: swap;
  }
`;

export default GlobalStyle;
