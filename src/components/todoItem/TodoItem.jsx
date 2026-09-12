import Button from '../button/Button';

const TodoItem = (props) => {
  const {
    className = '',
    title,
    isDone,
    id,
    onButtonClick,
    onTaskCompleteChange,
  } = props;

  return (
    <li className={`todo-item ${className}`}>
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={(event) => onTaskCompleteChange(id, event.target.checked)}
      />
      <label className="todo-item__label" htmlFor={id}>
        {title}
      </label>
      <Button
        hasIcon
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onButtonClick={() => onButtonClick(id)}
      />
    </li>
  );
};

export default TodoItem;
