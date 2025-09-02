import { useState } from "react";
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20">
      <div className="container mx-auto py-3 px-6 md:px-20 md:flex">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img
              className="w-auto h-6 sm:h-7"
              src={logo}
              alt="Logo"
            />
          </a>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-200 dark:text-gray-200 focus:outline-none"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between bg-primary
          ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full md:opacity-100"}`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <a
              href="#"
              className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              Home
            </a>
            <a
              href="#"
              className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2 md:flex items-center justify-center gap-2"
            >
              <span className="flex items-center gap-2">
                Products
              <img className="w-5 h-5" src={arrow} alt="" />
              </span>
            </a>
            <a
              href="#"
              className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2 md:flex items-center justify-center gap-2"
            >
              <span className="flex items-center gap-2">
                Resources
              <img className="w-5 h-5" src={arrow} alt="" />
              </span>
            </a>
            <a
              href="#"
              className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg dark:text-gray-200 md:mx-2"
            >
              Pricing
            </a>
          </div>

          <div className="flex gap-5">
            <button className="text-white cursor-pointer">Log in</button>
            <button className="text-white bg-secondary py-2 px-4 rounded-lg cursor-pointer">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
