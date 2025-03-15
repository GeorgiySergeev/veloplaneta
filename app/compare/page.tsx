'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarChart2, X, ShoppingCart } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCompareList, removeFromCompare, StoredProduct } from '../../lib/localStorage';

export default function ComparePage() {
    const [compareList, setCompareList] = useState<StoredProduct[]>([]);

    useEffect(() => {
        // Get compare list from localStorage
        const storedCompareList = getCompareList();
        setCompareList(storedCompareList);
    }, []);

    const handleRemoveFromCompare = (productId: string) => {
        removeFromCompare(productId);
        setCompareList(prev => prev.filter(item => item.id !== productId));
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <ErrorBoundary>
                <Header />
            </ErrorBoundary>

            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-6">Compare Products</h1>

                    {compareList.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="inline-flex justify-center items-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                                <BarChart2 className="h-12 w-12 text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">
                                Your compare list is empty
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Add items to compare to see how different products stack up against
                                each other.
                            </p>
                            <Button asChild>
                                <Link href="/products">Browse Products</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-4 border bg-gray-50 text-left">Product</th>
                                        {compareList.map(product => (
                                            <th
                                                key={product.id}
                                                className="p-4 border bg-gray-50 min-w-[250px]"
                                            >
                                                <div className="relative">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute top-0 right-0"
                                                        onClick={() =>
                                                            handleRemoveFromCompare(product.id)
                                                        }
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                    <div className="relative h-40 w-full mb-4">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <h3 className="font-semibold text-lg mb-2">
                                                        {product.name}
                                                    </h3>
                                                    <p className="font-bold text-lg mb-4">
                                                        ${product.price.toFixed(2)}
                                                    </p>
                                                    <Badge
                                                        variant={
                                                            product.inStock
                                                                ? 'default'
                                                                : 'destructive'
                                                        }
                                                        className="mb-4"
                                                    >
                                                        {product.inStock
                                                            ? 'In Stock'
                                                            : 'Out of Stock'}
                                                    </Badge>
                                                    <div className="flex gap-2 mt-2">
                                                        <Button
                                                            className="w-full"
                                                            disabled={!product.inStock}
                                                            size="sm"
                                                        >
                                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                                            Add to Cart
                                                        </Button>
                                                    </div>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border font-medium">Category</td>
                                        {compareList.map(product => (
                                            <td key={product.id} className="p-4 border text-center">
                                                {product.category}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="p-4 border font-medium">Price</td>
                                        {compareList.map(product => (
                                            <td key={product.id} className="p-4 border text-center">
                                                ${product.price.toFixed(2)}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="p-4 border font-medium">Availability</td>
                                        {compareList.map(product => (
                                            <td key={product.id} className="p-4 border text-center">
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="p-4 border font-medium">Actions</td>
                                        {compareList.map(product => (
                                            <td key={product.id} className="p-4 border text-center">
                                                <Link href={`/product/${product.id}`}>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full mb-2"
                                                    >
                                                        View Details
                                                    </Button>
                                                </Link>
                                                <Button
                                                    size="sm"
                                                    className="w-full"
                                                    disabled={!product.inStock}
                                                >
                                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                                    Add to Cart
                                                </Button>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
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
