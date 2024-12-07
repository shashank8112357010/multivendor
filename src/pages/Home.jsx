import React from 'react'
import MainCarousel from '../components/Carousel/MainCarousel'
import CategoryItem from '../components/Category/CategoryItem'
import Featured from '../components/Featured/Featured'
import MajarCategoryItem from '../components/MajarCategory/MajarCategroryItem'
import MajarCategorySlider from '../components/MajarCategory/MajarCategorySlider'

const Home = () => {
    return (
        <div>
            <MainCarousel />
            <CategoryItem />
            <Featured />
            {/* <MajarCategoryItem /> */}
            {/* <MajarCategorySlider /> */}
        </div>
    )
}

export default Home
