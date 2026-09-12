import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  const hasTask = true;

  if (!hasTask) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoList;
