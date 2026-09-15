import { useState, useMemo } from 'react';

export function useTaskSearch(tasks) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTask = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();

    return query.length > 0
      ? tasks.filter(({ title }) => title.toLocaleLowerCase().includes(query))
      : null;
  }, [searchQuery, tasks]);

  return {
    searchQuery,
    setSearchQuery,
    filteredTask,
  };
}
