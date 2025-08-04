// src/App.jsx
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TaskCard } from './components/TaskCard';
import { tasks, categories } from './data';
import ExpandableInfoCard from './components/ExpandableInfoCard';
import TypewriterEffect from './components/TypewriterEffect';
import { Footer } from './components/Footer'; // <--- Importamos el Footer

import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setExpandedCardId(null);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setSelectedCategory("Todos");
    setExpandedCardId(null);
  };

  const handleCardToggle = (id) => {
    setExpandedCardId(prevId => prevId === id ? null : id);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesCategory = selectedCategory === "Todos" ||
      (Array.isArray(task.category)
        ? task.category.includes(selectedCategory)
        : task.category === selectedCategory);
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      task.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      task.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      task.date.includes(lowerCaseSearchTerm);

    return matchesCategory && matchesSearch;
  });

  const infoCardTitle = selectedCategory === "Todos" ? "Información sobre mis Tareas" : `Información de ${selectedCategory}`;
  const infoCardMessage = `Este es un resumen de las tareas correspondientes al octavo Semestre del curso de Desarrollo Web en la Universidad Mariano Gálvez, sede Chiquimullila.`;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 translate="no"> 
          <TypewriterEffect text="Mi Portafolio | 8vo Semestre" delay={150} /> 
        </h1>
      </header>
      <div className="main-content-wrapper">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />
        <div className="task-list-container">
          <ExpandableInfoCard
            title={infoCardTitle}
            message={infoCardMessage}
          />
          
          {filteredTasks.length > 0 ? (
            filteredTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                isExpanded={expandedCardId === task.id}
                onToggle={() => handleCardToggle(task.id)}
              />
            ))
          ) : (
            <p className="no-tasks-message">No hay tareas disponibles que coincidan con los filtros.</p>
          )}
        </div>
      </div>
      <Footer /> {/* <--- Aquí se renderiza el footer */}
    </div>
  );
}

export default App;