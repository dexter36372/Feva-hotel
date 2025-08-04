import React from 'react';
import { motion } from 'framer-motion';

const BookingCard = ({ username }) => {
  const checkInDate = '[DATE]';
  const checkOutDate = '[DATE]';
  const roomType = '[ROOM TYPE]';
  const roomNumber = '[ROOM NUMBER]';

  return (
    <div
      className="w-screen h-screen bg-black text-white flex items-center justify-center px-4"
      style={{ backgroundImage: "url('https://freeimage.host/images/2025/08/04/F6GMm8u.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-black bg-opacity-70 rounded-2xl p-6 md:p-10 w-full max-w-5xl shadow-xl border border-white/20"
      >
        {/* Dates Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white text-black px-5 py-4 rounded-lg text-center shadow hover:scale-105 transform transition-transform"
          >
            <div className="font-extrabold text-sm md:text-lg">CHECK-IN</div>
            <div className="text-xs md:text-sm mt-1">{checkInDate}</div>
          </motion.div>

          <span className="text-white text-3xl">➤</span>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white text-black px-5 py-4 rounded-lg text-center shadow hover:scale-105 transform transition-transform"
          >
            <div className="font-extrabold text-sm md:text-lg">CHECK-OUT</div>
            <div className="text-xs md:text-sm mt-1">{checkOutDate}</div>
          </motion.div>
        </div>

        {/* Hotel Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white text-black text-center py-3 px-6 rounded-lg shadow-lg font-black text-lg md:text-2xl mb-4"
        >
          FAREHAM PARK HOTEL & COUNTRY CLUB
        </motion.div>

        {/* Room Info */}
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-white text-sm md:text-lg font-semibold">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/20 p-3 rounded-lg border border-white/10 shadow"
          >
            ROOM TYPE: {roomType}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/20 p-3 rounded-lg border border-white/10 shadow"
          >
            ROOM NUMBER: {roomNumber}
          </motion.div>
        </div>

        {/* Feedback Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <a
            href="https://forms.gle/oTFCo7TRf4gJjYge7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 text-sm md:text-lg"
          >
            DID YOU ENJOY YOUR STAY?<br />
            <span className="underline">LET US KNOW</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingCard;
