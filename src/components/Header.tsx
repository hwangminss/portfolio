import React from "react";
import "./Header.css";

const Header: React.FC<{ darkMode: boolean; setDarkMode: (mode: boolean) => void }> = ({ darkMode, setDarkMode }) => {
    return (
        <header className="header">
            <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️" : "🌙"}
            </button>
            <h1 className="logo">Min</h1>
            <button className="menu-button">☰</button>
        </header>
    );
};

export default Header;
