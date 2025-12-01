import { CircleUserRound } from "lucide-react";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ">
      <div
        className={`mx-auto flex items-center justify-between p-4 transition-all duration-300
          ${isScrolled ? "max-w-[1200px] rounded-xl bg-gray-400/70 shadow-md backdrop-blur-md" : "max-w-full rounded-none bg-transparent"}
        `}
      >
        
        <div className="flex-1 flex justify-start ">
          <CircleUserRound className="w-8 h-8 text-white hover:animate-pulse cursor-pointer ml-5" />
        </div>

       
        <div className="flex-1 flex justify-center">
          <img className="max-w-[200px]" src="/images/colored-logo.png" alt="Logo" />
        </div>

        
        <div className="flex-1 flex justify-end">
          <ul className="nav flex space-x-6 text-white mr-5">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
