// src/components/Icons/InnovationIcon.jsx

import React from "react";

const InnovationIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19"></path>
      <path d="M21 5V19"></path>
      <ellipse cx="12" cy="19" rx="9" ry="3"></ellipse>
    </svg>
  );
};

export default InnovationIcon;