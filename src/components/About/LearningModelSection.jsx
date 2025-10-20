import React from "react";

const learningData = [
  { id: 1, title: "SPIRITUALLY ALIVE", color: "bg-teal-500", textColor: "text-teal-500" },
  { id: 2, title: "SOCIALLY ADEPT", color: "bg-yellow-400", textColor: "text-yellow-400" },
  { id: 3, title: "INTELLECTUALLY ALERT", color: "bg-orange-500", textColor: "text-orange-500" },
  { id: 4, title: "LIFE SKILL", color: "bg-red-500", textColor: "text-red-500" },
  { id: 5, title: "PHYSICALLY DISCIPLINED", color: "bg-purple-600", textColor: "text-purple-600" },
];

const descriptionData = {
  left: [
    { id: 5, title: "PHYSICALLY DISCIPLINED", desc: "Physical Education and Healthy Lifestyle." },
    { id: 4, title: "LIFE SKILL", desc: "Talent Exploring and Entrepreneurship." },
    { id: 2, title: "SOCIALLY ADEPT", desc: "Communication SAM, Leadership, and Evangelistic Capabilities." },
  ],
  right: [
    { id: 1, title: "SPIRITUALLY ALIVE", desc: "Biblical Knowledge, Christ-like Character, and Evangelistic Capabilities." },
    { id: 3, title: "INTELLECTUALLY ALERT", desc: "Creativity, Critical Thinking, and Information Literacy." },
  ],
};

const LearningModelSection = () => {
  const getColor = (id) => learningData.find(item => item.id === id)?.textColor || "text-gray-900";

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Judul Responsif */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 md:mb-16">
          LEARNING MODEL
        </h2>

        {/* --- VERSI MOBILE --- */}
        {/* Ditampilkan di layar kecil, disembunyikan di 'md' ke atas */}
        <div className="relative w-[320px] h-[320px] mx-auto block md:hidden">
          {/* Lingkaran tengah (Mobile) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-yellow-400 rounded-full w-28 h-28 flex flex-col justify-center items-center text-white shadow-lg z-10">
              <p className="text-xs font-semibold">LED BY</p>
              <p className="text-base font-bold">HOLY SPIRIT</p>
            </div>
          </div>

          {/* Item melingkar (Mobile) */}
          {learningData.map((item, index) => {
            // Kalkulasi untuk kontainer 320px dan item 96px (w-24)
            const radius = 127; // Skala dari 190 (190 * (320/480))
            const angle = (index / learningData.length) * 2 * Math.PI - (Math.PI / 2);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            // Offset: (Container / 2) - (Item / 2) = (320/2) - (96/2) = 160 - 48 = 112
            const offset = 112; 

            return (
              <div
                key={item.id}
                className={`absolute ${item.color} text-white rounded-full w-24 h-24 flex flex-col justify-center items-center shadow-lg`}
                style={{
                  transform: `translate(${x + offset}px, ${y + offset}px)`,
                }}
              >
                <span className="text-[10px] font-bold text-center leading-tight px-2">
                  {item.title}
                </span>
                <span className="text-xl font-extrabold mt-1">
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

        {/* --- VERSI DESKTOP --- */}
        {/* Disembunyikan di layar kecil, ditampilkan di 'md' ke atas */}
        <div className="relative w-[480px] h-[480px] mx-auto hidden md:block">
          {/* Lingkaran tengah (Desktop) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-yellow-400 rounded-full w-40 h-40 flex flex-col justify-center items-center text-white shadow-lg z-10">
              <p className="text-sm font-semibold">LED BY</p>
              <p className="text-lg font-bold">HOLY SPIRIT</p>
            </div>
          </div>

          {/* Item melingkar (Desktop) */}
          {learningData.map((item, index) => {
            // Kalkulasi original untuk 480px
            const radius = 190;
            const angle = (index / learningData.length) * 2 * Math.PI - (Math.PI / 2);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            // Offset: (480 / 2) - (144 / 2) = 240 - 72 = 168
            const offset = 168; 

            return (
              <div
                key={item.id}
                className={`absolute ${item.color} text-white rounded-full w-36 h-36 flex flex-col justify-center items-center shadow-lg`}
                style={{
                  transform: `translate(${x + offset}px, ${y + offset}px)`,
                }}
              >
                <span className="text-sm font-bold text-center leading-tight px-3">
                  {item.title}
                </span>
                <span className="text-2xl font-extrabold mt-2">
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

        {/* Keterangan (Responsif) */}
        {/* grid-cols-1 di mobile, md:grid-cols-2 di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-20 max-w-4xl mx-auto text-left">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            {descriptionData.left.map((item) => (
              <div key={item.id}>
                <h3 className={`${getColor(item.id)} font-bold mb-1`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-6">
            {descriptionData.right.map((item) => (
              <div key={item.id}>
                <h3 className={`${getColor(item.id)} font-bold mb-1`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModelSection;