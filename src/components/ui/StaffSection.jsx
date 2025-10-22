import React from "react";
import OptimizedImage from "./OptimizedImage";
import { staffData } from "../../data/staffData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StaffSection = () => {
  return (
    <section className="bg-blue-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center">
          Our Staff
        </h2>

        {/* SLIDER UTAMA */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {staffData.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 duration-300">
                {/* Gambar Staff */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4">
                  <OptimizedImage
                    slug={person.imageSlug.replace(/\.(jpg|png|webp)$/i, "")}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full shadow-md"
                  />
                </div>

                {/* Informasi Staff */}
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  {person.name}
                </h3>
                <p className="text-blue-700 font-medium text-center">
                  {person.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StaffSection;
