import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem = ({ filteredProducts, wishlist, toggleWishlist }) => {
    return (
        <div className="w-full md:w-3/4 p-4">
            <h2 className="text-2xl font-semibold mb-4">Hoodies For Men</h2>
            <p className="text-gray-500 mb-4">{filteredProducts.length} Products</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white shadow-md rounded-lg overflow-hidden group transition hover:scale-105"
                    >
                        {/* Link to Product Details Page */}
                        <Link to={`/product/details/${product.id}`}>
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover"
                            />
                        </Link>

                        {/* Badge */}
                        {product.label && (
                            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                {product.label}
                            </div>
                        )}

                        {/* Product Details */}
                        <div className="p-4 space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm text-gray-700 font-medium line-clamp-2">
                                    {product.title}
                                </h3>
                                <button
                                    className="text-xl"
                                    onClick={() => toggleWishlist(product.id)}
                                >
                                    <FaHeart
                                        className={wishlist[product.id] ? "text-red-500" : "text-gray-500"}
                                    />
                                </button>
                            </div>

                            {/* Price and Discount */}
                            <div className="flex items-center space-x-2">
                                <p className="text-lg font-semibold text-gray-800">
                                    {product.price}
                                </p>
                                <p className="text-sm text-gray-500 line-through">
                                    {product.originalPrice}
                                </p>
                                <p className="text-sm text-green-600">{product.discount}</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-1">
                                <span className="text-yellow-400">★</span>
                                <p className="text-sm font-medium">{product.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductItem;
