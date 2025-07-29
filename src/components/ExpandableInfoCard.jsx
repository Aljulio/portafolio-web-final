// src/components/ExpandableInfoCard.jsx
import React, { useState } from 'react';
import './ExpandableInfoCard.css'; // Crea este archivo CSS en el Paso 2

function ExpandableInfoCard({ title, message }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-info-card">
      <div className="expandable-info-card-header" onClick={toggleExpand}>
        <h3 className="expandable-info-card-title">{title}</h3>
        <span className="expandable-info-card-toggle-icon">
          {isExpanded ? '▲' : '▼'} {/* Cambia el ícono según el estado */}
        </span>
      </div>
      {isExpanded && (
        <div className="expandable-info-card-content">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default ExpandableInfoCard;