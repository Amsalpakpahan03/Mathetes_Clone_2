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
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {data.map((feature) => (
            <SingleFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              iconImage={feature.iconImage}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
