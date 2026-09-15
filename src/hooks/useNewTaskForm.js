import { useState, useRef, useEffect } from 'react';

export function useNewTaskForm(onAddTask) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const inputRef = useRef(null);

  const isDisabled = newTaskTitle.trim().length === 0;

  const submitNewTask = () => {
    const title = newTaskTitle.trim();

    if (title.length === 0) {
      return false;
    }

    onAddTask(title);
    setNewTaskTitle('');
    inputRef.current?.focus();

    return true;
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return {
    newTaskTitle,
    setNewTaskTitle,
    inputRef,
    isDisabled,
    submitNewTask,
  };
}
