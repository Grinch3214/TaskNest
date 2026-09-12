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
  } = props;

  return (
    <form className="todo__form">
      <Field className={classInput} id={id} label={label} type={typeInput} />
      {hasButton && (
        <Button className={classButton} type={typeButton}>
          {titleButton}
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
