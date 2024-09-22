// SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';
const SearchBar = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Apple iPhone 14' },
    { id: 2, name: 'Samsung Galaxy S22' },
    { id: 3, name: 'Google Pixel 7' },
    { id: 4, name: 'OnePlus 10 Pro' },
    { id: 5, name: 'Sony Xperia 1 IV' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle search input change
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter products based on the search term
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
