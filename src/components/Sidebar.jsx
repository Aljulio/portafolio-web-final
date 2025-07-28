import React from 'react';
import './Sidebar.css'; // Estilos para la barra lateral

export function Sidebar({ categories, selectedCategory, onCategoryChange }) {
  return (
    <aside className="sidebar">
      <h3>Filtrar por:</h3>
      <nav>
        <ul>
          {/* Mapeamos las categorías para crear botones */}
          {categories.map(category => (
            <li key={category}>
              <button
                // Añadimos una clase 'active' si esta es la categoría seleccionada para resaltarla
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => onCategoryChange(category)} // Llama a la función en App.jsx
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