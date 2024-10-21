import React from 'react';
import { motion } from 'framer-motion';

// Helper function to get today's date in a readable format
const getCurrentDate = () => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString(undefined, options);
};

const PersonalRecords = () => {
  // Define your personal records here with date and location for easy updating
  const records = [
    {
      movement: 'Squat',
      weight: '365 lbs.',
      dateAchieved: 'March 26, 2024',
      location: 'Dogg Yard',
    },
    {
      movement: 'Bench Press',
      weight: '200 lbs.',
      dateAchieved: 'March 22, 2024',
      location: 'Dogg Yard',
    },
    {
      movement: 'Deadlift',
      weight: '330 lbs.',
      dateAchieved: 'March 24, 2024',
      location: 'Dogg Yard',
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-12">
      {/* Announcement for Next PR Week */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-4 text-center"
      >
        <h2 className="text-lg sm:text-xl text-blue-300">
          Next PR Week scheduled for the week of November 4, 2024
        </h2>
      </motion.div>

      {/* Title for Personal Records */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-8 text-center text-2xl sm:text-3xl"
      >
        Current Personal Records as of <span className="text-blue-300">{getCurrentDate()}</span>
      </motion.h1>

      {/* Table Section with Smooth Transition */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center mb-8 px-4"
      >
        <div className="w-full max-w">

          {/* Chalkboard Background */}
          <div className="relative h-full w-full bg-slate-950 p-6 rounded-lg">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

            <table className="relative table-auto w-full text-xs sm:text-base text-center border-collapse">
              <thead>
                <tr className="bg-transparent text-blue-300 font-bold text-lg" style={{ fontFamily: "'Caveat', cursive", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontWeight: 700 }}>
                  <th className="px-1 sm:px-4 py-1 sm:py-2 border-b border-white">Movement</th>
                  <th className="px-1 sm:px-4 py-1 sm:py-2 border-b border-white">Weight</th>
                  <th className="px-1 sm:px-4 py-1 sm:py-2 border-b border-white">Date Achieved</th>
                  <th className="px-1 sm:px-4 py-1 sm:py-2 border-b border-white">Location</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index} className="text-white text-base" style={{ fontFamily: "'Caveat', cursive", textShadow: '1px 1px 3px rgba(255, 255, 255, 0.6)', fontWeight: 700 }}>
                    <td className="border px-1 sm:px-4 py-1 sm:py-2 border-white">{record.movement}</td>
                    <td className="border px-1 sm:px-4 py-1 sm:py-2 border-white">{record.weight}</td>
                    <td className="border px-1 sm:px-4 py-1 sm:py-2 border-white">{record.dateAchieved}</td>
                    <td className="border px-1 sm:px-4 py-1 sm:py-2 border-white">{record.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default PersonalRecords;
