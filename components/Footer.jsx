'use client';
import React from 'react';
import Link from 'next/link';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaTelegram,
} from 'react-icons/fa';

export default function Footer() {
    const categories = [
        { name: 'Велосипеди', subcategories: ['Гірські', 'Дитячі', 'Міські'] },
        {
            name: 'Електровелосипеди',
            subcategories: ['Міські E-байки', 'Гірські E-байки', 'Гібридні E-байки'],
        },
        {
            name: 'Вело запчастини',
            subcategories: ['Трансмісія', 'Гальма', 'Колеса', 'Компоненти'],
        },
        { name: 'Аксесуари', subcategories: ['Шоломи', 'Освітлення', 'Замки', 'Інструменти'] },
    ];

    return (
        <footer className=" border-t border-gray-800 pt-12 pb-8 bg-gray-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-4">VELOPLANETA</h3>
                        <p className="text-gray-400 mb-4">
                            Ваш надійний партнер у світі велоспорту. Продаж та обслуговування
                            велосипедів з 2010 року.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://telegram.org"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <FaTelegram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        {categories.map(category => (
                            <div key={category.name}>
                                <h4 className="text-blue-400 font-semibold mb-3">
                                    {category.name}
                                </h4>
                                <ul className="space-y-2">
                                    {category.subcategories.map(sub => (
                                        <li key={sub}>
                                            <Link
                                                href="#"
                                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                            >
                                                {sub}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-blue-400 font-semibold mb-4">Контакти</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+380123456789"
                                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <FaPhone className="h-5 w-5 mr-2" />
                                    +38 (012) 345-67-89
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@veloplaneta.com"
                                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <FaEnvelope className="h-5 w-5 mr-2" />
                                    info@veloplaneta.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <FaMapMarkerAlt className="h-5 w-5 mr-2" />
                                    вул. Велосипедна, 42
                                    <br />
                                    м. Київ, 01001
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            2024 VELOPLANETA. Всі права захищені.
                        </p>
                        <div className="flex space-x-6">
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                            >
                                Політика конфіденційності
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                            >
                                Умови використання
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
