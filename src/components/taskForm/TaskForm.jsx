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
    onTaskInput,
    onTaskClick,
    onSubmit,
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
        onTaskInput={onTaskInput}
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
