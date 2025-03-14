'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {X} from 'lucide-react'

// function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }) {
//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const toggleAccordion = (section) => {
//     setExpandedAccordion(expandedAccordion === section ? null : section);
//   };

//   return (
//     <>
//       {isMobileMenuOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-50"
//             onClick={closeMobileMenu}></div>
//           <div className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out">
//             <div className="p-4 h-full overflow-y-auto">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 font-inter">Menu</h2>
//                 <button onClick={closeMobileMenu} className="p-2 text-gray-700 hover:text-gray-900">
//                   <i className="fas fa-times text-xl"></i>
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <button
//                     onClick={() => toggleAccordion('bikes')}
//                     className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900 font-inter">
//                     <span className="flex items-center">
//                       <i className="fas fa-bicycle mr-2"></i>
//                       ВЕЛОСИПЕДИ
//                     </span>
//                     <i
//                       className={`fas fa-chevron-${
//                         expandedAccordion === 'bikes' ? 'up' : 'down'
//                       }`}></i>
//                   </button>
//                   {expandedAccordion === 'bikes' && (
//                     <div className="pl-8 py-2 space-y-2">
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         <i className="fas fa-mountain mr-2"></i>
//                         ГІРСЬКІ
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         <i className="fas fa-city mr-2"></i>
//                         МІСЬКІ
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         <i className="fas fa-child mr-2"></i>
//                         ДИТЯЧІ
//                       </a>
//                     </div>
//                   )}
//                 </div>

//                 <a
//                   href="#"
//                   className="flex items-center py-3 text-gray-700 hover:text-gray-900 font-inter">
//                   <i className="fas fa-bolt mr-2"></i>
//                   ЕЛЕКТРОВЕЛОСИПЕДИ
//                 </a>

//                 <div>
//                   <button
//                     onClick={() => toggleAccordion('parts')}
//                     className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900 font-inter">
//                     <span className="flex items-center">
//                       <i className="fas fa-cogs mr-2"></i>
//                       ВЕЛОЗАПЧАСТИНИ
//                     </span>
//                     <i
//                       className={`fas fa-chevron-${
//                         expandedAccordion === 'parts' ? 'up' : 'down'
//                       }`}></i>
//                   </button>
//                   {expandedAccordion === 'parts' && (
//                     <div className="pl-8 py-2 space-y-2">
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         ПОКРИШКИ
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         КАМЕРИ
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         ВИЛКИ ТА АМОРТИЗАТОРИ
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         КОЛЕСА ТА КОЛІСНІ ЧАСТИНИ
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         ПЕДАЛІ
//                       </a>
//                       <a
//                         href="#"
//                         className="block py-2 text-gray-700 hover:text-gray-900 font-inter">
//                         РУЛЬОВЕ УПРАВЛІННЯ
//                       </a>
//                     </div>
//                   )}
//                 </div>

//                 <a
//                   href="#"
//                   className="flex items-center py-3 text-gray-700 hover:text-gray-900 font-inter">
//                   <i className="fas fa-shopping-bag mr-2"></i>
//                   ВЕЛОАКСЕСУАРИ
//                 </a>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <div className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white z-50 overflow-y-auto">
            <div className="p-4">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X />
              </button>
              
              <nav className="mt-8">
                {/* Menu items */}
                <div className="space-y-4">
                  <Link 
                    href="/bikes" 
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={onClose}
                  >
                    <i className="fas fa-bicycle mr-2"></i>
                    ВЕЛОСИПЕДИ
                  </Link>
                  
                  <Link 
                    href="/electric" 
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={onClose}
                  >
                    <i className="fas fa-bolt mr-2"></i>
                    ЕЛЕКТРОВЕЛОСИПЕДИ
                  </Link>
                  
                  <Link 
                    href="/parts" 
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={onClose}
                  >
                    <i className="fas fa-cogs mr-2"></i>
                    ВЕЛОЗАПЧАСТИНИ
                  </Link>
                  
                  <Link 
                    href="/accessories" 
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={onClose}
                  >
                    <i className="fas fa-shopping-bag mr-2"></i>
                    ВЕЛОАКСЕСУАРИ
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MobileMenu;
