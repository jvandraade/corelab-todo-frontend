import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskItem } from './TaskItem';
import { vi } from 'vitest';

describe('TaskItem', () => {
  const mockTask = {
    id: '1',
    title: 'Estudar React',
    color: 'blue',
    favorite: false,
  };

  it('exibe o título da tarefa', () => {
    render(
      <TaskItem
        task={mockTask}
        onToggleFavorite={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    expect(screen.getByText('Estudar React')).toBeInTheDocument();
  });

  it('chama a função de favoritar ao clicar no botão', () => {
    const toggleFavorite = vi.fn();

    render(
      <TaskItem
        task={mockTask}
        onToggleFavorite={toggleFavorite}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    const button = screen.getByRole('button', { name: /favoritar/i });
    fireEvent.click(button);

    expect(toggleFavorite).toHaveBeenCalled();
  });
});
