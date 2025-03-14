import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

function Hero(state) {
  return (
    <section className="w-full relative overflow-x-hidden">
      <div className="container  h-[80vh] overflow-hidden mx-auto px-4">
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/hero/hemo-img-3.jpg"
            alt="Mountain Bike"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="md:text-6xl text-4xl font-bold text-white mb-6">MOUNTAIN BIKES</h1>
            <p className="text-xl text-gray-300 mb-8">
              Відкрийте для себе нові горизонти з нашою колекцією гірських велосипедів
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-lg hover:bg-blue-700 hover:text-white transition-colors duration-200"
            >
              <Link href="/shop" className="flex items-center gap-2">
                До магазину
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
