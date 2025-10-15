import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SingleFeatureCard = ({
  icon: Icon,
  title,
  description,
  imageUrl,
  variant = "full",
}) => {
  const isIconOnly = variant === "iconOnly";
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
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col 
             items-center justify-between 
             w-full sm:w-[250px] md:w-[250px] lg:w-[300px]
             h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px]
             transition-all duration-300"
    >
      {/* BAGIAN GAMBAR */}
      {!isIconOnly && imageUrl && (
        <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
          <LazyLoadImage
            alt={title}
            src={imageUrl}
            effect="blur"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </div>
      )}

      {/* BAGIAN KONTEN */}
      <div
        className={`p-3 sm:p-4 md:p-6 flex flex-col flex-grow items-center text-center ${contentAlignment}`}
      >
        {Icon && (
          <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
            <div className="bg-blue-100 p-2 sm:p-3 md:p-4 rounded-full">
              <Icon
                size={20} // base size
                className="text-blue-600 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              />
            </div>
          </div>
        )}

        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-600 mb-1 sm:mb-2">
          {title}
        </h3>

        <div
          className={`w-8 sm:w-10 md:w-12 h-0.5 bg-red-600 mb-2 sm:mb-3 ${dividerAlignment}`}
        ></div>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleFeatureCard;
