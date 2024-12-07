import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/ct1.webp';
import img2 from '../../assets/ct2.webp';
import img3 from '../../assets/ct3.webp';
import img4 from '../../assets/ct4.webp';
import img5 from '../../assets/ct5.webp';
import img6 from '../../assets/ct6.webp';
import imgw1 from '../../assets/ctw1.webp';
import imgw2 from '../../assets/ctw2.webp';
import imgw3 from '../../assets/ctw3.webp';
import imgw4 from '../../assets/ctw4.webp';
import imgw5 from '../../assets/ctw5.webp';
import imgw6 from '../../assets/ct6.webp';
import CategoryCard from './CategoryCard';

const categoriesMen = [
    { name: 'Category 1', img: img1, link: 'category1' },
    { name: 'Category 2', img: img2, link: 'category2' },
    { name: 'Category 3', img: img3, link: 'category3' },
    { name: 'Category 4', img: img4, link: 'category4' },
    { name: 'Category 5', img: img5, link: 'category5' },
    { name: 'Category 6', img: img6, link: 'category6' },
];

const categoriesWomen = [
    { name: 'Category 1', img: imgw1, link: 'category1' },
    { name: 'Category 2', img: imgw2, link: 'category2' },
    { name: 'Category 3', img: imgw3, link: 'category3' },
    { name: 'Category 4', img: imgw4, link: 'category4' },
    { name: 'Category 5', img: imgw5, link: 'category5' },
    { name: 'Category 6', img: imgw6, link: 'category6' },
];

const CategoryItem = () => {
    return (
        <div className="bg-gray-100 py-12">
            <CategoryCard title="Shop by Category - Men" categories={categoriesMen} baseLink="/category/men" />
            <CategoryCard title="Shop by Category - Women" categories={categoriesWomen} baseLink="/category/women" />
        </div>
    );
};

export default CategoryItem;
