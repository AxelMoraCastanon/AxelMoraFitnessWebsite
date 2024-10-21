import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-8 text-center text-3xl sm:text-4xl"
      >
        About<span className="text-blue-300"> Axel</span>
      </motion.h1>

      {/* Text Section with Smooth Transition */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex justify-center mb-8 px-4"
      >
        <p className="max-w-2xl text-center text-lg">{ABOUT_TEXT}</p>
      </motion.div>
    </div>
  );
};

export default About;
