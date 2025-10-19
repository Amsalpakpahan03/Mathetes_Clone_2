import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CurriculumSection = ({ data }) => {
  if (!data) return null;

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-100 py-16 lg:py-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-1 bg-red-600 mb-4 mx-auto"></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{data.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.images.map((image) => (
            <div
              key={image.slug}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <OptimizedImage
                slug={image.slug}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CurriculumSection;
