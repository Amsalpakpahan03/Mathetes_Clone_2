// src/components/About/AboutVision.jsx
import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../ui/OptimizedImage.jsx";

const AboutVision = ({ data }) => {
  const { title, description, image } = data;

  const formattedDescription = description
    .replace(
      /Spirit-led empowered disciples/gi,
      "<strong class='text-black font-semibold'>Spirit-led empowered disciples</strong>"
    )
    .replace(
      /whole-person education/gi,
      "<strong class='text-black font-semibold'>whole-person education</strong>"
    )
    .replace(
      /impact the nations/gi,
      "<strong class='text-black font-semibold'>impact the nations</strong>"
    );

  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Bagian Kiri (Teks) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Garis merah BARU */}
          <div className="h-1 w-20 mb-4 rounded-full" style={{ backgroundColor: "#C1272D" }}></div>

          {/* Judul biru */}
          <h2
            className="text-5xl font-extrabold tracking-wide uppercase mb-2"
            style={{ color: "#004391", letterSpacing: "1px" }}
          >
            {title}
          </h2>

          {/* Paragraf deskripsi dengan 'max-w-lg' (sudah benar) */}
          <p
            className="text-gray-600 leading-relaxed max-w-lg"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></p>
        </motion.div>

        {/* Bagian Kanan (Gambar) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
        >
          <OptimizedImage
            slug={image.slug}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutVision;