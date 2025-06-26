import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoItem } from './TodoItem/TodoItem';
import { vi } from 'vitest';

describe('TodoItem', () => {
  const mockTodo = { id: '1', title: 'Tarefa antiga', color: 'red', favorite: false };
  const onToggleFavorite = vi.fn();
  const onDelete = vi.fn();

  it('exibe o valor atual no input', () => {
    render(
        <TodoItem 
            task={mockTodo} 
            onEdit={() => {}}
            onToggleFavorite={onToggleFavorite} 
            onDelete={onDelete}
    />);
    expect(screen.getByDisplayValue('Tarefa antiga')).toBeInTheDocument();
  });

  it('chama onEdit com o novo texto ao salvar', () => {
    const onEdit = vi.fn();
    render(<TodoItem 
        task={mockTodo} 
        onEdit={onEdit} 
        onToggleFavorite={onToggleFavorite} 
        onDelete={onDelete}
    />);
    
    const input = screen.getByDisplayValue('Tarefa antiga');
    const saveButton = screen.getByRole('button', { name: /salvar/i });

    fireEvent.change(input, { target: { value: 'Tarefa editada' } });
    fireEvent.click(saveButton);

    expect(onEdit).toHaveBeenCalledWith('1', 'Tarefa editada');
  });

  it('não chama onEdit ao clicar em cancelar', () => {
    const onEdit = vi.fn();
    render(<TodoItem 
        task={mockTodo} 
        onEdit={onEdit} 
        onToggleFavorite={onToggleFavorite} 
        onDelete={onDelete}
    />);

    const cancelButton = screen.getByRole('button', { name: /cancelar/i });
    fireEvent.click(cancelButton);

    expect(onEdit).not.toHaveBeenCalled();
  });
});