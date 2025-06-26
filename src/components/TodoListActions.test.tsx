import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoItem } from './TodoItem/TodoItem';
import { vi } from 'vitest';

describe('TodoItem actions', () => {
  const todo = [
    { id: '1', title: 'Tarefa 1', color: 'blue', favorite: false },
  ];

  it('chama onDelete ao clicar no botão deletar', () => {
    const onDelete = vi.fn();
    render(
      <TodoItem 
      task={todo[0]} 
      onDelete={onDelete} 
      onToggleFavorite={() => {}} 
      onEdit={() => {}} />
    );

    const deleteButton = screen.getByRole('button', { name: /deletar tarefa 1/i });
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith('1');
  });
});
