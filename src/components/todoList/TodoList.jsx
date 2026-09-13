import TodoItem from '../todoItem/TodoItem';

const TodoList = (props) => {
  const {
    tasks = [],
    onButtonClick,
    onTaskCompleteChange,
    filteredTask,
  } = props;

  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTask?.length === 0;

  if (!hasTasks) {
    return <div className="todo__empty-message">Empty list</div>;
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>;
  }

  return (
    <ul className="todo__list">
      {(filteredTask ?? tasks).map((task) => (
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
