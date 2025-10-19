import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const PageHeaderCourse = ({ data }) => {
  if (!data) return null;

  const { title, image } = data;

  return (
    <header className="relative w-full h-[20vh]  md:h-[40vh] text-white">
      {/* Lapisan 1: Gambar Latar Belakang yang Dioptimalkan */}
      <OptimizedImage
        slug={image.slug}
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Lapisan 2: Overlay Gelap untuk Keterbacaan Teks */}
      <div className="absolute inset-0 bg-[#243665]/50 z-10"></div>

      {/* Lapisan 3: Konten Teks di Tengah */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold tracking-wide"
        >
          {title}
        </motion.h1>
      </div>
    </header>
  );
};

export default PageHeaderCourse;
