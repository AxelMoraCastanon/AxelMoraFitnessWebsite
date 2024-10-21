import React from 'react';
import { motion } from 'framer-motion';

// Helper function to format today's date
const getCurrentDate = () => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString(undefined, options);
};

const InstagramFeed = () => {
  // Variants for motion animation
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-12">
      {/* Title with Parallax Effect */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-8 text-center text-3xl sm:text-4xl"
      >
        Instagram Feed up until <span className="text-blue-300">{getCurrentDate()}</span>
      </motion.h1>

      {/* Resizable LightWidget Instagram Feed */}
      <div className="flex justify-center">
        <iframe
          src="//lightwidget.com/widgets/3d1923049bf25095bad126feeec47ecf.html"
          scrolling="no"
          allowTransparency="true"
          className="lightwidget-widget"
          style={{
            width: '100%',
            height: '600px', // Adjust this height as needed
            maxWidth: '1200px', // Limit maximum width on larger screens
            border: 0,
            overflow: 'hidden'
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramFeed;
