import PropTypes from "prop-types";

import {
  Container,
  Label,
  InputContainer,
  IconContainer,
  AnnexeContainer
} from "./styles";

const Input = ({ name, title, icon, placeholder, annexe }) => {
  return (
    <Container className="form-input">
      {title && <Label htmlFor={name}>{title}</Label>}
      <InputContainer>
        <input type="text" name={name} id={name} placeholder={placeholder} />
        {icon && <IconContainer>{icon}</IconContainer>}
      </InputContainer>
      {annexe && <AnnexeContainer>{annexe}</AnnexeContainer>}
    </Container>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  annexe: PropTypes.node
};

Input.defaultProps = {
  title: "",
  placeholder: "",
  icon: null,
  annexe: null
};

export default Input;
