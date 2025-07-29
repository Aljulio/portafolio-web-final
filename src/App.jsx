import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TaskCard } from './components/TaskCard';
import { tasks, categories } from './data';
import ExpandableInfoCard from './components/ExpandableInfoCard';
import TypewriterEffect from './components/TypewriterEffect';

import './App.css'; // Estilos globales y layout

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setSelectedCategory("Todos");
  };

  const filteredTasks = tasks.filter(task => {
    const matchesCategory = selectedCategory === "Todos" || task.category === selectedCategory;

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      task.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      task.date.includes(lowerCaseSearchTerm);

    return matchesCategory && matchesSearch;
  });

  const infoCardTitle = selectedCategory === "Todos" ? "Información sobre mis Tareas" : `Información de ${selectedCategory}`;
  const infoCardMessage = `Este es un resumen de las tareas correspondientes al octavo Semestre del curso de Desarrollo Web en la Universidad Mariano Gálvez, sede Chiquimullila.`;


  return (
    <div className="app-container">
      <header className="app-header">
        {/* AÑADE translate="no" al h1 */}
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
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <p className="no-tasks-message">No hay tareas disponibles que coincidan con los filtros.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;