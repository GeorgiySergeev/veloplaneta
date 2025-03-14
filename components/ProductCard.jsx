import React from "react";

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="group relative max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg ">
      <div className="relative">
        <img className="w-full " src={image} alt="Product Image" />
        <div className="absolute top-0 right-0 border   px-2 py-1 m-2 rounded-md text-xs font-thin">
         <p className="text-white"> в наличии</p>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-sm font-medium h-48 ">{title}</h3>
        <p className="text-gray-600 text-sm">
         {description}
        </p>
        <div className="flex justify-between items-end">
          <p className="text-xl  font-medium text-gray-900 mt-auto pt-4">{price} грн.</p>
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
