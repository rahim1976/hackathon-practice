const Header: React.FC = () => {
  return (
    <header className="bg-black h-16 w-full flex flex-col">
      {/* Top Section with Sliding Text */}
      <div className="flex items-center justify-between px-4 md:px-6 overflow-hidden h-16">
        {/* Sliding Text on Mobile */}
        <div className="flex items-center justify-center flex-grow">
          <div className="flex flex-row items-center whitespace-nowrap animate-slide md:animate-none">
            <span className="text-white text-xs md:text-sm px-2">Summer Sale For All Swim Suits And Free Delivery</span>
            <span className="text-white text-xs md:text-sm">- OFF 50%!</span>
          </div>
          <div className="ml-2 md:ml-4 hidden md:block">
            <button className="text-white font-bold text-xs md:text-sm underline px-2">Shop Now</button>
          </div>
        </div>
        {/* Hidden on Mobile */}
        <div className="hidden md:flex items-center ml-auto">
          <select className="bg-transparent text-white text-xs md:text-sm  rounded px-2 py-1">
            <option className="bg-black">English</option>
            <option className="bg-black">Spanish</option>
            <option className="bg-black">French</option>
          </select>
        </div>
      </div>      
    </header>
    
    
  );
};

export default Header;