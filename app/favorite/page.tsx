'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import { Button } from '@/components/ui/button';
import { getFavorites, StoredProduct } from '@/lib/localStorage';

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState<StoredProduct[]>([]);

    useEffect(() => {
        // Get favorites from localStorage
        const storedFavorites = getFavorites();
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

                    {favorites.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="inline-flex justify-center items-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                                <Heart className="h-12 w-12 text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">
                                Your favorites list is empty
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Add items to your favorites to keep track of products you love.
                            </p>
                            <Button asChild>
                                <Link href="/products">Browse Products</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {favorites.map(product => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                    image={product.image}
                                    inStock={product.inStock}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </div>
    );
}
