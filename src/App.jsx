import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TaskCard } from './components/TaskCard';
import { tasks, categories } from './data';

import './App.css'; // Estilos globales y layout

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = tasks.filter(task =>
    selectedCategory === "Todos" || task.category === selectedCategory
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mi Portafolio</h1>
      </header>
      {/* ¡ESTE ES EL main-content-wrapper! ASEGÚRATE DE QUE ESTÉ AQUÍ. */}
      <div className="main-content-wrapper">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className="task-list-container">
          <h2>
            {selectedCategory === "Todos" ? "Todas mis Tareas" : `Tareas de ${selectedCategory}`}
          </h2>
          {filteredTasks.length > 0 ? (
            filteredTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <p className="no-tasks-message">No hay tareas disponibles en esta categoría.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;