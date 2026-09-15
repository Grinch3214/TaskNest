import { useState, useEffect, useMemo } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const taskFiltered = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone);
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isDone: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(({ id }) => id !== taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, isDone } : task)),
    );
  };

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?');

    if (isConfirmed) {
      setTasks([]);
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    taskFiltered,
    addTask,
    deleteTask,
    toggleTaskComplete,
    deleteAllTasks,
  };
}
