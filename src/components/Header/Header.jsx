// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">RJ Commerce</div>
      <nav className="nav">
        <ul>
        <li><a href="#home" className="nav-button">Home</a></li>
        <li><a href="#products" className="nav-button">Products</a></li>
        <li><a href="#contact" className="nav-button">Contact</a></li>
        </ul>
        <button className="header-button">Sign Up</button> {/* Added button */}
        <button className="header-button">Sign In</button> {/* Added button */}
      </nav>
    </header>
  );
};

export default Header;
