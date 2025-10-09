/**
 * Node modules
 */
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Button Interface
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  target?: string;
  classes?: string;
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'danger';
  state?: object;
  size?: string;
  children: ReactNode;
}
/**
 * Button
 */
const Button: FC<ButtonProps> = ({
  to,
  target = '_self',
  classes = '',
  variant = 'filled',
  color = 'primary',
  size = 'md',
  state,
  children,
  ...rest
}) => {
  if (to) {
    return (
      <Link
        to={to}
        target={target}
        state={state}
        className={`btn ${variant} ${color} ${size} ${classes}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`btn ${variant} ${color} ${size} ${classes}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

export default Button;

/**
 * Icon Button Interface
 */

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  to?: string;
  target?: string;
  classes?: string;
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'danger';
  state?: object;
  children?: ReactNode;
}

/**
 * Icon Button
 */

const IconButton: FC<IconButtonProps> = ({
  classes = '',
  icon,
  variant = 'filled',
  color = 'primary',
  children,
  to,
  target = '_self',
  ...rest
}) => {
  if (to) {
    return (
      <Link
        to={to}
        target={target}
        className={`btn-icon ${variant} ${color} ${classes}`}
      >
        {icon} {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`btn-icon ${variant} ${color} ${classes}`}
        {...rest}
      >
        {icon} {children}
      </button>
    );
  }
};

export { IconButton };
