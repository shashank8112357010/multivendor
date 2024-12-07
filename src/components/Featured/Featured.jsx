import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import FeatureButton from '../FeatureButton/FeatureButton';
import FeaturedItem from './FeaturedItem';

import { data } from '../../data';

const Featured = () => {
    const [activeTab, setActiveTab] = useState('newArrivals');

    const tabs = [
        { id: 'newArrivals', label: 'NEW ARRIVALS' },
        { id: 'bestsellers', label: 'BESTSELLERS' },
        { id: 'offers', label: 'OFFERS' },
        { id: 'recommended', label: 'RECOMMENDED' },
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
    };


    return (
        <div className="mb-20">
            {/* featureButton  */}
            <FeatureButton tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* see more Button */}
            <div className="pb-8 flex justify-end pr-10">
                <Link to={`/all_feature/${activeTab}`} state={{ activeTab }}>
                    <button className="flex items-center px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition-all">
                        SEE MORE <FaArrowRight className="ml-2" />
                    </button>
                </Link>
            </div>

            {/* featureSlider */}
            <div className="px-4 featured-slider-wrapper">
                {/* <Slider key={activeTab} {...settings} className="featured-slider"> */}
                <FeaturedItem activeTab={activeTab} data={data} />
                {/* </Slider> */}
            </div>
        </div>
    );
};

export default Featured;
