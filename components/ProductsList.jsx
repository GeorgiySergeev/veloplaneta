"use client";
import React from "react";
import Link from "next/link"; // Add this import at the top
import { useState, useEffect, useRef } from "react";
import getAllProducts from "@/api/getAllProducts";
import { useRouter } from "next/navigation";

import ProductCard from "./ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ProductList() {
  const [products, setProducts] = useState([]); // Fixed state initialization
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const defaultImageSrc = "/images/default-img.jpg";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts(currentPage, 12);
        if (response) {
          setProducts(response.products);
          setTotalProducts(response.totalProducts);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="bg-white  ">
      <div className="mx-auto ">
        <p className="text-xs tracking-tight text-gray-900">
          найдено товаров: {totalProducts}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="cursor-pointer"
            >
              <ProductCard
                image={
                  product.images?.[0]?.src || defaultImageSrc || defaultImageSrc
                }
                title={product.name}
                price={product.price}
                describtion={product.description}
              />
            </Link>
          ))}
        </div>
        <Pagination className={'mt-5 container'}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {(() => {
              const totalPages = Math.ceil(totalProducts / 12);
              const maxVisiblePages = 5;
              let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
              let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

              if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
              }

              return (
                <>
                  {startPage > 1 && (
                    <PaginationItem>
                      <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
                    </PaginationItem>
                  )}
                  {startPage > 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                    <PaginationItem key={startPage + i}>
                      <PaginationLink
                        onClick={() => setCurrentPage(startPage + i)}
                        isActive={currentPage === startPage + i}
                      >
                        {startPage + i}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {endPage < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {endPage < totalPages && (
                    <PaginationItem>
                      <PaginationLink onClick={() => setCurrentPage(totalPages)}>{totalPages}</PaginationLink>
                    </PaginationItem>
                  )}
                </>
              );
            })()}
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(Math.ceil(totalProducts / 12), prev + 1))}
                disabled={currentPage === Math.ceil(totalProducts / 12)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default ProductList;
