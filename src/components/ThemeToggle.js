import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const audio = new Audio('/sounds/thwip.mp3'); // Load from public folder
    audio.volume = 0.5; // optional: adjust volume
    audio.play().catch((e) => console.log("Sound play blocked:", e));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🕷️ Red Suit" : "🕸️ Dark Suit"}
    </button>
  );
};

export default ThemeToggle;
