import TodoItem from '../todoItem/TodoItem';

const TodoList = (props) => {
  const { tasks = [], onButtonClick, onTaskCompleteChange } = props;

  if (!tasks.length) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          {...task}
          className="todo__item"
          onTaskCompleteChange={onTaskCompleteChange}
          onButtonClick={onButtonClick}
        />
      ))}
    </ul>
  );
};

export default TodoList;
