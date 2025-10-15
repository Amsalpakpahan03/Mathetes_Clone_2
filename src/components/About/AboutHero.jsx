// src/components/About/AboutHero.jsx

import React from "react";
import OptimizedImage from "../UI/OptimizedImage.jsx";

const AboutHero = ({ data }) => {
  const { title, description, buttonText, mainImage } = data;

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Hanya satu gambar utama */}
        <div className="relative shadow-xl rounded-lg overflow-hidden">
          <OptimizedImage
            slug={mainImage.slug}
            alt={mainImage.alt}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-center font-semibold">
            {mainImage.caption}
          </div>
        </div>

        {/* Kolom Kanan: Teks & Tombol */}
        <div className="flex flex-col items-start justify-center"> {/* Tambah justify-center */}
          {/* PERBAIKAN: Font size, weight, dan warna */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            {title}
          </h2>
          {/* PERBAIKAN: Font size, weight, dan warna */}
          <p className="text-lg md:text-xl font-light text-gray-200 mb-8 max-w-lg leading-relaxed">
            {description}
          </p>
          <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;