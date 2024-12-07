import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, categories, baseLink }) => {
    return (
        <div className="mb-12">
            <div className="flex justify-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
            </div>
            <div className="overflow-x-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Link to={`${baseLink}/${category.link}`}>
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="w-full h-auto object-cover"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
