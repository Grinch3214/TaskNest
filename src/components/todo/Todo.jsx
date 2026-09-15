import TaskForm from '../taskForm/TaskForm';
import TodoInfo from '../todoInfo/TodoInfo';
import TodoList from '../todoList/TodoList';
import { useTasks } from '../../hooks/useTasks';
import { useNewTaskForm } from '../../hooks/useNewTaskForm';
import { useTaskSearch } from '../../hooks/useTaskSearch';

const Todo = () => {
  const {
    tasks,
    taskFiltered,
    addTask,
    deleteTask,
    toggleTaskComplete,
    deleteAllTasks,
  } = useTasks();

  const { searchQuery, setSearchQuery, filteredTask } = useTaskSearch(tasks);

  const {
    newTaskTitle,
    inputRef,
    isDisabled,
    submitNewTask,
    handleChange,
    error,
  } = useNewTaskForm(addTask);

  const handleAddTask = () => {
    if (submitNewTask()) {
      setSearchQuery('');
    }
  };

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
        onSubmit={handleAddTask}
        value={newTaskTitle}
        onChange={handleChange}
        inputRef={inputRef}
        isDisabled={isDisabled}
        error={error}
      />
      <TaskForm
        classInput="todo__field"
        id="search-task"
        label="Search Task"
        typeInput="search"
        value={searchQuery}
        onChange={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={taskFiltered.length}
        onButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
        filteredTask={filteredTask}
      />
    </div>
  );
};

export default Todo;
