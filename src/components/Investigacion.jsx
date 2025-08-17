// src/components/Investigacion.jsx
import React, { useState } from 'react';
import './Investigacion.css';

const Investigacion = ({ data }) => {
  // Estado para controlar la expansión del informe completo
  const [isExpanded, setIsExpanded] = useState(false);
  // Estado para controlar la sección expandida dentro del informe
  const [expandedSubSection, setExpandedSubSection] = useState(null);

  // Función para manejar el clic en el botón de "Informe"
  const handleToggleInforme = () => {
    setIsExpanded(!isExpanded);
  };

  // Función para manejar el clic en las subsecciones
  const handleToggleSubSection = (title) => {
    setExpandedSubSection(expandedSubSection === title ? null : title);
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="investigacion-container">
      {/* El encabezado "Informe" que oculta/muestra toda la sección */}
      <div className="section-header" onClick={handleToggleInforme}>
        <h3 className="section-title">Informe</h3>
        <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
      </div>
      
      {/* Las subsecciones solo se renderizan si el informe está expandido */}
      {isExpanded && (
        <div className="informe-content">
          {data.map((seccion, index) => (
            <div key={index} className="investigacion-seccion">
              <div 
                className="subsection-header" 
                onClick={() => handleToggleSubSection(seccion.title)}
              >
                <h4 className="subsection-title">{seccion.title}</h4>
                <span className="expand-icon">{expandedSubSection === seccion.title ? '▲' : '▼'}</span>
              </div>
              {/* Contenido de la subsección solo se muestra si está expandida */}
              {expandedSubSection === seccion.title && (
                <div 
                  className="subsection-content" 
                  dangerouslySetInnerHTML={{ __html: seccion.content }} 
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Investigacion;