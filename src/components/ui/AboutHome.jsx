import React from "react";
import OptimizedImage from "./OptimizedImage";

const AboutHome = ({ data }) => {
  if (!data) {
    return (
      <section className="bg-white py-16 lg:py-24 flex justify-center items-center h-96">
        <p className="text-gray-500">Loading section data...</p>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 lg:py-5 ">
      <div className="container mx-auto px-7 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="w-16 h-1 bg-red-600 mb-1"></div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {data.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-500 text-sm mb-8 max-w-lg">
              {data.descriptions.map((desc, index) => (
                <p key={index} className="leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>

            {/* Link "Learn More" */}
            <a
              href={data.link.href}
              className="text-green-600 font-bold inline-flex items-center group transition duration-300 hover:text-green-700"
            >
              {data.link.text}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>

          {/* Kolom Kanan: Area Gambar dengan Optimasi */}
          <div className="flex justify-center lg:justify-start sm:justify-end ">
            <div className="w-full max-w-lg h-auto sm:h-96 md:h-full lg:h-[400px] bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
              <OptimizedImage
                slug={data.image.slug}
                alt={data.image.alt}
                className="w-auto h-full object-cover" // Style agar gambar mengisi container
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
