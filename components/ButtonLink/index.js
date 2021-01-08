import Link from "next/link";
import PropTypes from "prop-types";

import { Button } from "./styles";

const ButtonLink = ({ children, href, type, size, color }) => {
  return href ? (
    <Link href={href}>
      <Button as="a" size={size} color={color}>
        {children}
      </Button>
    </Link>
  ) : (
    <Button size={size} color={color} type={type}>
      {children}
    </Button>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  size: PropTypes.oneOf(["default", "big", "large"]),
  color: PropTypes.oneOf(["green", "grey", "blue"])
};

ButtonLink.defaultProps = {
  href: "",
  type: "button",
  size: "default",
  color: "green"
};

export default ButtonLink;
