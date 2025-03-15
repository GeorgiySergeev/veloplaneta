import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
    id?: string;
    name?: string;
    price?: number;
    category?: string;
    image?: string;
    inStock?: boolean;
    describtion?: string;
    onAddToCart?: () => void;
    onAddToWishlist?: () => void;
}
const ProductCard = ({
    id,
    name = '',
    price,
    category,
    image = '',
    inStock = true,
    // describtion,
    onAddToCart = () => console.log('Added to cart'),
    onAddToWishlist = () => console.log('Added to wishlist'),
}: ProductCardProps) => {
    console.log('ProductCard', name, image);

    return (
        <Card className="w-full  h-[400px] flex flex-col overflow-hidden bg-white">
            <Link href={`/product/${id}`} className="contents">
                <div className="relative h-48 w-full overflow-hidden">
                    <Badge
                        variant={inStock ? 'default' : 'destructive'}
                        className="absolute top-2 right-2 z-10"
                    >
                        {inStock ? 'В наявності' : 'Очікуйтесь'}
                    </Badge>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                    />
                </div>

                <CardHeader className="p-4 pb-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <Badge variant="outline" className="mb-2">
                                {category}
                            </Badge>
                            <h3 className="font-semibold text-l line-clamp-2">{name}</h3>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={onAddToWishlist}
                        >
                            <Heart className="h-5 w-5" />
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="p-4 pt-2 flex-grow">
                    {/* <p className="text-sm text-gray-500">Product ID: {id}</p> */}
                </CardContent>

                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <p className="font-bold text-lg">{price} грн.</p>
                    <Button
                        onClick={onAddToCart}
                        disabled={!inStock}
                        size="sm"
                        className="flex items-center gap-1"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Купити
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    );
};

export default ProductCard;
