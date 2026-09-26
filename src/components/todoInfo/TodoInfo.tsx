import type { MouseEventHandler } from 'react';

interface TodoInfoProps {
  total: number;
  done: number;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

const TodoInfo = (props: TodoInfoProps) => {
  const { total, done, onButtonClick } = props;

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} from {total}
      </div>
      {Boolean(total) && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={onButtonClick}
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default TodoInfo;
