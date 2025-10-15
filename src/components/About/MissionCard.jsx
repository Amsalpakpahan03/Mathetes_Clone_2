// src/components/About/MissionCard.jsx

import React from "react";
import InnovationIcon from "../Icons/InnovationIcon";

const MissionCard = ({ data }) => {
  const { title, description } = data;

  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:border-blue-500">
      <div className="mx-auto w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-blue-100">
        <InnovationIcon className="w-10 h-10 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default MissionCard;
