import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#home">Anne</a>
                </div>

                <div className={`mobile-menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;