// ProductImageGallery.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductImageGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const defaultImage = '/images/default-img.jpg';

  if (!images || images.length === 0) {
    return (
      <div className="w-full">
        <img src={defaultImage} alt="Default product" className="w-full h-auto rounded-lg" />
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Navigation, Thumbs]}
        className=" h-[500px] w-full overflow-hidden rounded-lg border border-gray-200"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src={img.src || defaultImage} 
                alt={img.alt || 'Product image'} 
                className="w-full object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="thumbs-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="cursor-pointer aspect-w-1 aspect-h-1">
              <img 
                src={img.src || defaultImage} 
                alt={img.alt || 'Product thumbnail'} 
                className="w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallery;