'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { useParams } from 'next/navigation';
import { Radio, RadioGroup } from '@headlessui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getOneProduct from '@/api/getOneProduct';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import ProductImageGallery from '../../../components/ProductCarusel';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// import { classNames } from '@/utils/classNames';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const reviews = { href: '#', average: 4, totalCount: 17 };
export default function ProductPage() {
  const defaultImage = '/images/default-img.jpg';
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])

  useEffect(() => {
    setMounted(true);
    const fetchProduct = async () => {
      try {
        const res = await getOneProduct(id);
        if (res) {
          console.log(res);
          setProduct(res);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Prevent hydration mismatch
  if (!mounted) return null;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
         {/* Breadcrumb */}
         <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
           

            {/* Product images */}
            <div className="cpase-y-4">
              {/* <Carousel className="w-full max-w-xl">
              <CarouselContent>
                {product.images?.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image.src || defaultImage}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
              <ProductImageGallery images={product.images} />
            </div>

            {/* Product info */}
            <div className="w-full space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600">SKU: {product.sku || 'N/A'}</p>
              </div>

              <div className="flex items-center space-x-4">
                <p className="text-2xl font-bold">{product.price} грн.</p>
                {product.oldPrice && (
                  <p className="text-gray-500 line-through">{product.oldPrice} грн.</p>
                )}
              </div>

              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`h-5 w-5 ${
                      index < (reviews.average || 0) ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {reviews.average} ({reviews.totalCount} відгуків)
                </span>
              </div>

              <div>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {product.colors && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Колір:</h3>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color.class}`}
                        style={{ backgroundColor: color.value }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Кількість:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue="1"
                  className="w-20 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-indigo-600 flex justify-center gap-2 items-center text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Додати в кошик
                </button>
                <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Обране
                </button>
              </div>

              {product.attributes && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Характеристики:</h3>
                  <div className="space-y-3">
                    {product.attributes.map((feature, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                        <span className="text-gray-600 font-medium">{feature.name}</span>
                        <span className="text-gray-900">{feature.options[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

                <Tabs defaultValue="specifications" className="mb-12">
            <TabsList className="mb-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent
              value="specifications"
              className="p-6 border rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-100"
                  >
                    <span className="font-medium">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))} */}
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Shipping Information
              </h3>
              <p className="mb-4">We offer the following shipping options:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Standard Shipping (3-5 business days): $9.99</li>
                <li>Express Shipping (1-2 business days): $19.99</li>
                <li>Free shipping on orders over $100</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Return Policy</h3>
              <p className="mb-4">
                You may return most new, unopened items within 30 days of
                delivery for a full refund.
              </p>
              <p>
                We'll also pay the return shipping costs if the return is a
                result of our error (you received an incorrect or defective
                item, etc.).
              </p>
            </TabsContent>

            <TabsContent value="reviews" className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <p>No reviews yet. Be the first to review this product!</p>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
