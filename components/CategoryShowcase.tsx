'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { cn } from '../lib/utils';
import { Bike, Wrench, Truck } from 'lucide-react';

interface CategoryItem {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    link: string;
}

interface CategoryShowcaseProps {
    categories?: CategoryItem[];
    title?: string;
    subtitle?: string;
}

const CategoryShowcase = ({
    categories = [
        {
            id: 'bikes',
            title: 'Велосипеди',
            description: 'Обирай якість, рухайчя вперед та відкривай нові можливості  ',
            image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
            icon: <Bike className="h-6 w-6" />,
            link: '/category/bikes',
        },
        {
            id: 'Електровелосипеди',
            title: 'Електровелосипеди',
            description: 'Пересувайся з легкістю та стилем на наших єлектровелосипедах.',
            image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
            icon: <Truck className="h-6 w-6" />,
            link: '/category/motorcycles',
        },
        {
            id: 'parts',
            title: 'Parts & Accessories',
            description: 'Quality components and accessories',
            image: 'https://images.unsplash.com/photo-1559519529-0936e4058364?w=800&q=80',
            icon: <Wrench className="h-6 w-6" />,
            link: '/category/parts',
        },
    ],
    title = 'Доступні категорії',
    subtitle = 'Виберіть категорію, яка вам потрібна',
}: CategoryShowcaseProps) => {
    return (
        <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                    <p className="text-muted-foreground mt-2">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map(category => (
                        <Link
                            href={category.link}
                            key={category.id}
                            className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg"
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                            </div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                <div className="bg-primary/80 rounded-full p-3 mb-3">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                                <p className="text-sm text-center max-w-[200px] opacity-90">
                                    {category.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryShowcase;
