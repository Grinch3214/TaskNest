const Field = (props) => {
  const { className = '', id, label, type = 'text', onTaskInput } = props;

  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={(event) => onTaskInput(event.target.value)}
      />
    </div>
  );
};

export default Field;
