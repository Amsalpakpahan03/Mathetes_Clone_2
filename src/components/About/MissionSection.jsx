// src/components/About/MissionSection.jsx

import React from "react";
import MissionCard from "./MissionCard";

const MissionSection = ({ missions }) => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
          MISSION
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission) => (
            <MissionCard key={mission.id} data={mission} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;