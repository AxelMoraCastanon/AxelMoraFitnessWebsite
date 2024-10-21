import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/AxelMoraProfilePicture.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-16">
      <div className="flex flex-wrap">
        {/* Profile Picture Section */}
        <div className="w-full lg:w-1/2 lg:p-8 order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="flex justify-center">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              src={profilePicture}
              alt="Axel Mora"
              className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Content Section */}
        <motion.div
          className="w-full lg:w-1/2 px-4 lg:px-8 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-thin tracking-tight sm:text-6xl 
                         lg:mt-16 lg:text-8xl"
            >
              Axel Mora
            </motion.h1>

            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-300 via-gray-500 
                         to-blue-700 bg-clip-text text-2xl sm:text-3xl
                         tracking-tight text-transparent"
            >
              Powerlifter & Strongman
            </motion.span>

            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-4 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
