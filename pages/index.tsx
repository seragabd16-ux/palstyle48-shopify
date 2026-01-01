import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // محاكاة جلب المنتجات من Shopify
        const mockProducts = [
          { id: 1, title: 'Black Luxury T-Shirt', price: 49.99, image: '🖤' },
          { id: 2, title: 'Dark Hoodie Premium', price: 79.99, image: '⚫' },
          { id: 3, title: 'Tactical Cap', price: 29.99, image: '🔴' },
          { id: 4, title: 'Custom Print Design', price: 89.99, image: '✨' },
        ];
        setProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Palstyle48 - Luxury Dark E-commerce</title>
        <meta name="description" content="Palstyle48 - Premium Dark Luxury Fashion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,.2)_25%,rgba(220,38,38,.2)_50%,transparent_50%,transparent_75%,rgba(220,38,38,.2)_75%,rgba(220,38,38,.2))] bg-[length:40px_40px]"></div>
          </div>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-7xl font-black mb-4 tracking-tighter text-white drop-shadow-2xl">
              PALSTYLE
            </h1>
            <p className="text-2xl text-red-600 font-bold mb-8 tracking-widest">LUXURY RESISTANCE</p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-red-700 text-white font-bold text-lg rounded-lg hover:bg-red-600 transition-all duration-300 shadow-2xl"
            >
              EXPLORE COLLECTION
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Products Section */}
        <section className="py-20 px-4 bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-5xl font-black text-center mb-16 text-white">OUR COLLECTION</h2>

            {loading ? (
              <div className="text-center text-gray-500">Loading products...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-900 aspect-square mb-4 flex items-center justify-center text-8xl hover:bg-red-900 transition-all duration-300 shadow-2xl">
                      {product.image}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">{product.title}</h3>
                    <p className="text-2xl font-black text-red-600">${product.price}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 bg-red-700 py-2 rounded font-bold hover:bg-red-600 transition-all"
                    >
                      ADD TO CART
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 py-8 text-center text-gray-500 border-t border-red-900">
          <p>&copy; 2026 Palstyle48. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
