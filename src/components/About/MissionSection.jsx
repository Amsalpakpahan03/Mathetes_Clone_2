// // // src/components/About/MissionSection.jsx

// // import React from "react";
// // import MissionCard from "./MissionCard";

// // const MissionSection = ({ missions }) => {
// //   return (
// //     <section className="bg-gray-100 py-20">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
// //           MISSION
// //         </h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {missions.map((mission) => (
// //             <MissionCard key={mission.id} data={mission} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MissionSection;
// import React from "react";

// const MissionSection = ({ missions }) => {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
//           MISSION
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//           {missions.map((mission, index) => (
//             <div
//               key={mission.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm p-8 flex flex-col justify-center items-center text-center"
//             >
//               <img
//                 src="/images/mission-icon.png"
//                 alt="Mission Icon"
//                 className="w-16 h-16 mb-4"
//               />
//               <p className="text-gray-800 font-medium text-base leading-relaxed">
//                 {mission.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionSection;
import React from "react";
import {
  Heart,
  Star,
  Lightbulb,
  Brain,
  Compass,
  Globe,
  Users,
} from "lucide-react";

const missions = [
  {
    text: "Live Transformed in Wisdom and Truth.",
    icon: <Lightbulb size={20} />,
  },
  {
    text: "Walk in Emotional Intelligence and Spirit-filled Living.",
    icon: <Heart size={20} />,
  },
  {
    text: "Lead with Strong Communication and Leadership.",
    icon: <Users size={20} />,
  },
  {
    text: "Think Creatively and Critically to Solve Real Problems.",
    icon: <Brain size={20} />,
  },
  {
    text: "Pursue Passions, Talents, and Unique Strengths.",
    icon: <Star size={20} />,
  },
  {
    text: "Live a Holistic Life of Mind, Body, and Spirit.",
    icon: <Compass size={20} />,
  },
  {
    text: "Impact the World by Sharing the Gospel with Love and Hope.",
    icon: <Globe size={20} />,
  },
];

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center text-[#004391] mb-14 tracking-wide">
        MISSION
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            {/* Kartu Misi */}
            <div className="bg-white rounded-2xl shadow-md p-6 w-64 transition-all hover:-translate-y-2 hover:shadow-xl">
              <p className="text-gray-700 text-sm leading-relaxed">
                {mission.text}
              </p>

              {/* Garis merah */}
              <div
                className="mt-4 h-1.5 rounded-full mx-auto w-20"
                style={{ backgroundColor: "#E8C48C" }}
              ></div>
            </div>

            {/* Lingkaran warna emas */}
            <div
              className="absolute -bottom-5 w-10 h-10 rounded-full flex items-center justify-center font-semibold shadow-md ring-4 ring-white text-white transition-transform transform hover:scale-110"
              style={{
                backgroundColor: "#E8C48C", // warna gold dari contohmu
              }}
            >
              {mission.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
