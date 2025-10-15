// src/components/About/AboutVision.jsx

import React from "react";
import OptimizedImage from "../UI/OptimizedImage.jsx";

const AboutVision = ({ data }) => {
  const { title, description, image } = data;
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* PERBAIKAN: Tambahkan padding-right 'pr-12' di sini */}
        <div className="pr-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="shadow-lg rounded-lg overflow-hidden h-full">
          <OptimizedImage
            slug={image.slug}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVision;