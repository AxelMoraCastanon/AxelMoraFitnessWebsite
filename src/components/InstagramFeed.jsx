import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Helper function to check if a post's timestamp is within the last month
const isWithinLastMonth = (timestamp) => {
  const postDate = new Date(timestamp);
  const oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30); // Last 30 days
  return postDate >= oneMonthAgo;
};

// Helper function to format today's date
const getCurrentDate = () => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString(undefined, options);
};

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken = 'IGQWRPSlVSR0tiNEJ1eVBFLWg0bFlnWVE0VEVmNWczZAktjT2dldTRGVEgzOXFRZAk1CZAS1NNWN1MHotNUpjZAWpIWXFsdEU3ZA0FfRll6MjltMXpYckRISnc2aWtZAQmd1aWxiaDZA3blkyT3JvWVJadHA5YWtSMGFXWjgZD'; // Replace with your actual access token

    const fetchInstagramPhotos = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,caption,timestamp&access_token=${accessToken}`
        );
        const data = await response.json();

        // Filter posts from the last 30 days
        const recentPosts = data.data.filter((post) =>
          isWithinLastMonth(post.timestamp)
        );

        setPosts(recentPosts);
      } catch (error) {
        console.error('Error fetching Instagram data', error);
      }
    };

    fetchInstagramPhotos();
  }, []);

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
        Instagram Feed (Last 30 Days) up until <span className="text-blue-300">{getCurrentDate()}</span>
      </motion.h1>

      {/* Grid Layout for Instagram Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-32">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className="flex justify-center"
          >
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-2xl object-cover w-full max-w-sm h-64"
                src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                alt={post.caption || 'Instagram Post'}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
