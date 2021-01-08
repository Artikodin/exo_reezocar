import PropTypes from "prop-types";
import { Header, GlobalStyle } from "./App";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
};

App.defaultProps = {
  Component: null,
  pageProps: {}
};
