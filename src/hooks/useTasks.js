import { useState, useEffect, useMemo } from 'react';
import tasksAPI from '../api/tasksAPI';

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  const taskFiltered = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone);
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      title,
      isDone: false,
    };

    tasksAPI.add(newTask).then((addedTask) => {
      setTasks((prevTasks) => [...prevTasks, addedTask]);
    });
  };

  const deleteTask = (taskId) => {
    tasksAPI.delete(taskId).then(() => {
      setTasks((prevTasks) => prevTasks.filter(({ id }) => id !== taskId));
    });
  };

  const toggleTaskComplete = (taskId, isDone) => {
    tasksAPI.toggleComplete(taskId, isDone).then(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, isDone } : task,
        ),
      );
    });
  };

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?');

    if (isConfirmed) {
      tasksAPI.deleteAll(tasks).then(() => setTasks([]));
    }
  };

  useEffect(() => {
    tasksAPI.getAll().then(setTasks);
  }, []);

  return {
    tasks,
    taskFiltered,
    addTask,
    deleteTask,
    toggleTaskComplete,
    deleteAllTasks,
  };
}
