// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          &copy; {currentYear} Mi Portafolio | Julio Hernández.
        </p>
        <p>
          Desarrollado con React y Vite.
        </p>
      </div>
    </footer>
  );
}