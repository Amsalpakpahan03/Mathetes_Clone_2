import React from "react";
import { featuresData } from "../../data/FeatureCard.js";
import SingleFeatureCard from "./SingleFeatureCard.jsx";

const FeaturesSection = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <SingleFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              imageUrl={feature.imageUrl}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
