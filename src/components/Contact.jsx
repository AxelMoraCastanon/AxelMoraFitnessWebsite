import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { QRCodeCanvas } from 'qrcode.react'; // Import QR Code library

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const hoverEffect = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

const underlineEffect = {
  hover: {
    width: "100%",
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Title with Parallax Effect */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-10 text-center text-4xl"
      >
        Axel's Contact Information
      </motion.h1>

      <motion.div
        className="text-center tracking-tighter space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Email Section */}
        {CONTACT.email && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">Email: </span>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="border-b relative overflow-hidden"
              variants={hoverEffect}
              whileHover="hover"
            >
              {CONTACT.email}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
                initial={{ width: 0 }}
                animate={underlineEffect}
              />
            </motion.a>
          </motion.div>
        )}

        
        {/* Instagram Section with QR Code */}
        {CONTACT.instagram && (
          <motion.div className="flex flex-col items-center" variants={itemVariants}>
            <span className="font-semibold text-blue-300">Instagram: </span>
            <motion.a
              href={CONTACT.instagram}
              className="border-b relative overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
              variants={hoverEffect}
              whileHover="hover"
            >
              {CONTACT.instagram}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-300"
                initial={{ width: 0 }}
                animate={underlineEffect}
              />
            </motion.a>
          </motion.div>
        )}

        {/* Display Instagram QR Code */}
        <motion.div className="flex flex-col items-center mt-10" variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">Scan to Follow Me on Instagram</h2>
          <QRCodeCanvas value={CONTACT.instagram} size={200} /> {/* Display QR Code */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
