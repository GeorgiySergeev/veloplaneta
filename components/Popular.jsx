import React from 'react';
import Image from 'next/image';

import { useState, useEffect } from 'react';
function Popular() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Mountain Explorer',
      price: '12999 UAH',
      image: '/images/demo-img.jpg',
    },
    {
      id: 2,
      name: 'City Cruiser',
      price: '9999 UAH',
      image: '/images/demo-img.jpg',
    },
    {
      id: 3,
      name: 'Urban Explorer',
      price: '14999 UAH',
      image: '/images/demo-img.jpg',
    },
    {
      id: 4,
      name: 'Mountain Explorer',
      price: '12999 UAH',
      image: '/images/demo-img.jpg',
    },

    // Add more products as needed
  ];

  useEffect(() => {
    setData(products);
    setLoading(false);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 font-inter">
          Популярні товари
        </h2>
        {error && <div className="text-red-500 text-center py-8 font-inter">{error}</div>}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array.from({ length: 8 })].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded mb-4"></div>
                <div className="bg-gray-200 h-6 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 font-inter">{product.name}</h3>
                  <p className="text-gray-600 font-inter">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Popular;
