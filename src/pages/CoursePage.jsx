import React from "react";
import HeroSlider from "../components/Hero/HeroSlider";
import AboutHome from "../components/ui/AboutHome";
import PageHeaderCourse from "../components/ui/PageHeaderCourse";

import {
  heroDataCourse,
  courseOurCurriculum,
  curriculumSectionData,
  schoolProgramHeaderData,
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
    </div>
  );
};

export default CoursePage;
