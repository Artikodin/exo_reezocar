import PropTypes from "prop-types";

import { StyledForm } from "./styles";
import Input from "./Input";

const Form = ({ children, direction }) => {
  console.log(direction);

  return (
    <StyledForm direction={direction} action="" method="post">
      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(["row", "column"])
};

Form.defaultProps = {
  children: null,
  direction: "row"
};

Form.Input = Input;

export default Form;
