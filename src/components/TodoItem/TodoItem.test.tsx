import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoItem } from './TodoItem';
import { vi } from 'vitest';

describe('TodoItem', () => {
  const mockTodo = {
    id: '1',
    title: 'Estudar React',
    color: 'blue',
    favorite: false,
  };

  it('exibe o título da tarefa', () => {
    render(
      <TodoItem
        task={mockTodo}
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
      <TodoItem
        task={mockTodo}
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
