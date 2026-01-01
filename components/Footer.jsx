import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Palstyle48</h3>
          <p>Premium luxury e-commerce experience with 3D visualization and AI integration.</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Shopping</h4>
          <Link href="/products">Products</Link>
          <Link href="/collection">Collections</Link>
          <Link href="/sale">Sale</Link>
          <Link href="/new-arrivals">New Arrivals</Link>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/shipping">Shipping Info</Link>
          <Link href="/returns">Returns</Link>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Palstyle48. All rights reserved. | Luxury Dark E-Commerce</p>
      </div>
    </footer>
  );
};

export default Footer;
