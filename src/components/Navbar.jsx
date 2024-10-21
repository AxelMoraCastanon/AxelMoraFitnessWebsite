import React, { useState } from 'react';

/*
import logo from '../assets/AxelMoraLogo.png';
*/

import { FaInstagram, FaLaptopCode } from 'react-icons/fa';
import { MdEmail, MdQrCode } from 'react-icons/md'; // Import Icons
import { CONTACT } from '../constants'; // Import CONTACT
import { QRCodeCanvas } from 'qrcode.react'; // Import QR Code Library
import { motion } from "framer-motion";

const Navbar = () => {
  const [showQR, setShowQR] = useState(false); // Manage QR modal visibility

  const toggleQRModal = () => setShowQR(!showQR);

  // Navbar animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  // Icon hover animation
  const iconHover = {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 300 },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="mb-20 flex items-center justify-between py-6 px-6 lg:px-10 border-neutral-900 text-white shadow-md"
      >
        {/* Logo Section */}
        {/*
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-28 h-auto" src={logo} alt="logo" />
        </div>
        */}

        {/* Icons Section */}
        <div className="flex items-center gap-6 text-2xl ml-auto">
          {/* Laptop (Portfolio) Icon */}
          <motion.a
            href={CONTACT.softwareEngineeringPortfolioWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            whileHover={iconHover}
          >
            <FaLaptopCode />
          </motion.a>

          {/* Email Icon */}
          <motion.a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-red-500"
            whileHover={iconHover}
          >
            <MdEmail />
          </motion.a>

          {/* Instagram Icon */}
          <motion.a
            href="https://www.instagram.com/axelsmora16/profilecard/?igsh=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
            whileHover={iconHover}
          >
            <FaInstagram />
          </motion.a>

          {/* Share Button */}
          <motion.button
            onClick={toggleQRModal}
            className="hover:text-green-500"
            whileHover={iconHover}
          >
            <MdQrCode />
          </motion.button>
        </div>
      </motion.nav>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Scan to Share My Website</h3>
            <QRCodeCanvas value={window.location.href} size={200} />
            <button
              onClick={toggleQRModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
