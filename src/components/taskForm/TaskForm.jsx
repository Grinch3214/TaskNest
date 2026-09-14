import Field from '../field/Field';
import Button from '../button/Button';

const TaskForm = (props) => {
  const {
    id,
    label,
    classInput,
    typeInput,
    hasButton = false,
    typeButton,
    titleButton,
    classButton,
    onChange,
    onTaskClick,
    onSubmit,
    value,
    inputRef,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <Field
        className={classInput}
        id={id}
        label={label}
        type={typeInput}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      {hasButton && (
        <Button
          className={classButton}
          type={typeButton}
          onButtonClick={onTaskClick}
        >
          {titleButton}
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
