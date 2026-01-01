import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navigation />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', color: '#e0e0e0' }}>
        <h1 style={{ color: '#d4af37', marginBottom: '2rem' }}>About Palstyle48</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#d4af37' }}>Our Story</h2>
          <p>Palstyle48 is a premium luxury e-commerce platform dedicated to bringing the finest curated products to discerning customers worldwide. Founded with a vision to revolutionize luxury shopping, we combine cutting-edge technology with timeless elegance.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#d4af37' }}>Our Mission</h2>
          <p>We aim to deliver exceptional luxury experiences through innovative technology, premium quality products, and outstanding customer service. Every detail is meticulously crafted to ensure your shopping experience is unforgettable.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#d4af37' }}>Why Choose Us?</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>✨ Exclusive luxury collections</li>
            <li>✨ 3D product visualization</li>
            <li>✨ Secure payment processing</li>
            <li>✨ Worldwide shipping</li>
            <li>✨ Premium customer support</li>
            <li>✨ Authentic products guarantee</li>
          </ul>
        </section>

        <section>
          <h2 style={{ color: '#d4af37' }}>Contact Us</h2>
          <p>Email: hello@palstyle48.com</p>
          <p>Phone: +1 (800) PALSTYLE</p>
          <p>Location: New York, USA</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
