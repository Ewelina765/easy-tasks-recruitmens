import React, { useState } from "react";
import "../../styles/themeSwither.css";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={
        theme === "light" ? "light-theme-container" : "dark-theme-container"
      }
    >
      <h1>Theme Switcher</h1>
      <button
        className={
          theme === "light" ? "light-theme-button" : "dark-theme-button"
        }
        onClick={changeTheme}
      >
        {theme === "light" ? "Switch theme to dark" : "Switch theme to light"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
