// src/App.jsx
import React from 'react';

import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ProductSection from "./components/ProductSection/ProductSection.jsx";
import Spinner from "./components/Spinner/Spinner.jsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.jsx";

import Footer from "./components/Footer/Footer.jsx";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SearchBar/>
      <ProductSection />
     
      <Spinner/>
      <ProductInfo/>
      <Footer />
      
     
      
    
    </div>
  );
}

export default App;


