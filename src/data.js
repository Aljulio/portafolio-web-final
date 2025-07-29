// src/data.js

export const categories = [
  "Todos",
  "Proyectos React",
  "Notas y Apuntes"
];

export const tasks = [
  {
    id: 1,
    title: "Glosario",
    category: "Notas y Apuntes",
    date: "2025-07-18", // Ya en YYYY-MM-DD
    description: "Creación de un glosario de términos técnicos relacionados con el desarrollo web. Este documento incluye definiciones clave y conceptos fundamentales para consulta rápida.",
    links: [
      { name: "Ver Glosario en PDF", url: "https://drive.google.com/file/d/1F1RfwOGvN-3CRxWIFqUzCGcnK882TfS6/view?usp=sharing" }
    ]
  },
  {
    id: 2,
    title: "Página Web - Hoja de Vida",
    category: "Proyectos React",
    date: "2025-07-27", // Ya en YYYY-MM-DD
    description: "Desarrollo de una página web personal para mostrar mi hoja de vida profesional. Incluye secciones de experiencia laboral, educación, habilidades y proyectos destacados.",
    links: [
      { name: "Ver en GitHub", url: "https://github.com/Aljulio/curriculum-vitae-react" },
      { name: "Ver Hoja de vida", url: "https://aljulio.github.io/curriculum-vitae-react/" }
    ]
  },
  {
    id: 3,
    title: "Notas del curso de React Hooks",
    category: "Notas y Apuntes",
    date: "2025-07-28", // Ya en YYYY-MM-DD
    description: "Resumen y ejemplos prácticos de los principales React Hooks (useState, useEffect, useContext, etc.).",
    links: [
      { name: "Leer Notas", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Validación de formularios JS",
    category: "Todos",
    date: "2025-08-01", // Ya en YYYY-MM-DD
    description: "Implementación de validación de formularios del lado del cliente usando JavaScript puro.",
    links: [
      { name: "Ver Código", url: "https://github.com/tu-usuario/validacion-js" }
    ]
  },
  {
    id: 5,
    title: "Consumo de API REST con Fetch",
    category: "Proyectos React",
    date: "2025-08-05", // Cambiado de "05-08-2025" a "2025-08-05"
    description: "Ejemplo de cómo consumir datos de una API REST pública usando la API Fetch en React.",
    links: [
      { name: "Ver Proyecto", url: "https://github.com/tu-usuario/api-fetch-react" }
    ]
  }
];