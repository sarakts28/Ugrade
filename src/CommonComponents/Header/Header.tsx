import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Images } from "../../constants/images";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiGraduationCapLine,
} from "react-icons/ri";
import { CustomButton } from "..";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (isLearnOpen) setIsLearnOpen(false);
  };

  const toggleLearnMenu = () => {
    setIsLearnOpen(!isLearnOpen);
  };

  return (
    <div>
      <div className="container mx-auto px-4 md:px-12 xl:px-16 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <img
            src={Images.Logo}
            alt="Logo"
            className="h-8 w-auto"
            onClick={() => {
              navigate("/");
            }}
          />

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-12 items-center">
            <div className="relative">
              <button
                onClick={toggleLearnMenu}
                className="text-primary-NavyBlue hover:text-gray-900 flex items-center font-sans text-base focus:outline-none"
              >
                Learn
                <span>
                  {isLearnOpen ? (
                    <RiArrowDropUpLine style={{ fontSize: "32px" }} />
                  ) : (
                    <RiArrowDropDownLine style={{ fontSize: "32px" }} />
                  )}
                </span>
              </button>

              {/* Desktop Dropdown */}
              {isLearnOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-primary-NavyBlue hover:bg-gray-100"
                  >
                    Courses
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-primary-NavyBlue hover:bg-gray-100"
                  >
                    Tutorials
                  </a>
                </div>
              )}
            </div>

            <a
              onClick={() => navigate("/about")}
              className="text-primary-NavyBlue hover:text-gray-900 font-sans cursor-pointer"
            >
              About
            </a>
            <a className="text-primary-NavyBlue hover:text-gray-900 font-sans cursor-pointer">
              Blogs
            </a>
          </nav>
        </div>

        {/* CTA Button - Hidden on mobile */}
        <CustomButton
          label="Apply as Instructor/Mentor"
          labelClassName="text-base font-sans"
          onClick={() => alert("Button Clicked!")}
          className="hidden md:flex bg-white text-primary-NavyBlue px-8 py-2 rounded-md my-2"
          startIcon={<RiGraduationCapLine />}
        />

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          className="md:hidden text-primary-NavyBlue focus:outline-none"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer - Full height with fixed button at bottom */}
      {isDrawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white mt-16 overflow-y-auto">
          <div className="container mx-auto px-4 py-2 flex flex-col min-h-[calc(100vh-4rem)]">
            {/* Navigation items with scrollable content */}
            <div className="flex-grow gap-6 flex flex-col">
              <div>
                <button
                  onClick={toggleLearnMenu}
                  className="w-full text-left text-primary-NavyBlue hover:text-gray-900 py-4 flex items-center justify-between"
                >
                  Learn
                  <span>
                    {isLearnOpen ? (
                      <RiArrowDropUpLine style={{ fontSize: "32px" }} />
                    ) : (
                      <RiArrowDropDownLine style={{ fontSize: "32px" }} />
                    )}
                  </span>
                </button>

                {/* Mobile Dropdown */}
                {isLearnOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50">
                    <a
                      href="#"
                      className="block text-primary-NavyBlue hover:text-gray-900 py-3 px-2"
                    >
                      Courses
                    </a>
                    <a
                      href="#"
                      className="block text-primary-NavyBlue hover:text-gray-900 py-3 px-2"
                    >
                      Tutorials
                    </a>
                  </div>
                )}
              </div>

              <a
                onClick={() => navigate("/about")}
                className="text-primary-NavyBlue cursor-pointer hover:text-gray-900 py-4 pr-2 flex items-center justify-between"
              >
                About
                <HiMiniArrowUpRight style={{ fontSize: "24px" }} />
              </a>
              <a className="text-primary-NavyBlue cursor-pointer hover:text-gray-900 py-4 pr-2 flex items-center justify-between">
                Blogs
                <HiMiniArrowUpRight style={{ fontSize: "24px" }} />
              </a>
            </div>

            {/* Fixed button at bottom */}
            <div className="sticky bottom-6">
              <CustomButton
                label={
                  <div className="flex justify-center items-center gap-2">
                    <RiGraduationCapLine />
                    Apply as Instructor/Mentor
                  </div>
                }
                background="#113025"
                labelClassName="text-base font-sans"
                onClick={() => alert("Button Clicked!")}
                className="w-full text-white h-12 rounded-md border border-r-8"
                borderWidth="1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
