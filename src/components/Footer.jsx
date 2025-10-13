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

  // Mengembalikan navigasi sekunder untuk tata letak yang lebih baik
  const secondaryNavLinks = [
    { name: "Method Development", href: "#" },
    { name: "Quality Assurance", href: "#" },
    { name: "Human Resources", href: "#" },
    { name: "Policy Compliance", href: "#" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaXTwitter />, href: "#", label: "X (Twitter)" },
    { icon: <AiFillInstagram />, href: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-[#202a44] text-white pt-20 pb-8 font-[Poppins]">
      <div className="container mx-auto px-6">
        {/* Bagian Atas: Judul dan Navigasi Utama (Tidak berubah) */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Get in Touch with Us for <br /> Your Path to Success
          </h2>
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-lg">
              {mainNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ========================================================== */}
        {/* PERUBAHAN DI SINI: Navigasi Sekunder dan Ikon Sosial Media */}
        {/* ========================================================== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Navigasi Sekunder */}
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              {secondaryNavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Ikon Sosial Media */}
          <div className="flex items-center space-x-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-orange-500 text-2xl hover:text-orange-400 hover:scale-110 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-t-2 border-orange-500 mb-8" />

        {/* ========================================================== */}
        {/* PERUBAHAN DI SINI: Logo dan Copyright */}
        {/* ========================================================== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo dan Nama Sekolah */}
          <div className="flex items-center">
            <img
              src="public\images\logo.png" // Pastikan path logo benar
              alt="Mathetes Christian School Logo"
              className="h-16 w-16 mr-4"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-3xl font-extrabold tracking-wide text-white uppercase">
                MATHETES
              </span>
              <span className="text-sm tracking-[0.3em] text-gray-300 uppercase">
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