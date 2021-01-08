import PropTypes from "prop-types";

import { Title } from "./styles";
import Chip from "./Chip";

const ChipList = ({ children, title }) => {
  return (
    <div>
      <Title>{title}</Title>
      <div>{children}</div>
    </div>
  );
};

ChipList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

ChipList.defaultProps = {
  children: null,
  title: ""
};

ChipList.Chip = Chip;

export default ChipList;
