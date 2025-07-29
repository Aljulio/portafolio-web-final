import React, { useState } from 'react';
import './TaskCard.css'; // Estilos para la tarjeta

export function TaskCard({ task }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Función para formatear la fecha de YYYY-MM-DD a DD-MM-YYYY
  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const parts = dateString.split('-'); // Divide por guiones
    if (parts.length === 3) {
      // Asume formato YYYY-MM-DD y lo convierte a DD-MM-YYYY
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
      // Si prefieres DD/MM/YYYY: return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString; // Retorna sin cambios si no está en el formato esperado
  };

  return (
    <div className={`task-card ${isExpanded ? 'expanded' : ''}`}>
      <h3 className="task-title" onClick={toggleExpand}>
        {task.title}
        <span className="task-meta">
          {/* Usar la función de formato para mostrar la fecha */}
          <span className="task-date">({formatDisplayDate(task.date)})</span>
          <span className="expand-indicator">{isExpanded ? ' ▲' : ' ▼'}</span>
        </span>
      </h3>

      {isExpanded && (
        <div className="task-details-content">
          {task.description && <p>{task.description}</p>}
          {task.links && task.links.length > 0 && (
            <div className="task-links">
              <h4>Enlaces:</h4>
              <ul>
                {task.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#007bff' }} // Aplicar el color azul aquí
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}