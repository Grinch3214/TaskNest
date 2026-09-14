import { useState, useEffect, useRef } from 'react';
import TaskForm from '../taskForm/TaskForm';
import TodoInfo from '../todoInfo/TodoInfo';
import TodoList from '../todoList/TodoList';

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    console.log('useState');
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  const newTaskTitleRef = useRef(null);

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
    setSearchQuery(query);
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
      setSearchQuery('');

      newTaskTitleRef.current.focus();
    }
  };

  const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();
  const filteredTask =
    clearSearchQuery > 0
      ? tasks.filter(({ title }) =>
          title.toLocaleLowerCase().includes(clearSearchQuery),
        )
      : null;

  useEffect(() => {
    console.log('useEffect');
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    newTaskTitleRef.current.focus();
  }, []);

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
        inputRef={newTaskTitleRef}
      />
      <TaskForm
        classInput="todo__field"
        id="search-task"
        label="Search Task"
        typeInput="search"
        value={searchQuery}
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
        filteredTask={filteredTask}
      />
    </div>
  );
};

export default Todo;
