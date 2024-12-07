import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './app.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/Category/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import FeaturedPageItem from './pages/FeadturePage/FeaturedPageItem';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName/:categoryLink" element={<CategoryPage />} />
        <Route path="/product/details/:id" element={<ProductDetailsPage />} />
        <Route path="/all_feature/:activetab" element={<FeaturedPageItem />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
