// src/components/TypewriterEffect.jsx
import React, { useState, useEffect } from 'react';
import './TypewriterEffect.css'; 

function TypewriterEffect({ text, delay = 100 }) { 
  const [displayedChars, setDisplayedChars] = useState([]); 
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setDisplayedChars([]);
    setCharIndex(0);
  }, [text]); 

  useEffect(() => {
    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        const char = text[charIndex];
        setDisplayedChars(prev => [
          ...prev, 
          { 
            char: char === ' ' ? '\u00A0' : char, // Reemplazar espacio normal con espacio no rompible
            key: charIndex, 
            animationDelay: `${(charIndex * delay) / 1000}s` 
          }
        ]);
        setCharIndex(prev => prev + 1);
      }, delay); 

      return () => clearTimeout(timeoutId); 
    }
  }, [charIndex, text, delay]); 

  return (
    <span>
      {displayedChars.map((item) => (
        <span 
          key={item.key} 
          className="slide-in-char" 
          style={{ animationDelay: item.animationDelay }} 
        >
          {item.char}
        </span>
      ))}
    </span>
  );
}

export default TypewriterEffect;