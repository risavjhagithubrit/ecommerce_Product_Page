import React, { useState, useEffect } from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  // State to hold product data
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 0 });

  // Simulating product data fetch
  useEffect(() => {
    // Replace with actual API call
    const fetchedProduct = {
      name: 'Awesome Product',
      description: 'This is an awesome product that you will love.',
      price: 99.99,
      availability: 'In Stock',
      variants: ['Red', 'Blue', 'Green'],
    };
    setProduct(fetchedProduct);

    // Simulating fetching reviews
    const fetchedReviews = [
      { user: 'John Doe', comment: 'Great product!', rating: 5 },
      { user: 'Jane Smith', comment: 'Good quality, worth the price.', rating: 4 },
    ];
    setReviews(fetchedReviews);
  }, []);

  // Handle variant selection
  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  // Handle review form changes
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Handle submitting a new review
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.user && newReview.comment && newReview.rating) {
      setReviews([...reviews, newReview]);
      setNewReview({ user: '', comment: '', rating: 0 });
    }
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="product-info">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">INR {product.price.toFixed(2)}</p>
      <p className="product-availability">{product.availability}</p>

      <div className="product-variants">
        <label>Select Variant:</label>
        {product.variants.map((variant) => (
          <button
            key={variant}
            className={`variant-button ${selectedVariant === variant ? 'active' : ''}`}
            onClick={() => handleVariantChange(variant)}
          >
            {variant}
          </button>
        ))}
      </div>

      <div className="product-reviews">
        <h2>Reviews</h2>
        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <strong>{review.user}</strong>
                  <span className="review-rating">Rating: {review.rating}/5</span>
                </div>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        <form className="review-form" onSubmit={handleReviewSubmit}>
          <h3>Please Leave a Review</h3>
          <input
            type="text"
            name="user"
            value={newReview.user}
            onChange={handleReviewChange}
            placeholder="Your name"
            required
          />
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleReviewChange}
            placeholder="Your review"
            required
          ></textarea>
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleReviewChange}
            required
          >
            <option value="0">Select Rating</option>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductInfo;
