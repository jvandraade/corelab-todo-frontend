import React from 'react';
import type { Task } from '../../types/task';
import { motion, AnimatePresence } from 'framer-motion';
import './TaskList.scss';

type Props = {
  tasks: Task[];
  onToggleFavorite: (id: string) => void;
};

const TaskList: React.FC<Props> = ({ tasks, onToggleFavorite }) => {
  const sortedTasks = [...tasks].sort(
    (a, b) => Number(b.favorite) - Number(a.favorite),
  );

  return (
    <div className="task-list">
      <AnimatePresence>
        {sortedTasks.map((task) => (
          <motion.div
            key={task.id}
            className="task-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="color-tag"
              style={{ backgroundColor: task.color }}
            />
            <span className="task-title">{task.title}</span>
            <button
              className={`favorite-btn ${task.favorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(task.id)}
              aria-label="Favoritar"
            >
              {task.favorite ? '★' : '☆'}
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
