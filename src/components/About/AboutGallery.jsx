// src/components/About/AboutGallery.jsx

import React from "react";
import OptimizedImage from "../UI/OptimizedImage.jsx";

const AboutGallery = ({ images }) => {
  return (
    <section>
      {/* PERBAIKAN: Mengganti 'container' dengan 'max-w-5xl' untuk membuatnya lebih kecil */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <OptimizedImage
                slug={image.slug}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;