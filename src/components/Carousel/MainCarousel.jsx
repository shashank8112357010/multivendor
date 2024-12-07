import React, { useEffect, useState } from 'react';
import img1 from '../../assets/1.webp';
import img2 from '../../assets/2.webp';
import img3 from '../../assets/3.webp';

const MainCarousel = () => {
    const images = [img1, img2, img3];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-full mx-auto overflow-hidden">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-auto transition-transform duration-700 ease-in-out object-cover"
            />
        </div>
    );
};

export default MainCarousel;
