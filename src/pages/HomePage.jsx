import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/Hero/HeroSlider";
// import { heroData } from "../data/HomPageData";
// import { AboutData } from "../data/AboutUsData";
import FeaturesSection from "../components/Card/FeaturesSection";
import AboutHome from "../components/ui/AboutHome";
import { HeaderHome } from "../data/Data";
import {
  aboutSectionData,
  SchoolProgramData,
  featuresData,
  heroDataCourse,
  heroDataHome,
} from "../data/Data";

const HomePage = () => {
  return (
    <div>
      <HeroSlider data={heroDataHome} />
      <div className="relative top-[-80px] z-100 items-center flex justify-center">
        <FeaturesSection data={featuresData} />
      </div>
      <AboutHome data={aboutSectionData} />
      <div className="p-8 lg:m-18 m-1 ">
        <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight flex justify-center p-4 ">
          School Program
        </h1>
        <FeaturesSection data={SchoolProgramData} />
      </div>
    </div>
  );
};

export default HomePage;
