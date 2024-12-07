import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-[1170px] mx-auto mb-20">
      {/* Categories List */}
      <div className="w-full md:w-1/5 border-r border-gray-300 py-6 pr-2 hidden md:block">
        <ul className="space-y-2">
          <li className="text-lg">Woman’s Fashion</li>
          <li className="text-lg">Men’s Fashion </li>
          <li className="text-lg">Electronics</li>
          <li className="text-lg">Home & Lifestyle</li>
          <li className="text-lg">Medicine</li>
          <li className="text-lg">Sports & Outdoor</li>
          <li className="text-lg">Baby’s & Toys</li>
          <li className="text-lg">Groceries & Pets</li>
          <li className="text-lg">Health & Beauty</li>
        </ul>
      </div>

      {/* Categories List for Mobile */}
      <div className="w-full md:hidden px-4 py-4 bg-gray-100">
        <select
          className="w-full p-2  rounded-md text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select Category
          </option>
          <option>Woman’s Fashion</option>
          <option>Men’s Fashion</option>
          <option>Electronics</option>
          <option>Home & Lifestyle</option>
          <option>Medicine</option>
          <option>Sports & Outdoor</option>
          <option>Baby’s & Toys</option>
          <option>Groceries & Pets</option>
          <option>Health & Beauty</option>
        </select>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-4/5 pl-0 md:pl-8">
        <img
          src="/Frame.png"
          alt="Fashion Collection"
          className="w-full md:w-[892px] h-[200px] md:h-[344px] object-cover mt-4 md:mt-8"
        />
      </div>
    </section>
  );
};

export default Hero;
