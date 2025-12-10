import React from 'react';
import './Footer.css';

const Footer = ({ currentPage, onNavClick }) => {
    return (
        <footer className="app-footer">
            <nav className="footer-nav container">
                <button 
                    onClick={() => onNavClick('home')} 
                    className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                    <span className="nav-text">Home</span>
                </button>
                <button 
                    onClick={() => onNavClick('about')} 
                    className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                    <span className="nav-text">About</span>
                </button>
                <button 
                    onClick={() => onNavClick('contact')} 
                    className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    <span className="nav-text">Contact</span>
                </button>
            </nav>
        </footer>
    );
};

export default Footer;
