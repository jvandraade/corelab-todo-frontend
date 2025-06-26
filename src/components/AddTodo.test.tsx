import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskItem } from './TaskItem/TaskItem';
import { vi } from 'vitest';

describe('TaskItem', () => {
  it('chama onAdd com o texto digitado quando o formulário é submetido', () => {
    const onAdd = vi.fn();
    render(
        <TaskItem 
            task={{ id: '1', title: '', color: '', favorite: false }}
            onToggleFavorite={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
    />);
    
    const input = screen.getByPlaceholderText(/adicionar nova tarefa/i);
    const button = screen.getByRole('button', { name: /adicionar/i });

    fireEvent.change(input, { target: { value: 'Nova tarefa' } });
    fireEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith('Nova tarefa');
  });

  it('não chama onAdd se o input estiver vazio', () => {
    const onAdd = vi.fn();
    render(
        <TaskItem 
            task={{ id: '1', title: '', color: '', favorite: false }}
            onToggleFavorite={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
    />);

    const button = screen.getByRole('button', { name: /adicionar/i });
    fireEvent.click(button);

    expect(onAdd).not.toHaveBeenCalled();
  });
});
