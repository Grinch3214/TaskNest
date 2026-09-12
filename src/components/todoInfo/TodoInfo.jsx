const TodoInfo = (props) => {
  const { total, done } = props;
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} from {total}
      </div>
      {Boolean(total) && (
        <button className="todo__delete-all-button" type="button">
          Delete all
        </button>
      )}
    </div>
  );
};

export default TodoInfo;
