import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedItem = ({ activeTab, data }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {data[activeTab]?.map((item) => (
                <FeaturedCard
                    key={item.id}
                    image={item.image}
                    title={item.name}
                    price={item.price}
                    discount={item.discount}
                />
            ))}
        </div>
    );
};

export default FeaturedItem;
