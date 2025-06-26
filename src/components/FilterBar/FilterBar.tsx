import React from 'react';
import './FilterBar.scss';

interface Props {
  selectedColor: string | null;
  showOnlyFavorites: boolean;
  onColorFilter: (color: string | null) => void;
  onToggleFavorites: () => void;
}

const colors = ['#60a5fa', '#34d399', '#a78bfa', '#fb923c'];

const FilterBar: React.FC<Props> = ({
  selectedColor,
  showOnlyFavorites,
  onColorFilter,
  onToggleFavorites,
}) => {
  return (
    <div className="filter-bar">
      <div className="color-tags">
        {colors.map((color) => (
          <button
            key={color}
            className={`tag ${selectedColor === color ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() =>
              onColorFilter(selectedColor === color ? null : color)
            }
          />
        ))}
      </div>
      <button
        className={`favorites-toggle ${showOnlyFavorites ? 'active' : ''}`}
        onClick={onToggleFavorites}
      >
        {showOnlyFavorites ? 'Mostrar Tasks' : 'Só favoritos'}
      </button>
    </div>
  );
};

export default FilterBar;
