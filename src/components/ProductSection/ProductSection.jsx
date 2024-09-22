// src/components/ProductSection.jsx
import React from 'react';
import './ProductSection.css';

const products = [
  { id: 1, name: 'Product 1', price: 'INR 20K', img: 'https://www.shutterstock.com/shutterstock/photos/2297670547/display_1500/stock-photo-online-shopping-concept-businessman-use-smartphones-and-credit-cards-to-purchase-products-from-2297670547.jpg' },
  { id: 2, name: 'Product 2', price: 'INR 30K', img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/vivo_v27-sixteen_nine.png?VersionId=mOxof0OIq3ifLq4kM5XJamw0U7u52tHd' },
  { id: 3, name: 'Product 3', price: 'INR 40K', img: 'https://media.gettyimages.com/id/1287452399/photo/modern-kitchen-interior-stock-photo.jpg?s=2048x2048&w=gi&k=20&c=H41LxZrByoPKG3vs6UKhoJAxlpQKXLovPGs1kEfXAdA=' },
];

const ProductSection = () => {
  return (
    <section className="product-section" id="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;


