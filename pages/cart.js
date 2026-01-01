import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Cart = () => {
  const [items] = useState([
    { id: 1, name: 'Luxury Watch', price: 2999, quantity: 1 },
    { id: 2, name: 'Premium Headphones', price: 1499, quantity: 2 }
  ]);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <Navigation />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ color: '#d4af37' }}>Shopping Cart</h1>
        <table style={{ width: '100%', color: '#e0e0e0' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #333' }}>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #333' }}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 style={{ color: '#d4af37', marginTop: '2rem' }}>Total: ${total}</h2>
        <button style={{ background: '#00a99d', color: 'white', padding: '1rem 2rem', marginTop: '1rem', cursor: 'pointer' }}>Proceed to Checkout</button>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
