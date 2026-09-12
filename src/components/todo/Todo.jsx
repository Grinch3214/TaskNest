import { useState } from 'react';
import TaskForm from '../taskForm/TaskForm';
import TodoInfo from '../todoInfo/TodoInfo';
import TodoList from '../todoList/TodoList';

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Купить молоко', isDone: false },
    { id: 2, title: 'Помыть посуду', isDone: true },
    { id: 3, title: 'Выучить React', isDone: false },
    { id: 4, title: 'Позвонить другу', isDone: true },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const taskFiltered = tasks.filter(({ isDone }) => isDone);

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?');

    if (isConfirmed) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(({ id }) => id !== taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }

        return task;
      }),
    );
  };

  const filterTask = (query) => {
    console.log(query);
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([newTask, ...tasks]);
      setNewTaskTitle('');
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
        onSubmit={addTask}
        value={newTaskTitle}
        onChange={setNewTaskTitle}
      />
      <TaskForm
        classInput="todo__field"
        id="search-task"
        label="Search Task"
        typeInput="search"
        onChange={filterTask}
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
      />
    </div>
  );
};

export default Todo;
