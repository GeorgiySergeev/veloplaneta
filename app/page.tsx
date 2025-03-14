'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Popular from '@/components/Popular';

function MainComponent() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-white w-full">
      <Header />
      <Hero />
      <Popular />

      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 font-inter">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 font-inter">
                Store Location
              </h3>
              <p className="text-gray-700 mb-4 font-inter">123 Bike Street</p>
              <p className="text-gray-700 mb-4 font-inter">Cycle City, CC 12345</p>
              <p className="text-gray-700 mb-4 font-inter">Phone: (555) 123-4567</p>
              <p className="text-gray-700 font-inter">Email: info@honpolieve.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 font-inter">Opening Hours</h3>
              <p className="text-gray-700 mb-2 font-inter">Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-700 mb-2 font-inter">Saturday: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-700 font-inter">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default MainComponent;
