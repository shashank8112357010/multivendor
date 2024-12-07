import React from 'react';
import Slider from 'react-slick';
import MajarCategoryItem from './MajarCategroryItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from "../../assets/ct1.webp";

const MajarCategorySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,

    };

    return (
        <div className="p-10 container">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                    <div className="w-full">
                        <img src={Banner} className="w-full rounded-t-lg" alt="Banner" />
                    </div>
                </div>
                <div className="col-span-10">
                    <Slider {...settings} className="w-full">
                        <MajarCategorySlider />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default MajarCategorySlider;
