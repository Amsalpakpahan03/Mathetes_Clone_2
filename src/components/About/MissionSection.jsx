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

const MissionSection = ({ missions }) => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12">
          MISSION
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {missions.map((mission, index) => (
            <div
              key={mission.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 w-full sm:w-64 md:w-60 lg:w-64 p-8 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 text-blue-900 font-bold text-2xl rounded-full">
                {index + 1}
              </div>
              <p className="text-gray-800 font-medium text-base leading-relaxed">
                {mission.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
