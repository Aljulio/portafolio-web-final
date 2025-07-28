import React, { useState } from 'react';
import './TaskCard.css'; // Estilos para la tarjeta

export function TaskCard({ task }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`task-card ${isExpanded ? 'expanded' : ''}`}>
      <h3 className="task-title" onClick={toggleExpand}>
        {task.title}
        {/* ¡AQUÍ ESTÁ EL CAMBIO! Agrupamos la fecha y el indicador en un nuevo span. */}
        <span className="task-meta">
          <span className="task-date">({task.date})</span>
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
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
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