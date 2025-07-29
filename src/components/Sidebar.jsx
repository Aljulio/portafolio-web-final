import React from 'react';
import './Sidebar.css'; // Estilos para la barra lateral

export function Sidebar({ categories, selectedCategory, onCategoryChange, onSearchChange, searchTerm }) {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <aside className="sidebar">
      <div className="search-section">
        <h3>Buscar:</h3>
        <input
          type="text"
          placeholder="Buscar por título o fecha..."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input" // Clase para estilos CSS
        />
      </div>

      <h3>Filtrar por:</h3>
      <nav>
        <ul>
          {/* Mapeamos las categorías para crear botones */}
          {categories.map(category => (
            <li key={category}>
              <button
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}