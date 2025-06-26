import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskTaskItemfrom './TaskList';

describe('TaskList', () => {
  it('exibe mensagem quando a lista está vazia', () => {
    render(
      <TaskList
        tasks={[]}
        onToggleFavorite={() => {}}
      />
    );

    expect(screen.getByText(/nenhuma tarefa/i)).toBeInTheDocument();
  });
});
