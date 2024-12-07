import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const { categoryName, categoryLink } = useParams();

    const [wishlist, setWishlist] = useState({});
    const [filters, setFilters] = useState({
        size: [],
        brand: [],
        color: [],
    });

    const toggleWishlist = (id) => {
        setWishlist((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const products = [
        {
            id: 1,
            image: "https://via.placeholder.com/200",
            label: "OVERSIZED FIT",
            rating: 4.5,
            badge: "NEW ARRIVAL",
            title: "Bewakoof X Marvel - Black Panther Hoodie",
            price: "₹1,899",
            originalPrice: "₹2,399",
            discount: "42% off",
            size: "M",
            brand: "Marvel",
            color: "Black",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/200",
            label: "OVERSIZED FIT",
            rating: 4.5,
            badge: "",
            title: "Bewakoof X Marvel - Iron Man Hoodie",
            price: "₹1,699",
            originalPrice: "₹2,399",
            discount: "40% off",
            size: "L",
            brand: "Marvel",
            color: "Red",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/200",
            label: "OVERSIZED FIT",
            rating: 4.4,
            badge: "NEW ARRIVAL",
            title: "Bewakoof X Marvel - Purple Hoodie",
            price: "₹1,899",
            originalPrice: "₹3,399",
            discount: "44% off",
            size: "S",
            brand: "Marvel",
            color: "Purple",
        },
    ];

    const applyFilters = () => {
        return products.filter((product) => {
            return (
                (filters.size.length === 0 || filters.size.includes(product.size)) &&
                (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
                (filters.color.length === 0 || filters.color.includes(product.color))
            );
        });
    };

    const filteredProducts = applyFilters();

    const handleFilterChange = (filterType, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter((item) => item !== value)
                : [...prev[filterType], value],
        }));
    };

    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <SideBar filters={filters} handleFilterChange={handleFilterChange} />

            {/* Products Grid */}
            <ProductItem filteredProducts={filteredProducts} wishlist={wishlist} toggleWishlist={toggleWishlist} />
        </div>
    );
};

export default CategoryPage;
