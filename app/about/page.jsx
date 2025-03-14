import React from 'react';
import Header from '@/components/Header';
function About() {
  return (
    <>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 font-inter">About Us</h2>
            <p className="text-gray-700 mb-12 font-inter">
              Since 2010, Hon polieve shop has been your trusted partner in cycling adventures. We
              offer premium bikes and accessories, backed by expert knowledge and outstanding
              customer service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <i className="fas fa-medal text-4xl text-gray-900 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 font-inter">
                  Quality Products
                </h3>
                <p className="text-gray-700 font-inter">Premium selection of bikes and gear</p>
              </div>
              <div>
                <i className="fas fa-users text-4xl text-gray-900 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 font-inter">Expert Team</h3>
                <p className="text-gray-700 font-inter">Professional advice and support</p>
              </div>
              <div>
                <i className="fas fa-tools text-4xl text-gray-900 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 font-inter">
                  Service Excellence
                </h3>
                <p className="text-gray-700 font-inter">Complete maintenance and repair</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
