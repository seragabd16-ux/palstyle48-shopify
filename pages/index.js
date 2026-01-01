import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const mockProducts = [
          { id: 1, title: 'Black Luxury T-Shirt', price: 49.99, image: '🖤' },
          { id: 2, title: 'Dark Hoodie Premium', price: 79.99, image: '⚫' },
          { id: 3, title: 'Tactical Cap', price: 29.99, image: '⚪' },
          { id: 4, title: 'Custom Print Design', price: 89.99, image: '✨' },
        ];
        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Palstyle48 - Luxury Dark E-commerce</title>
        <meta name="description" content="Luxury Dark E-commerce Theme for Shopify" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen bg-gradient-to-t from-black to-transparent overflow-hidden group-hover:text-red-600 transition-colors">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></motion.div>
          <h1 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">Palstyle48</h1>
          <p className="text-2xl font-black text-red-600">Luxury Dark E-commerce Experience</p>
          <p className="text-gray-400">Premium clothing with 3D effects and advanced animations</p>
        </section>

        {/* Products Section */}
        <section className="w-full mt-4 bg-red-700 py-2 rounded font-bold hover:bg-red-600 transition-all">
          {loading ? (
            <div>Loading products...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <motion.div key={product.id} initial={{ scale: 1.05 }} whileHover={{ scale: 0.95 }} className="w-full mt-4 bg-red-700 py-2 rounded font-bold hover:bg-red-600 transition-all">
                  <div>{product.image}</div>
                  <h3 className="text-lg font-bold">{product.title}</h3>
                  <p className="text-2xl font-black text-red-600">${product.price}</p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full mt-4 bg-red-700 py-2 rounded font-bold hover:bg-red-600 transition-all">ADD TO CART</motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 py-8 text-center text-gray-500 border-t border-red-900">
          <p>&copy; 2026 Palstyle48. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
