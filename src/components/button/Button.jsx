import IconClose from '../icons/IconClose';

const Button = (props) => {
  const {
    className = '',
    type = 'button',
    children = 'Button',
    hasIcon = false,
    ...rest
  } = props;

  return (
    <button {...rest} className={`button ${className}`} type={type}>
      {!hasIcon ? children : <IconClose />}
    </button>
  );
};

export default Button;
