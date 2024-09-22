// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 class = "large-header">Welcome to Our Commerce</h1>
      <p class="description">Find the best products at unstoppable prices!</p>
      <button className="cta-button">Shop Now</button>
    </section>
  );
};

export default HeroSection;
