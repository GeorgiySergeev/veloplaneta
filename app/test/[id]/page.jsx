'use client';

import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { useParams } from 'next/navigation';
import { Radio, RadioGroup } from '@headlessui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import getOneProduct from '@/api/getOneProduct';


const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductPage() {
  const defaultImage = '/images/default-img.jpg';
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
console.log(id);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getOneProduct(id);
        if (res) {
          console.log(res.name);
          setProduct(res);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-white">
      <Header />
      <p>{`ID : ${id}`}</p>
      <p>{product.name}</p>
      <p>{product.id}</p>
      <Footer />
    </div>
  );
}
