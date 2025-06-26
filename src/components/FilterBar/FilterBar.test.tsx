// src/components/FilterBar/FilterBar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterBar from './FilterBar';
import { vi } from 'vitest';

describe('FilterBar', () => {
  it('chama a função de filtro ao clicar no botão de cor', () => {
    const handleFilter = vi.fn();
    render(
      <FilterBar
        selectedColor={null}
        showOnlyFavorites={false}
        onColorFilter={() => {}}
        onToggleFavorites={() => {}}
      />
    );

    const colorButton = screen.getByLabelText('Filtrar por cor azul');
    fireEvent.click(colorButton);

    expect(handleFilter).toHaveBeenCalledWith('blue');
  });
});