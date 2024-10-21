import React from 'react';

// Helper function to format today's date
const getCurrentDate = () => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString(undefined, options);
};

const InstagramFeed = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mb-4">
        Instagram Feed up until <span className="text-blue-300">{getCurrentDate()}</span>
      </h1>

      {/* Instagram Feed with height adjustments for mobile and larger screens */}
      <iframe
        src="https://snapwidget.com/embed/1082144"
        className="instagram-widget"
        scrolling="no"
        allowTransparency="true"
        frameBorder="0"
        title="Instagram Feed"
        style={{
          border: 'none',
          overflow: 'hidden',
          width: '100%',
        }}
      ></iframe>

      {/* Responsive CSS to adjust height based on screen size */}
      <style jsx>{`
        @media (max-width: 768px) {
          .instagram-widget {
            height: 600px;  // Height for mobile screens
          }
        }

        @media (min-width: 769px) {
          .instagram-widget {
            height: 2000px;  // Height for larger screens to display full 3x5 grid
          }
        }
      `}</style>
    </div>
  );
};

export default InstagramFeed;
