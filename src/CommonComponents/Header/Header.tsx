import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Images } from "../../constants/images";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <img src={Images.Logo} alt="Logo" className="h-8 w-auto" />

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-12">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 flex items-center font-sans text-base"
            >
              Learn <span className="ml-1">▼</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-sans">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-sans">
              Blogs
            </a>
          </nav>
        </div>
        {/* CTA Button - Hidden on mobile */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Apply as Instructor/Mentor
        </button>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 py-2 flex items-center"
            >
              Learn <span className="ml-1 text-xs">▼</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 py-2">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 py-2">
              Blogs
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md my-2">
              Apply as Instructor/Mentor
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
