import IconClose from '../icons/IconClose';

const Button = (props) => {
  const {
    className = '',
    type = 'button',
    children = 'Button',
    hasIcon = false,
    onButtonClick,
    isDisabled,
    ...rest
  } = props;

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
