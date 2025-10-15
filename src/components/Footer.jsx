import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const mainNavLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaXTwitter />, href: "#", label: "X (Twitter)" },
    { icon: <AiFillInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-[#243665] text-white font-[Poppins]">
      <div className="container mx-auto px-4 md:px-8 pt-10 pb-6 md:pt-16 md:pb-10">
        {/* Bagian Atas */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug max-w-3xl">
            Get in Touch with Us for <br className="hidden sm:block" /> Your Path to Success
          </h2>

          {/* Navigasi */}
          <nav>
            {/* Desktop */}
            <ul className="hidden md:flex flex-wrap gap-x-10 gap-y-4 text-base md:text-lg">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-red-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile */}
            <div className="md:hidden flex justify-start">
              <button onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
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
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Dropdown Mobile */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-3"
          >
            <ul className="flex flex-col items-start space-y-3 text-base">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="hover:text-red-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex justify-center md:justify-end mb-6 md:mb-8">
          <div className="flex items-center space-x-4 md:space-x-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-orange-500 text-xl md:text-2xl hover:text-orange-400 hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-t-2 border-orange-500 mb-6 md:mb-10" />

        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
          {/* Logo kiri bawah */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Mathetes Christian School Logo"
              className="h-12 w-12 md:h-16 md:w-16 mr-3 md:mr-4"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl md:text-3xl font-extrabold tracking-wide uppercase">
                MATHETES
              </span>
              <span className="text-[0.7rem] md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-gray-300 uppercase">
                CHRISTIAN SCHOOL
              </span>
            </div>
          </div>

          {/* Copyright kanan bawah */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
