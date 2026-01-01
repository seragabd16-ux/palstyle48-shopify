import React, { useState } from 'react';

const ProductGrid = () => {
  const [products] = useState([
    { id: 1, name: 'Luxury Watch', price: '$2,999', image: '/products/watch.jpg' },
    { id: 2, name: 'Premium Headphones', price: '$1,499', image: '/products/headphones.jpg' },
    { id: 3, name: 'Designer Sunglasses', price: '$899', image: '/products/sunglasses.jpg' },
    { id: 4, name: 'Exclusive Jewelry', price: '$3,499', image: '/products/jewelry.jpg' },
    { id: 5, name: 'Premium Leather Bag', price: '$2,199', image: '/products/bag.jpg' },
    { id: 6, name: 'Elite Timepiece', price: '$4,999', image: '/products/timepiece.jpg' },
  ]);

  return (
    <section className="products">
      <h2 className="section-title">Featured Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-overlay">
                <button className="btn-view-details">View Details</button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="btn-add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
