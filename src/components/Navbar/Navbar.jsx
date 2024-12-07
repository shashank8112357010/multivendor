import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaBars, FaMapMarkerAlt, FaRegHeart, FaRegUser, FaSearch, FaTimes } from 'react-icons/fa';
import { MdAppBlocking } from 'react-icons/md';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchList, setSearchList] = useState("");
    const [showSearchInput, setShowSearchInput] = useState(false);

    const mockData = [
        "Winter Jacket",
        "Hoodies",
        "Sweaters",
        "Sneakers",
        "Accessories",
        "Backpacks",
    ];

    // Filter results based on search query
    const filteredResults = searchList
        ? mockData.filter((item) =>
            item.toLowerCase().includes(searchList.toLowerCase())
        )
        : [];


    return (
        <div className="w-full">
            {/* Top Navbar */}
            <div className="bg-[#E11B23] w-full flex flex-col md:flex-row justify-evenly items-center px-4">
                <nav className="flex gap-4 md:gap-8">
                    <div className="font-bold text-black bg-white px-4 py-2 rounded hover:shadow-md">
                        <Link to={"/women"}>Women</Link>
                    </div>
                    <div className="font-bold text-white px-4 py-2 hover:bg-[#dfe0e02f] rounded">
                        <Link to={"/men"}>Men</Link>
                    </div>
                    <div className="font-bold text-white px-4 py-2 hover:bg-[#dfe0e02f] rounded">
                        <Link to={"/kids"}>Kids</Link>
                    </div>
                </nav>
                <div className="hidden lg:flex  flex-col md:flex-row items-center gap-4 text-white mt-4 md:mt-0">
                    <Link to={"/"} className="flex items-center gap-1">
                        <FaMapMarkerAlt /> <span>India</span> <FaAngleDown />
                    </Link>
                    <Link to={"/track-order"}>Track Order</Link>
                    <Link to={"/contact"}>Contact Us</Link>
                    <Link to={"/download-app"} className="flex items-center gap-1">
                        <MdAppBlocking /> <span>Download App</span>
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-[#FFFFFF] shadow-md flex lg:flex-row justify-between items-center p-4">
                {/* Logo and Toggle Button */}
                <div className="flex justify-between items-center w-full lg:w-auto lg:order-none">
                    <button
                        className="lg:hidden text-2xl text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <Link
                        to="/"

                    >
                        <img className='w-20' src={logo} alt="" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav
                    className={`flex-col lg:flex-row items-center gap-6 w-full lg:w-auto lg:flex ${isMenuOpen ? "flex" : "hidden"
                        } mt-4 lg:mt-0`}
                >
                    {[
                        { name: "WINTERWEAR", links: ["All Winterware", "Hoodies Sweaters"] },
                        { name: "TOPWEAR", links: ["T-Shirts", "Shirts"] },
                        { name: "BOTTOMWEAR", links: ["Pants", "Skirts"] },
                        { name: "BESTSELLERS", links: ["Trending", "Best Deals"] },
                        { name: "SNEAKERS", links: ["Trending", "Best Deals"] },
                        { name: "COLLECTIONS", links: ["Trending", "Best Deals"] },
                        { name: "ACCESSORIES", links: ["Comic Books", "Backpacks"] },
                    ].map((category, index) => (
                        <div key={index} className="relative group">
                            <Link
                                to="/"
                                className="relative flex items-center text-black font-medium hover:text-red-700"
                            >
                                {category.name}
                                <FaAngleDown className="ml-1" />
                                <span className="absolute top-10 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                            </Link>
                            {/* Dropdown Menu */}
                            <div className="absolute z-10 left-0 top-9 hidden group-hover:block bg-white shadow-lg mt-2 w-48 rounded-md">
                                <ul className="py-2">
                                    {category.links.map((link, idx) => (
                                        <li key={idx} className="px-4 py-2 hover:text-red-700">
                                            <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </nav>
                {/* Icons Section */}
                <div className="flex space-x-6 text-xl text-gray-700">
                    {/* Search Icon and Input */}
                    <div
                        className="relative"
                        onMouseEnter={() => setShowSearchInput(true)}
                        onMouseLeave={() => setShowSearchInput(false)}
                    >
                        <FaSearch className="cursor-pointer" />
                        {showSearchInput && (
                            <div
                                className="absolute z-10 -bottom-3 right-3 bg-white shadow-md p-2 rounded-md flex flex-col items-center"
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchList}
                                    onChange={(e) => setSearchList(e.target.value)}
                                    className="border border-gray-300 rounded-md p-1 focus:outline-none"
                                />
                                {filteredResults.length > 0 && (
                                    <div className="absolute z-10 right-0 top-16 bg-white shadow-lg rounded-md w-72 border border-gray-200">
                                        {filteredResults.map((result, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                                                onClick={() => setSearchList(result)}
                                            >
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="relative group hidden lg:flex">
                        <FaRegUser className="hover:text-red-600 cursor-pointer" />
                        <span className="absolute top-10 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                    </div>
                    <div className="relative group">
                        <FaRegHeart className="hover:text-red-600 cursor-pointer" />
                        <span className="absolute top-9 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                    </div>
                    <div className="relative group">
                        <LiaShoppingBagSolid className="hover:text-red-600 cursor-pointer" />
                        <span className="absolute top-9 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Navbar;

