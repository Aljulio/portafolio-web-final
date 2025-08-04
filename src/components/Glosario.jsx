// src/components/Glosario.jsx
import React, { useState } from 'react';
import './Glosario.css';

function Glosario({ data }) {
  const [selectedInitial, setSelectedInitial] = useState(null);

  // Extraer las iniciales únicas de los términos
  const initials = [...new Set(data.map(term => term.term[0].toUpperCase()))].sort();

  // Filtrar los términos según la inicial seleccionada
  const filteredTerms = selectedInitial
    ? data.filter(term => term.term[0].toUpperCase() === selectedInitial)
    : [];

  const handleInitialClick = (initial) => {
    // Si la letra seleccionada es la misma que la actual, deselecciónala (toggle)
    // De lo contrario, selecciona la nueva letra
    setSelectedInitial(prevInitial => prevInitial === initial ? null : initial);
  };

  return (
    <div className="glosario-container">
      <div className="initials-selector">
        {initials.map(initial => (
          <button
            key={initial}
            className={`initial-button ${selectedInitial === initial ? 'active' : ''}`}
            // CAMBIO AQUÍ: Llamar a la nueva función de manejo del clic
            onClick={() => handleInitialClick(initial)}
          >
            {initial}
          </button>
        ))}
      </div>
      
      {selectedInitial && (
        <div className="terms-list">
          {filteredTerms.map(item => (
            <div key={item.term} className="term-item">
              <h4 className="term-title">{item.term}</h4>
              <p className="term-definition">{item.definition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Glosario;