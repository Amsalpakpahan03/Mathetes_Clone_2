import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/aboutus" },
  { name: "COURSES", href: "/course" },
];

const Navbar = () => {
  const [isBuka, setIsBuka] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsBuka(!isBuka);
  };

  const handleMobileNav = (path) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <nav className="z-999 w-full bg-slate-700 text-white md:fixed top-0 left-0 shadow-ml">
      <div className="  container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/public/images/logo.png"
            alt="Mathetes Christian School Logo"
            className="h-16 w-16 mr-4"
          />
          <div>
            <span className="font-bold text-xl tracking-wider block">
              MATHETES
            </span>
            <span className="text-xs uppercase">Christian School</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              className="relative font-semibold hover:text-red-700 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}

          <motion.button
            onClick={() => navigate("/contact")}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
            className="bg-slate-900 hover:bg-slate-800 text-white hover:text-red-700 font-bold py-3 px-6 rounded-md flex items-center transition-colors duration-300"
          >
            <span>CONTACT US</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isBuka ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/*  Dropdown Mobile */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isBuka ? 1 : 0, height: isBuka ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-slate-800"
      >
        <div className="px-6 py-5 space-y-5">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="text-white font-medium py-2 text-center text-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-600">
            <button
              onClick={() => handleMobileNav("/contact")}
              // onClick={toggleMenu}
              className="mb-5 block w-full px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-700 font-bold"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
