/**
 * Node modules
 */
import type { FC } from "react";
/**
 * Interface
 */
import type { ButtonProps } from "../../interfaces/button";
import { Link } from "react-router-dom";

const Button: FC<ButtonProps> = ({
  to,
  target = "_self",
  label,
  classes,
  state,
  icon,
  ...rest
}) => {
  if (to) {
    return (
      <Link to={to} target={target} state={state} className={`btn-primary ${classes}`}>
        {label && label} {icon && icon}
      </Link>
    );
  } else {
    return (
      <button className={`btn-primary ${classes}`} {...rest}>
        {label && label} {icon && icon}
      </button>
    );
  }
};

export default Button;
