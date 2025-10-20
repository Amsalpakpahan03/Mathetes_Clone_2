import React from "react";
import HeroSlider from "../components/Hero/HeroSlider";
import AboutHome from "../components/ui/AboutHome";
import PageHeaderCourse from "../components/ui/PageHeaderCourse";
import FeaturesSection from "../components/Card/FeaturesSection";
import InteractiveSlider from "../components/ui/InteractiveSlider";

import {
  heroDataCourse,
  courseOurCurriculum,
  curriculumSectionData,
  schoolProgramHeaderData,
  SchoolProgramData,
  extraClassData,
} from "../data/Data";
import CurriculumSection from "../components/ui/CurriculumSection";

const CoursePage = () => {
  return (
    <div>
      <HeroSlider data={heroDataCourse} />
      <div className="p-7 lg:m-15">
        <AboutHome data={courseOurCurriculum} />
      </div>
      <CurriculumSection data={curriculumSectionData} />
      <PageHeaderCourse data={schoolProgramHeaderData} />
      <div className="P-10 m-8 md:m-20">
        <FeaturesSection data={SchoolProgramData} />
      </div>
      <PageHeaderCourse data={schoolProgramHeaderData} />
      <div className="text-center max-w-2xl mx-auto pt-9">
        <div className="w-16 h-1 bg-red-600 mb-4 mx-auto"></div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Extra Class
        </h2>
      </div>
      <InteractiveSlider data={extraClassData} />
    </div>
  );
};

export default CoursePage;
