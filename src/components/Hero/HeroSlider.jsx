import React, { useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";

const HeroSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [data]); // Dependensi cukup 'data' saja, lebih aman

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <HeroSlide data={data[currentIndex]} />
    </header>
  );
};

export default HeroSlider;
