import React from 'react';
import Glosario from './Glosario';
import Investigacion from './Investigacion'; 
import './TaskCard.css';

export function TaskCard({ task, isExpanded, onToggle }) {
  return (
    <div className={`task-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={onToggle}>
        <h3 className="card-title">{task.title}</h3>
        <div className="card-header-meta">
          <p className="card-date">{task.date}</p>
          <span className="card-toggle-icon">{isExpanded ? '▲' : '▼'}</span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="card-body">
          <p className="card-category">
            {Array.isArray(task.category) ? task.category.join(' | ') : task.category}
          </p>
          <p className="card-description">{task.description}</p>

          {/* Renderiza el Glosario si existe la propiedad glosarioData */}
          {task.glosarioData && <Glosario data={task.glosarioData} />}

          {/* Renderiza el componente de Investigación si existe la propiedad investigacionData */}
          {task.investigacionData && <Investigacion data={task.investigacionData} />}

          {/* Renderiza los enlaces si existen, independientemente de lo demás */}
          {task.links && task.links.length > 0 && (
            <div className="card-links">
              {task.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

        </div>
      )}
    </div>
  );
}