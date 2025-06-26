import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskItem } from './TaskItem/TaskItem';
import { vi } from 'vitest';

describe('TaskItem actions', () => {
  const Task = [
    { id: '1', title: 'Tarefa 1', color: 'blue', favorite: false },
  ];

  it('chama onDelete ao clicar no botão deletar', () => {
    const onDelete = vi.fn();
    render(
      <TaskItem 
      task={Task[0]} 
      onDelete={onDelete} 
      onToggleFavorite={() => {}} 
      onEdit={() => {}} />
    );

    const deleteButton = screen.getByRole('button', { name: /deletar tarefa 1/i });
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith('1');
  });
});
