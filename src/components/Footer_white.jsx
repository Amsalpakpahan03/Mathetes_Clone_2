import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainNavLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Service", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaXTwitter />, href: "#", label: "X (Twitter)" },
    { icon: <AiFillInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-white text-[#202a44] pt-20 pb-8 font-[Poppins]">
      <div className="container mx-auto px-6">
        {/* Bagian Atas */}
        <div className="mb-12">
          {/* PERBAIKAN: Ukuran font dan teks judul disesuaikan */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 max-w-3xl leading-tight text-[#202a44]">
            Get in Touch with Us for <br /> Your Path to Success
          </h2>

          <nav>
            {/* Navigasi untuk Desktop */}
            <ul className="hidden md:flex flex-wrap gap-x-8 gap-y-4 text-lg">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-red-600 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Tombol Hamburger untuk Mobile */}
            <div className="md:hidden flex justify-start">
              <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-[#202a44]">
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Menu Dropdown untuk Mobile */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-4"
          >
            <ul className="flex flex-col items-start space-y-4">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={toggleMenu} className="text-lg hover:text-red-600">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} aria-label={social.label} className="text-[#202a44] text-2xl hover:text-red-600 hover:scale-110 transition-all duration-300">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-t-4 border-[#202a44] mb-8" />

        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Mathetes Christian School Logo" className="h-14 w-14 md:h-16 md:w-16 mr-4" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#4b4b4b] uppercase">
                MATHETES
              </span>
              <span className="text-sm tracking-widest md:tracking-[0.3em] text-[#202a44] uppercase">
                CHRISTIAN SCHOOL
              </span>
            </div>
          </div>
        </div>
      </div> 
    </footer> 
  );
};

export default Footer;