import React from 'react'
import FeaturedItem from '../../components/Featured/FeaturedItem'
import { data } from '../../data';
import { useParams } from 'react-router-dom';

const FeaturedPageItem = () => {

    const { activetab } = useParams()

    // console.log(activetab, "activetab----------");
    return (
        <div className="grid gap-8">
            <div className=" flex flex-wrap gap-8">
                <FeaturedItem activeTab={activetab} data={data} />
            </div>
        </div>
    )
}

export default FeaturedPageItem
