import React from "react";

import img1 from "../../assets/footer_img.png"
import img2 from "../../assets/footer_img2.png"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            {/* // top footer */}
            <div className="bg-[#0F1628] p-10 text-white">
                <h3>Explore 100% Authentic And Genuine Trial Packs On Smytten.</h3>
            </div>

            {/* // buttom footer */}

            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customers</h3>
                        <ul className="space-y-2">
                            {["Contact Us", "Terms of Use", "FAQ", "Privacy Policy"].map((item, index) => (
                                <li key={index}>
                                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            {["Blog", "About Us"].map((item, index) => (
                                <li key={index}>
                                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect with us socially</h3>
                        <ul className="space-y-2">
                            {["Facebook", "Twitter", "Instagram", "LinkedIn", "Quora", "YouTube"].map((platform, index) => (
                                <li key={index}>
                                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                                        {platform}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Download the Smytten mobile app</h3>
                        <div className="space-y-4">
                            <Link to="/">
                                <img
                                    src={img1}
                                    alt="Google Play"
                                    className="w-40 pb-4"
                                />
                            </Link>
                            <Link to="/">
                                <img
                                    src={img2}
                                    alt="App Store"
                                    className="w-40"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 text-gray-500 text-sm">
                    © 2024 Your Company. All rights reserved.
                </div>
            </footer>
        </>

    );
};

export default Footer;
