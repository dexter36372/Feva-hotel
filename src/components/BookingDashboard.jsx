import React from 'react';
import { motion } from 'framer-motion';

const BookingDashboard = () => {
  return (
    <div
      className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://freeimage.host/i/F6GMm8u')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-xl bg-black/60 border border-white/20 shadow-2xl p-8 rounded-2xl w-[95%] max-w-4xl"
      >
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-transform"
          >
            <p className="font-extrabold text-lg">CHECK-IN</p>
            <p className="mt-2 text-sm">01 AUG 2025<br/>19:00</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white text-black p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition-transform"
          >
            <p className="font-extrabold text-lg">CHECK-OUT</p>
            <p className="mt-2 text-sm">01 AUG 2025<br/>20:00</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 bg-white text-black p-4 rounded-xl shadow-inner border-2 border-black text-center text-2xl font-bold tracking-wide"
        >
          FAREHAM PARK HOTEL & COUNTRY CLUB
        </motion.div>

        <div className="mt-6 text-white text-lg font-semibold space-y-3">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-white/20 p-3 rounded-lg shadow"
          >
            ROOM TYPE: <b>STANDARD ROOM</b>
          </motion.p>

          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="bg-white/20 p-3 rounded-lg shadow"
          >
            ROOM NUMBER: <b>NOT ALLOCATED</b>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://forms.gle/oTFCo7TRf4gJjYge7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 text-lg"
          >
            DID YOU ENJOY YOUR STAY?<br />
            <span className="underline">LET US KNOW</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingDashboard;

