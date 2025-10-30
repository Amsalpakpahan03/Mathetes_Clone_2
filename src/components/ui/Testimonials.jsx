// /components/Testimonials.jsx

import React from "react";
// 1. IMPORT HOOK useInView
import { useInView } from "react-intersection-observer";

import { testimonialsData } from "../../data/Data";
import OptimizedImage from "./OptimizedImage";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <svg
            key={index}
            className={`h-5 w-5 ${
              starNumber <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.592 2.885c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
              clipRule="evenodd"
            />
          </svg>
        );
      })}
    </div>
  );
};

const TestimonialCard = ({ name, designation, testimonial, rating, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasikan sekali saja saat muncul
    threshold: 0.1, // Tampilkan saat 10% elemen terlihat
  });

  return (
    <div
      ref={ref}
      className={`relative mt-8 transition-all duration-700 ease-out 
                  ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
    >
      <div className="rounded-lg bg-slate-200 p-4 h-full flex flex-col  shadow-lg">
        <div className="rounded-lg bg-blue-800 p-4 text-white shadow-md">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-blue-200">{designation}</p>
        </div>

        <div className="pt-6 flex-grow">
          <StarRating rating={rating} />
          <p className="mt-4 text-sm text-gray-700">{testimonial}</p>
        </div>
      </div>

      <div className="absolute -top-8 right-4 z-10">
        <OptimizedImage
          slug={image.slug}
          alt={image.alt}
          className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center flex-col mb-12 ">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-700">
            Hear From Our Parents and Students
          </h2>
          <div className="w-16 h-1 bg-red-600 mb-1"></div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              testimonial={item.testimonial}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
