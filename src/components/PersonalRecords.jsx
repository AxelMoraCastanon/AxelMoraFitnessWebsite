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
    // Add more movements here as needed
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
        <h2 className="text-xl sm:text-2xl text-blue-300">
          Next PR Week scheduled for the week of November 4, 2024
        </h2>
      </motion.div>

      {/* Title for Personal Records */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-8 text-center text-3xl sm:text-4xl"
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
        <table className="table-auto w-full max-w-2xl text-lg text-center border-collapse">
          <thead>
            <tr className="bg-neutral-900 text-blue-300">
              <th className="px-4 py-2">Movement</th>
              <th className="px-4 py-2">Weight</th>
              <th className="px-4 py-2">Date Achieved</th>
              <th className="px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className="bg-neutral-800 text-white">
                <td className="border px-4 py-2">{record.movement}</td>
                <td className="border px-4 py-2">{record.weight}</td>
                <td className="border px-4 py-2">{record.dateAchieved}</td>
                <td className="border px-4 py-2">{record.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default PersonalRecords;
