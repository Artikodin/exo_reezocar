import PropTypes from "prop-types";

import { NavBar } from "..";
import { Container } from "./styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: null
};

export default Layout;
