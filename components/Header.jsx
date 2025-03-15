'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Icons } from '@/components/ui/icons';
import { AlignJustify, Search, Bike } from 'lucide-react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag,
    faBicycle,
    faBolt,
    faCogs,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

function Header() {
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setExpandedAccordion(null);
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4">
            <div className="container mx-auto ">
                <div className="flex flex-col  justify-between">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="text-2xl hidden lg:block font-bold text-blue-400 font-inter"
                        >
                            <p className="pb-0">ВЕЛОПЛАНЕТА</p>
                            {/* <span className='text-sm font-normal text-gray-400'>велотовари</span> */}
                        </Link>
                        <div className="hidden md:relative md:block">
                            <input
                                type="search"
                                placeholder="Search bikes..."
                                className="w-full md:w-64 px-4 py-2 rounded border border-gray-200 bg-white text-gray-900 font-inter"
                            />
                        </div>
                    </div>
                    {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Велосипеди</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/">
                          <Icons.logo className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">Вело</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy and paste into your
                            apps. Accessible. Customizable. Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <Link href="/mountain" title="Гірські">
                     Гірські
                    </Link>
                    <Link href="/sity" title="Міські">
                      Міські
                    </Link>
                    <Link href="/kids" title="Дитячі">
                     Дитячі
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>  */}
                    {/* <Navbar/> */}
                    {/* Navigation Megs menu */}
                    <nav className="hidden lg:flex space-x-8 lg:text-sm">
                        <div
                            className="relative group"
                            onMouseEnter={() => setActiveMegaMenu('bikes')}
                            onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                            <Link
                                href="/bikes"
                                className="flex items-center text-gray-700 hover:text-gray-900"
                            >
                                <Bike className="mr-2" />
                                ВЕЛОСИПЕДИ
                                <i className="fas fa-chevron-down ml-1 text-sm transition-transform group-hover:rotate-180"></i>
                            </Link>
                            <div
                                className={`absolute top-full left-0 w-[800px] bg-white shadow-lg rounded-lg py-6 transform transition-all duration-300 ease-in-out ${
                                    activeMegaMenu === 'bikes'
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}
                            >
                                <div className="grid grid-cols-4 gap-6 px-6">
                                    <div className="col-span-1">
                                        <Link href="/bikes/mountain" className="block group">
                                            <div className="relative overflow-hidden rounded-lg mb-2">
                                                <img
                                                    src="/images/categories/mountain.jpg"
                                                    alt="Mountain Bikes"
                                                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <span className="block py-2 text-gray-700 group-hover:text-gray-900 font-medium">
                                                <i className="fas fa-mountain mr-2"></i>
                                                ГІРСЬКІ
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-span-1">
                                        <Link href="/bikes/city" className="block group">
                                            <div className="relative overflow-hidden rounded-lg mb-2">
                                                <img
                                                    src="/images/categories/city.jpg"
                                                    alt="City Bikes"
                                                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <span className="block py-2 text-gray-700 group-hover:text-gray-900 font-medium">
                                                <i className="fas fa-city mr-2"></i>
                                                МІСЬКІ
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-span-1">
                                        <Link href="/bikes/kids" className="block group">
                                            <div className="relative overflow-hidden rounded-lg mb-2">
                                                <img
                                                    src="/images/categories/kids.jpg"
                                                    alt="Kids Bikes"
                                                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <span className="block py-2 text-gray-700 group-hover:text-gray-900 font-medium">
                                                <i className="fas fa-child mr-2"></i>
                                                ДИТЯЧІ
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="col-span-1 bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            Популярні категорії
                                        </h3>
                                        <ul className="space-y-2">
                                            <li>
                                                <Link
                                                    href="/bikes/new"
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    Нові надходження
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/bikes/sale"
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    Акційні пропозиції
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/bikes/premium"
                                                    className="text-gray-600 hover:text-gray-900"
                                                >
                                                    Преміум клас
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Similar structure for other menu items */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setActiveMegaMenu('electric')}
                            onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                            <Link
                                href="/electric"
                                className="flex items-center text-gray-700 hover:text-gray-900 font-inter "
                            >
                                <i className="fas fa-bolt mr-2"></i>
                                ЕЛЕКТРОВЕЛОСИПЕДИ
                                <i className="fas fa-chevron-down ml-1 text-sm transition-transform group-hover:rotate-180"></i>
                            </Link>
                            {/* Add similar dropdown content for electric bikes */}
                        </div>

                        {/* Parts menu with enhanced styling */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setActiveMegaMenu('parts')}
                            onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                            <Link
                                href="/parts"
                                className="flex items-center text-gray-700 hover:text-gray-900 font-inter "
                            >
                                <i className="fas fa-cogs mr-2"></i>
                                ВЕЛОЗАПЧАСТИНИ
                                <i className="fas fa-chevron-down ml-1 text-sm transition-transform group-hover:rotate-180"></i>
                            </Link>
                            <div
                                className={`absolute top-full left-0 w-[1000px] bg-white shadow-lg rounded-lg py-6 transform transition-all duration-300 ease-in-out ${
                                    activeMegaMenu === 'parts'
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}
                            >
                                <div className="grid grid-cols-4 gap-6 px-6">
                                    {/* Add similar thumbnail-based layout for parts categories */}
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative group"
                            onMouseEnter={() => setActiveMegaMenu('accessories')}
                            onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                            <Link
                                href="/accessories"
                                className="flex items-center text-gray-700 hover:text-gray-900 font-inter "
                            >
                                <i className="fas fa-shopping-bag mr-2"></i>
                                ВЕЛОАКСЕСУАРИ
                                <i className="fas fa-chevron-down ml-1 text-sm transition-transform group-hover:rotate-180"></i>
                            </Link>
                            {/* Add similar dropdown content for accessories */}
                        </div>
                    </nav>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsSearchVisible(!isSearchVisible)}
                            className="p-2 text-gray-700 hover:text-gray-900"
                        >
                            <Search />
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 text-gray-700 hover:text-gray-900"
                        >
                            <i className="fas fa-bars text-xl"></i>
                            <AlignJustify />
                        </button>
                    </div>

                    {/* <div className="hidden md:relative md:block">
            <input
              type="search"
              placeholder="Search bikes..."
              className="w-full md:w-64 px-4 py-2 rounded border border-gray-200 bg-white text-gray-900 font-inter"
            />
          </div> */}
                </div>
                {isSearchVisible && (
                    <div className="md:hidden mt-4">
                        <input
                            type="search"
                            placeholder="Search bikes..."
                            className="w-full px-4 py-2 rounded border border-gray-200 bg-white text-gray-900 font-inter"
                        />
                    </div>
                )}
            </div>
            {isMobileMenuOpen && (
                <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            )}
        </header>
    );
}

export default Header;
