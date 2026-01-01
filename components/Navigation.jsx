import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/">
          <span className="navbar-logo">Palstyle48</span>
        </Link>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link href="/products" className="nav-link">
            Products
          </Link>
          <Link href="/collection" className="nav-link">
            Collection
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <button className="nav-btn-login">Login</button>
          <button className="nav-btn-cart">Cart</button>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
