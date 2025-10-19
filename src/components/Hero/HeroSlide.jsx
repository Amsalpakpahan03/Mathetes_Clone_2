import React from "react";
import { motion } from "framer-motion";
// import FeaturesSection from "../Card/FeaturesSection.jsx";
import OptimizedImage from "../ui/OptimizedImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSlide = ({ data }) => {
  const { id, subtitle, title, description, buttonText, image } = data;

  return (
    <div>
      <section className="absolute inset-0 w-full h-full bg-cover bg-center text-white">
        <OptimizedImage
          slug={image.slug}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover" // Style agar berfungsi seperti background
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            key={id} // Kunci agar animasi berjalan setiap slide berganti
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.p
              variants={itemVariants}
              className="mb-2 text-lg font-light tracking-wider"
            >
              {subtitle}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold mb-4 max-w-3xl leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-light mb-8 max-w-xl"
            >
              {description}
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="bg-blue-800 hover:bg-blue-700 font-semibold py-3 px-8 rounded-md flex items-center transition-colors duration-300"
            >
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSlide;
