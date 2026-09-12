import TaskForm from '../taskForm/TaskForm';
import TodoInfo from '../todoInfo/TodoInfo';
import TodoList from '../todoList/TodoList';

const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <TaskForm />
      <TaskForm />
      <TodoInfo />
      <TodoList />
    </div>
  );
};

export default Todo;
