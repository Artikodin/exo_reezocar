import { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Chip = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <Container isSelected={isSelected} onClick={handleClick}>
      {children}
    </Container>
  );
};

Chip.propTypes = {
  children: PropTypes.string
};

Chip.defaultProps = {
  children: ""
};

export default Chip;
