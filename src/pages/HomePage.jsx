import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/Hero/HeroSlider";
import { heroData } from "../data/HomPageData";
// import { AboutData } from "../data/AboutUsData";
import FeaturesSection from "../components/Card/FeaturesSection";
import AboutHome from "../components/ui/AboutHome";
import { HeaderHome } from "../data/Data";
import { aboutSectionData } from "../data/Data";

const HomePage = () => {
  return (
    <div>
      <HeroSlider data={HeaderHome} />
      <div className="relative top-[-80px] z-100 items-center flex justify-center">
        <FeaturesSection />
      </div>
      <AboutHome data={aboutSectionData} />

      <Footer />
    </div>
  );
};

export default HomePage;
