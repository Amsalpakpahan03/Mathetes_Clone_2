// src/pages/About.jsx

import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutVision from "../components/About/AboutVision";
import MissionSection from "../components/About/MissionSection";
import AboutGallery from "../components/About/AboutGallery";
import LearningModelSection from "../components/About/LearningModelSection";

import { successFocusData, visionData } from "../data/AboutData";

import { missionData } from "../data/MissionData";

const AboutPage = () => {
  return (
    <main className="lg:pt-21">
      {" "}
      {/* Padding agar tidak tertutup Navbar */}
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center bg pb-16"
        style={{
          backgroundImage: "url('/images/about-section-image-large.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <AboutHero data={successFocusData} />
        </div>
      </section>
      {/* GALERI JEMBATAN */}
      {/* PERBAIKAN: Tambahkan 'hidden md:block' untuk menyembunyikan di mobile */}
      <div className="relative z-20 -mt-16 hidden md:block">
        <AboutGallery images={successFocusData.galleryImages} />
      </div>
      {/* VISION SECTION - Background Putih */}
      {/* PERBAIKAN: Sesuaikan margin agar tidak ada ruang kosong besar di mobile */}
      <section className="bg-white">
        <div className="relative z-10 md:-mt-16">
          <AboutVision data={visionData} />
        </div>
      </section>
      {/* MISSION SECTION */}
      <section className="bg-gray-100">
        <MissionSection missions={missionData} />
      </section>
      <section className="bg-white">
        <LearningModelSection />
      </section>
    </main>
  );
};

export default AboutPage;
