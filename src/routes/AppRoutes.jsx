import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import CoursePage from "../pages/CoursePage";
import React from "react";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/course" element={<CoursePage />} />
    </Routes>
  );
};

export default AppRoutes;
