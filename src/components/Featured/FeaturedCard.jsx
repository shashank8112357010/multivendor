import React from 'react'

const FeaturedCard = ({ image, title, price, discount }) => {
    return (
        <div className="w-full sm:w-80 lg:w-64 bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition duration-300">

            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full object-cover bg-white"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 hover:text-gray-600 cursor-pointer">
                    {title}
                </h2>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-800">₹{price}</span>
                    <span className="text-sm text-gray-500">{discount}</span>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard
