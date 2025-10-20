import { React, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const InteractiveSlider = ({ data }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = data.length - 1;
    } else if (newPage >= data.length) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  useEffect(() => {
    if (!data || data.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => clearInterval(timer);
  }, [page, data, paginate]);

  if (!data || data.length === 0) return null;

  const currentData = data[page];
  const Icon = currentData.icon;

  return (
    <section className="bg-white py-8 lg:py-5">
      <div className="container mx-auto px-7 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-lg h-80 sm:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  className="w-full h-full absolute"
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <OptimizedImage
                    slug={currentData.image.slug}
                    alt={currentData.image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                onClick={() => paginate(-1)}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full cursor-pointer z-10"
              >
                <FaChevronLeft size={24} />
              </div>
              <div
                onClick={() => paginate(1)}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full cursor-pointer z-10"
              >
                <FaChevronRight size={24} />
              </div>
            </div>
          </div>

          <div className="relative text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-1 bg-red-600 mb-1"></div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  {currentData.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                  {currentData.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-50 md:bottom-[-90px] left-25 md:left-75 ">
              <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={page}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Icon && <Icon size={48} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSlider;
