import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../ui/OptimizedImage"; // Ganti import ke OptimizedImage

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Terima 'image' sebagai objek, bukan 'imageUrl'
const SingleFeatureCard = ({
  icon: Icon,
  title,
  description,
  image, // <-- Perubahan di sini
  variant = "full",
}) => {
  const isIconOnly = !image; // Logika yang lebih sederhana: jika tidak ada gambar, berarti ini mode ikon
  const contentAlignment = isIconOnly
    ? "items-center text-center"
    : "items-start text-left";
  const dividerAlignment = isIconOnly ? "mx-auto" : "";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between w-full h-full transition-all duration-300"
    >
      {/* BAGIAN GAMBAR (Gunakan OptimizedImage) */}
      {!isIconOnly && image && (
        <div className="w-full h-[180px]">
          <OptimizedImage
            slug={image.slug}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* BAGIAN KONTEN (Sedikit penyesuaian untuk layout yang lebih konsisten) */}
      <div className={`p-6 flex flex-col flex-grow ${contentAlignment}`}>
        {Icon && (
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Icon size={28} className="text-blue-600" />
            </div>
          </div>
        )}

        <h3 className="text-xl font-bold text-red-600 mb-2">{title}</h3>

        <div className={`w-12 h-0.5 bg-red-600 mb-3 ${dividerAlignment}`}></div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default SingleFeatureCard;
