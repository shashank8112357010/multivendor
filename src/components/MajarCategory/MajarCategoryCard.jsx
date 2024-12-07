import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const MajarCategoryCard = ({ product }) => {
    return (
        <div className="max-w-[230px] bg-white shadow-lg rounded-lg overflow-hidden border relative transform transition-transform hover:scale-105">
            <div className="absolute z-10 top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Most Tried
            </div>
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 z-10">
                <AiOutlineHeart className="text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
            </div>
            {/* Image Section */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-t-lg"
                />
                {/* Rating and Size (Over Image) */}
                <div className="absolute bottom-2 left-2 bg-white bg-opacity-80 px-3 py-1 rounded-full text-xs flex items-center space-x-2 shadow">
                    <span className="text-yellow-500 font-semibold">★ {product.rating}</span>
                    <span className="text-gray-600">{product.size}</span>
                </div>
            </div>
            {/* Content Section */}
            <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800">{product.title}</h2>
                <p className="text-xs text-gray-500">
                    {product.description} <br /> Worth ₹{product.price}
                </p>

                {/* Trial Points & Button */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm bg-blue-100 text-blue-500 px-3 py-1 rounded-full">
                        {product.trialPoints} TRIAL POINTS
                    </span>
                    <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-600">
                        Try +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MajarCategoryCard;
