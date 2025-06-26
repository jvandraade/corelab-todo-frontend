import React, { useState } from 'react';
import './AddTask.scss';

class Props {
  onAdd?: (task: { title: string; color: string }) => void;
  updateTaskColor?: (id: string, color: string) => void;
}

const colors = ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#a78bfa'];

const AddTask: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [updateTaskColor, setUpdateTaskColor] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (onAdd) {
      onAdd({ title: title.trim(), color: selectedColor });
    }

    setTitle('');
  };

  if (updateTaskColor) {
    if (onAdd) {
      onAdd({ title: title.trim(), color: selectedColor });
    }
    setUpdateTaskColor(false);
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="color-options">
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            className={`color-btn ${color === selectedColor ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
            aria-label={`Selecionar cor ${color}`}
          />
        ))}
      </div>

      <button type="submit" className="add-btn">
        Adicionar
      </button>
    </form>
  );
};

export default AddTask;
