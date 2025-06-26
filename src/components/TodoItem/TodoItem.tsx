import { useState } from 'react';
import type { Task } from '../../types/task';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, Trash2, Star, StarOff, Check } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggleFavorite: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({
  task,
  onToggleFavorite,
  onEdit,
  onDelete,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    onEdit(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      className={`flex items-center justify-between bg-white p-4 rounded-xl shadow-md border-l-4 ${
        task.color ? `border-${task.color}-500` : 'border-gray-300'
      }`}
    >
      <div className="flex items-center gap-3 w-full">
        <button onClick={() => onToggleFavorite(task.id)}>
          {task.favorite ? <Star className="text-yellow-400" /> : <StarOff />}
        </button>

        {isEditing ? (
          <AnimatePresence>
            <motion.input
              key="edit"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="flex-grow border border-gray-300 rounded px-2 py-1"
            />
          </AnimatePresence>
        ) : (
          <span className="flex-grow text-gray-700">{task.title}</span>
        )}
      </div>
      <div className="task-list"></div>
      <div className="flex items-center gap-2 ml-2">
        {isEditing ? (
          <button onClick={handleSave} title="Salvar">
            <Check className="text-green-500" />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} title="Editar">
            <Pencil className="text-blue-500" />
          </button>
        )}

        <button onClick={() => onDelete(task.id)} title="Excluir">
          <Trash2 className="text-red-500" />
        </button>
      </div>
    </motion.div>
  );
}
