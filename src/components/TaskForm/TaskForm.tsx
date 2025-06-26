import React, { useState } from 'react';
import './TaskForm.scss';
import type { Task } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6A67CE', '#FF8C00'];

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTask: Task = {
      id: uuidv4(),
      title: text.trim(),
      favorite: false,
      color: selectedColor,
    };

    addTask(newTask);
    setText('');
    setSelectedColor(COLORS[0]);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={100}
      />

      <div className="color-picker">
        {COLORS.map((color) => (
          <button
            key={color}
            type="button"
            className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Selecionar cor ${color}`}
          />
        ))}
      </div>

      <button className="submit-btn" type="submit" disabled={!text.trim()}>
        Adicionar
      </button>
    </form>
  );
};

export default TaskForm;
