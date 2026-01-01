import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cardNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! Order #' + Math.floor(Math.random() * 100000));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navigation />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ color: '#d4af37' }}>Checkout</h1>
        <form onSubmit={handleSubmit} style={{ color: '#e0e0e0' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>First Name:</label><br/>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Last Name:</label><br/>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email:</label><br/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Phone:</label><br/>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Address:</label><br/>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>City:</label><br/>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Card Number:</label><br/>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" required style={{ width: '100%', padding: '0.5rem', background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333' }} />
          </div>
          <button type="submit" style={{ background: '#d4af37', color: '#0a0a0a', padding: '1rem 2rem', width: '100%', cursor: 'pointer', fontWeight: 'bold' }}>Complete Purchase</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
