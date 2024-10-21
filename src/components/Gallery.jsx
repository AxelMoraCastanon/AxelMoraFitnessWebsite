import AxelMoraFarmersWalk from "../assets/AxelMoraFarmersWalk.png";
import AxelMoraLogBar from "../assets/AxelMoraLogBar.png";
import AxelMoraCurlBar from "../assets/AxelMoraCurlBar.png";
import LogBar from "../assets/LogBar.png";
import { motion } from "framer-motion";

const Gallery = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-8 text-center text-3xl sm:text-4xl"
      >
        Workout <span className="text-blue-300">Gallery</span>
      </motion.h1>

      {/* Grid Layout for Side-by-Side Images with Parallax and Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 lg:px-32">
        {/* Left Image: Farmers Walk */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="flex justify-center"
        >
          <img
            className="rounded-2xl object-cover w-full max-w-sm"
            src={AxelMoraFarmersWalk}
            alt="Farmers Walk"
          />
        </motion.div>

        {/* Right Image: Log Bar */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="flex justify-center"
        >
          <img
            className="rounded-2xl object-cover w-full max-w-sm"
            src={AxelMoraLogBar}
            alt="Log Bar"
          />
        </motion.div>
      </div>

      {/* Additional Row of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 lg:px-32 mt-8">
        {/* Left Image: Curl Bar */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="flex justify-center"
        >
          <img
            className="rounded-2xl object-cover w-full max-w-sm"
            src={AxelMoraCurlBar}
            alt="Curl Bar"
          />
        </motion.div>

        {/* Right Image: Log Bar (Generic) */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          className="flex justify-center"
        >
          <img
            className="rounded-2xl object-cover w-full max-w-sm"
            src={LogBar}
            alt="Log Bar"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
