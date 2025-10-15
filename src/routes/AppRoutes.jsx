import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import React from "react";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
