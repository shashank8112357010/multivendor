import React from "react";
import MajarCategoryCard from "./MajarCategoryCard";

const MajarCategoryItem = () => {
    const products = [
        {
            id: 1,
            image: "https://smytten-image.gumlet.io/discover_product/1622045086_DTDC0006AB1.jpeg?w=500",
            title: "DOT & KEY Night",
            description: "Night Reset Retinol",
            price: 245,
            rating: 4.2,
            size: "15 ml",
            trialPoints: 2,
        },
        {
            id: 2,
            image: "https://smytten-image.gumlet.io/discover_product/1697209699_DCIL0022AB1_1.jpg?w=500",
            title: "Mamaearth",
            description: "Multani Mitti Face Wash",
            price: 99,
            rating: 3.9,
            size: "20 ml",
            trialPoints: 1,
        },
        {
            id: 3,
            image: "https://smytten-image.gumlet.io/discover_product/1622045086_DTDC0006AB1.jpeg?w=500",
            title: "DOT & KEY Night - Pro",
            description: "Vitamin C Sleep Mask",
            price: 299,
            rating: 4.4,
            size: "20 ml",
            trialPoints: 3,
        },
        {
            id: 4,
            image: "https://smytten-image.gumlet.io/discover_product/1697209699_DCIL0022AB1_1.jpg?w=500",
            title: "Mamaearth - Deluxe",
            description: "Charcoal Face Wash",
            price: 125,
            rating: 4.1,
            size: "25 ml",
            trialPoints: 2,
        },
        {
            id: 5,
            image: "https://smytten-image.gumlet.io/discover_product/1622045086_DTDC0006AB1.jpeg?w=500",
            title: "DOT & KEY Night - Light",
            description: "Retinol Light Serum",
            price: 215,
            rating: 4.3,
            size: "10 ml",
            trialPoints: 1,
        },
        {
            id: 6,
            image: "https://smytten-image.gumlet.io/discover_product/1697209699_DCIL0022AB1_1.jpg?w=500",
            title: "Mamaearth Essentials",
            description: "Aloe Vera Gel",
            price: 85,
            rating: 3.8,
            size: "15 ml",
            trialPoints: 1,
        },
        {
            id: 7,
            image: "https://smytten-image.gumlet.io/discover_product/1622045086_DTDC0006AB1.jpeg?w=500",
            title: "DOT & KEY Night - Glow",
            description: "Brightening Night Cream",
            price: 275,
            rating: 4.5,
            size: "18 ml",
            trialPoints: 3,
        },
        {
            id: 8,
            image: "https://smytten-image.gumlet.io/discover_product/1697209699_DCIL0022AB1_1.jpg?w=500",
            title: "Mamaearth Pure",
            description: "Turmeric Face Pack",
            price: 105,
            rating: 4.0,
            size: "22 ml",
            trialPoints: 2,
        }
    ];


    return (
        <div className="container mx-auto p-2">
            <div className="flex flex-wrap gap-5">
                {products.map((product) => (
                    <MajarCategoryCard key={product.id} product={product} />
                ))}

            </div>
        </div>
    );
};

export default MajarCategoryItem;
