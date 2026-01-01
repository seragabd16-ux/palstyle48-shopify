import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const Products = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <Navigation />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ color: '#d4af37', marginBottom: '2rem' }}>Our Collection</h1>
        <ProductGrid onAddToCart={handleAddToCart} />
      </div>
      <Footer />
    </>
  );
};

export default Products;
