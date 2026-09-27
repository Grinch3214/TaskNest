import type { Task } from '../../types/task';
import Button from '../button/Button';

interface TodoItemProps {
  className?: string;
  title: Task['title'];
  isDone: Task['isDone'];
  id: Task['id'];
  onButtonClick?: (id: Task['id']) => void;
  onTaskCompleteChange: (id: Task['id'], isDone: boolean) => void;
}

const TodoItem = (props: TodoItemProps) => {
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
        onButtonClick={() => onButtonClick?.(id)}
      />
    </li>
  );
};

export default TodoItem;
