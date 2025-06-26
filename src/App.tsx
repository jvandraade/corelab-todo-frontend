import React, { useState } from 'react';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import TaskForm from './components/TaskForm/TaskForm';
import TaskTaskItemfrom './components/TaskList/TaskList';
import type { Task } from './types/task';

const App: React.FC = () => {
  // Estado das tarefas
  const [tasks, setTasks] = useState<Task[]>([]);

  // Estado dos filtros
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [filterColor, setFilterColor] = useState<string | null>(null);

  // Função para adicionar nova tarefa
  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  // Alternar favorito
  const toggleFavorite = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, favorite: !task.favorite } : task,
      ),
    );
  };

  // Filtrar tarefas conforme filtros ativos
  const filteredTasks = tasks.filter((task) => {
    if (filterFavorites && !task.favorite) return false;
    if (filterColor && task.color !== filterColor) return false;
    return true;
  });

  return (
    <div className="app-container">
      <Header />
      <FilterBar
        showOnlyFavorites={filterFavorites}
        onToggleFavorites={() => setFilterFavorites(!filterFavorites)}
        selectedColor={filterColor}
        onColorFilter={(color) => setFilterColor(color)}
      />
      <TaskForm addTask={addTask} />
      <TaskTaskItemtasks={filteredTasks} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;
