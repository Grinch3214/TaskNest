import type { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import IconClose from '../icons/IconClose';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

const Button = ({
  className = '',
  type = 'button',
  children = 'Button',
  hasIcon = false,
  onButtonClick,
  isDisabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`button ${className}`}
      type={type}
      disabled={isDisabled}
      onClick={onButtonClick}
    >
      {!hasIcon ? children : <IconClose />}
    </button>
  );
};

export default Button;
