"use client"
import React from 'react';

import { FaChevronLeft, FaChevronRight, FaHeart, FaEye } from 'react-icons/fa';

const products = [
    {
        id: 1,
        title: 'MSI PRO B650-A WIFI Gaming Motherboard',
        price: '82,500',
        oldPrice: '92,000',
        discount: '-10%',
        imgSrc: 'msi.jpg',
        rating: 88,
    },
    {
        id: 2,
        title: 'MSI MPG X870E Gaming Motherboard',
        price: '195,000',
        oldPrice: '205,000',
        discount: '-10%',
        imgSrc: 'msi2.jpg',
        rating: 75,
    },
    {
        id: 3,
        title: 'ASUS TUF RTX 4070 Ti SUPER 16GB OC',
        price: '310,000',
        oldPrice: '345,000',
        discount: '-15%',
        imgSrc: 'asus.jpg',
        rating: 99,
    },
    {
        id: 4,
        title: 'MSI MPG GUNGNIR 300R AIRFLOW ',
        price: '32,000',
        oldPrice: '42,000',
        discount: '-25%',
        imgSrc: 'msi3.jpg',
        rating: 50,
    },
    {
        id: 5,
        title: 'ASUS ROG STRIX LC III ARGB LCD AIO',
        price: '82,000',
        oldPrice: '89,000',
        discount: '-5%',
        imgSrc: 'asus2.jpg',
        rating: 50,
    },
];

const Flash: React.FC = () => {
    return (
        <div className="container mx-auto p-4 justify-center  border-b border-gray-500">
            <div className="w-[15px] h-[30px] items-center justify-center bg-red-500 mr-2 rounded-sm">
                <h2 className="text-red-500 mx-6 text-lg font-bold">Today&apos;s</h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <h1 className="text-4xl font-bold mx-4">Flash Sales</h1>
                <div className="flex items-center justify-center lg:pr-[700px] lg:my-2">
                    <div className="text-center mx-2">
                        <p className="text-lg font-bold">Days</p>
                        <p className="text-3xl font-bold">03</p>
                    </div>
                    <div className="text-center mx-2">
                        <p className="text-lg font-bold">Hours</p>
                        <p className="text-3xl font-bold">23</p>
                    </div>
                    <div className="text-center mx-2">
                        <p className="text-lg font-bold">Minutes</p>
                        <p className="text-3xl font-bold">19</p>
                    </div>
                    <div className="text-center mx-2">
                        <p className="text-lg font-bold">Seconds</p>
                        <p className="text-3xl font-bold">56</p>
                    </div>
                </div>

                <div className="flex items-center mt-4 md:mt-0">
                    <button className="bg-gray-300 text-black p-2 rounded-full">
                        <FaChevronLeft />
                    </button>
                    <button className="bg-gray-300 text-black p-2 rounded-full ml-2">
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className=" relative  ">
                        <div className="absolute top-3 left-3 rounded-sm bg-red-500 text-white px-2 py-1">{product.discount}</div>
                        <img src={product.imgSrc} alt={product.title} className="w-full  font-semibold " />
                        <h3 className="text-center p-2 bg-black text-white font-bold transition-colors duration-300 hover:bg-red-500 hover:text-black">
                            Add to Cart
                        </h3>
                        <h3 className="text-lg font-bold px-2">{product.title}</h3>
                        <p className="text-red-500 text-xl font-sm px-2">₨{product.price} <span className="text-gray-400 font-md line-through ">₨{product.oldPrice}</span></p>
                        <div className="flex items-center mt-2 px-2">
                            <span className="text-yellow-500 fas fa-star">★</span>
                            <span className="text-yellow-500 fas fa-star">★</span>
                            <span className="text-yellow-500 fas fa-star">★</span>
                            <span className="text-yellow-500 fas fa-star">★</span>
                            <span className="text-yellow-500 fas fa-star">★</span>
                            <span className="text-gray-500 ml-2">({product.rating})</span>
                        </div>
                        <div className="absolute top-2 right-2 flex space-x-2">
                            <button className="text-gray-500 hover:text-red-500">
                                <FaHeart />
                            </button>
                            <button className="text-gray-500 hover:text-red-500">
                                <FaEye />
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-red-500 text-white py-2 px-4 rounded">View All Products</button>
            </div>
        </div>
    );
};

export default Flash;