import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Courses", href: "/course" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#243665] text-white font-[Poppins]">
      <div className="container mx-auto px-4 md:px-8 pt-10 pb-6 md:pt-16 md:pb-10">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug max-w-3xl">
            Get in Touch with Us for <br className="hidden sm:block" /> Your
            Path to Success
          </h2>

          {/* Navigasi */}
          <nav>
            {/* Dektop */}
            <ul className="hidden md:flex flex-wrap gap-x-10 gap-y-4 text-base md:text-lg">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#CEAF80] transition-colors duration-300"
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
                    className="hover:text-[#CEAF80] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-t-2 border-[#CEAF80] mb-6 md:mb-10" />

        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">
          {/* Blok Logo (Existing) */}
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

          {/* Blok Kontak Baru */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 text-sm md:text-base w-full md:w-auto justify-between md:justify-end">
            
            {/* Alamat Kami (LINK SUDAH DIGANTI) */}
            <div className="max-w-xs">
              <h3 className="font-bold text-lg mb-3 text-[#CEAF80]">
                Our Address
              </h3>
              <a
                href="https://maps.app.goo.gl/ZM224fNdMW7Lqhbn7" // <-- LINK SUDAH DIGANTI
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#CEAF80] transition-colors group"
              >
                <FaMapMarkerAlt className="text-[#CEAF80] text-xl mt-1 flex-shrink-0 group-hover:scale-110" />
                <p className="opacity-90 leading-relaxed group-hover:opacity-100">
                  Jl. Surya Timur II X No. 16, Kedoya Utara, Kebon Jeruk,
                  Jakarta Barat, DKI Jakarta 1152
                  <br />
                </p>
              </a>
            </div>

            {/* Hubungi Kami */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#CEAF80]">
                Call Us
              </h3>
              <div className="flex flex-col gap-3">
                
                {/* Telepon (WA) */}
                <a
                  href="https://wa.me/+6285283464956" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#CEAF80] transition-colors group"
                >
                  <FaWhatsapp className="text-[#CEAF80] text-xl group-hover:scale-110" />
                  <span className="opacity-90 group-hover:opacity-100">
                    +62 852 8346 4956 
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:mail.mathetes@gmail.com" 
                  className="flex items-center gap-3 hover:text-[#CEAF80] transition-colors group"
                >
                  <FaEnvelope className="text-[#CEAF80] text-xl group-hover:scale-110" />
                  <span className="opacity-90 group-hover:opacity-100">
                    mail.mathetes@gmail.com
                  </span>
                </a>

                {/* Instagram (dari kode Anda sebelumnya) */}
                <a
                  href="https://www.instagram.com/mathetes_school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#CEAF80] transition-colors group"
                >
                  <AiFillInstagram className="text-[#CEAF80] text-xl group-hover:scale-110" />
                  <span className="opacity-90 group-hover:opacity-100">
                    @mathetes_school
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;