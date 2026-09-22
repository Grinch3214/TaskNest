import type {
  FormEvent,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';
import Field from '../field/Field';
import Button from '../button/Button';

interface TaskFormProps {
  id: string;
  label: string;
  classInput?: string;
  typeInput?: HTMLInputTypeAttribute;
  hasButton?: boolean;
  typeButton?: 'button' | 'submit' | 'reset';
  titleButton?: ReactNode;
  classButton?: string;
  onChange?: (value: string) => void;
  onTaskClick?: MouseEventHandler<HTMLButtonElement>;
  onSubmit?: () => void;
  value?: string;
  inputRef?: Ref<HTMLInputElement>;
  isDisabled?: boolean;
  error?: string;
}

const TaskForm = (props: TaskFormProps) => {
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
    isDisabled,
    error,
  } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
        error={error}
      />
      {hasButton && (
        <Button
          className={classButton}
          type={typeButton}
          isDisabled={isDisabled}
          onButtonClick={onTaskClick}
        >
          {titleButton}
        </Button>
      )}
    </form>
  );
};

export default TaskForm;
