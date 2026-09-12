import Button from '../button/Button';

const TodoItem = (props) => {
  const { className = '', title, isDone, id } = props;

  return (
    <li className={`todo-item ${className}`}>
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        checked={isDone}
      />
      <label className="todo-item__label" htmlFor={id}>
        {title}
      </label>
      <Button
        hasIcon
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
      />
    </li>
  );
};

export default TodoItem;
