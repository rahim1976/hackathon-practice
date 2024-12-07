"use client";
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import { HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 pt-6 border-b border-gray-300">
            <div className="flex items-center justify-between px-4 py-3 max-w-[1170px] mx-auto">
                {/* Logo */}
                <div className="text-black text-2xl font-bold">Exclusive</div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-12 text-sm font-medium">
                    <a href="/" className="text-black hover:text-gray-700 transition duration-200">Home</a>
                    <a href="/contact" className="text-black hover:text-gray-700 transition duration-200">Contact</a>
                    <a href="/about" className="text-black hover:text-gray-700 transition duration-200">About</a>
                    <a href="/signup" className="text-black hover:text-gray-700 transition duration-200">Sign Up</a>
                </div>

                {/* Icons and Search Bar */}
                <div className="hidden md:flex justify-center  items-center space-x-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="What are you looking for"
                            className="text-sm bg-gray-100 placeholder-gray-400 px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                    </div>

                    {/* Icons */}
                    <HiOutlineHeart className="text-black hover:text-gray-700 cursor-pointer transition duration-200" />
                    <HiOutlineShoppingCart className="text-black hover:text-gray-700 cursor-pointer transition duration-200" />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
                        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 px-4 py-3 border-t border-gray-200">
                    <a href="/" className="text-black hover:text-gray-700 transition duration-200">Home</a>
                    <a href="/contact" className="text-black hover:text-gray-700 transition duration-200">Contact</a>
                    <a href="/about" className="text-black hover:text-gray-700 transition duration-200">About</a>
                    <a href="/signup" className="text-black hover:text-gray-700 transition duration-200">Sign Up</a>

                    {/* Icons for mobile */}
                    <div className="flex items-center space-x-4 mt-4">
                        <HiOutlineHeart className="text-black hover:text-gray-700 cursor-pointer transition duration-200" />
                        <HiOutlineShoppingCart className="text-black hover:text-gray-700 cursor-pointer transition duration-200" />
                    </div>
                </div>
            )}

            
        </nav>
        
    );
};

export default Navbar;