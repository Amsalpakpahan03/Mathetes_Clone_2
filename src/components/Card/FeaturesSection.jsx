import React from "react";
// import { featuresData } from "../../data/Data.js";
import SingleFeatureCard from "./SingleFeatureCard.jsx";

const FeaturesSection = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <section className="">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {data.map((feature) => (
            <SingleFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
