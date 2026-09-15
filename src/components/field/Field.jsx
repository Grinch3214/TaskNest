const Field = (props) => {
  const {
    className = '',
    id,
    label,
    type = 'text',
    value,
    onChange,
    ref,
    error,
  } = props;

  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`field__input ${error ? 'field__input--invalid' : ''}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={(event) => onChange?.(event.target.value)}
        ref={ref}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
};

export default Field;
