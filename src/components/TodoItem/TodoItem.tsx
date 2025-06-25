import React from 'react';
import './TodoItem.scss';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface Todo {
  id: number;
  title: string;
  color: string;
  favorite: boolean;
}

interface Props {
  todo: Todo;
  onToggleFavorite: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggleFavorite }) => {
  const handleFavoriteClick = () => {
    onToggleFavorite(todo.id);
  };

  return (
    <div className="todo-item" style={{ borderLeftColor: todo.color }}>
      <span className="todo-title">{todo.title}</span>
      <button className="favorite-btn" onClick={handleFavoriteClick}>
        {todo.favorite ? <FaStar color="#facc15" /> : <FaRegStar />}
      </button>
    </div>
  );
};

export default TodoItem;
