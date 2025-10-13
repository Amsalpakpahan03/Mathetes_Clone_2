import React from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl leading-tight text-[#202a44]">
            Get in Touch on Us for <br /> Your Path to Success
          </h2>

          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-lg">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-red-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bagian Tengah */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Ikon Sosial Media */}
          <div className="flex items-center space-x-6 md:ml-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-[#202a44] text-2xl hover:text-red-600 hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-t-4 border-[#202a44] mb-8" />

        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
          {/* Logo dan Nama Sekolah */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Mathetes Christian School Logo"
              className="h-16 w-16 mr-4"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#4b4b4b] uppercase">
                MATHETES
              </span>
              <span className="text-sm tracking-[0.3em] text-[#202a44] uppercase">
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
