import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import AddTask from '../../components/AddTask/AddTask';
import FilterBar from '../../components/FilterBar/FilterBar';
import TaskTaskItemfrom '../../components/TaskList/TaskList';
import type { Task } from '../../types/task';
import './Home.scss';
import { TaskItem } from '../../components/TaskItem/TaskItem';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [filterColor, setFilterColor] = useState<string | null>(null);

  // Adiciona uma nova tarefa
  const addTask = (task: { title: string; color: string }) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...task,
      favorite: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // Alterna a tarefa favorita
  const toggleFavorite = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, favorite: !task.favorite } : task,
      ),
    );
  };

  // Atualiza a cor da tarefa
  const updateTaskColor = (id: string, color: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, color } : task)),
    );
  };

  // Filtra tarefas por favorito e cor selecionada
  const filteredTasks = tasks.filter((task) => {
    if (filterFavorite && !task.favorite) return false;
    if (filterColor && task.color !== filterColor) return false;
    return true;
  });

  // Edita uma tarefa
  const handleEditTask = (id: string, newTitle: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
  };

  // Deletar uma tarefa
  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="home-container">
      <Header />
      <AddTask onAdd={addTask} updateTaskColor={updateTaskColor} />
      <FilterBar
        showOnlyFavorites={filterFavorite}
        onToggleFavorites={() => setFilterFavorite(!filterFavorite)}
        selectedColor={filterColor}
        onColorFilter={(color) => setFilterColor(color)}
      />
      <TaskItem
        task={tasks[0]}
        onToggleFavorite={toggleFavorite}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />

      <TaskTaskItemtasks={filteredTasks} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Home;
