import TaskForm from '../taskForm/TaskForm';
import TodoInfo from '../todoInfo/TodoInfo';
import TodoList from '../todoList/TodoList';

const Todo = () => {
  const tasks = [
    { id: 1, title: 'Купить молоко', isDone: false },
    { id: 2, title: 'Помыть посуду', isDone: true },
    { id: 3, title: 'Выучить React', isDone: false },
    { id: 4, title: 'Позвонить другу', isDone: true },
  ];

  const taskFiltered = tasks.filter(({ isDone }) => isDone);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <TaskForm
        classInput="todo__field"
        id="new-task"
        label="New Task Title"
        hasButton
        typeButton="submit"
        titleButton="Add"
      />
      <TaskForm
        classInput="todo__field"
        id="search-task"
        label="Search Task"
        type="search"
      />
      <TodoInfo total={tasks.length} done={taskFiltered.length} />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;
