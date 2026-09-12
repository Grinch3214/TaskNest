import IconClose from '../icons/IconClose';

const TodoItem = () => {
  return (
    <li className="todo__item todo-item">
      <input
        className="todo-item__checkbox"
        id="task-1"
        type="checkbox"
        checked
      />
      <label className="todo-item__label" htmlFor="task-1">
        Task 1
      </label>
      <button
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
      >
        <IconClose />
      </button>
    </li>
  );
};

export default TodoItem;
