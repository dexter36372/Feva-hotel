import React from 'react';
import { motion } from 'framer-motion';

export default function BookingCard({ username }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-10">
      <motion.div
        className="w-full max-w-4xl bg-cover bg-center border-[6px] border-white rounded-xl shadow-2xl relative"
        style={{ backgroundImage: "url('https://freeimage.host/images/2025/08/04/F6GMm8u.png')" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dark overlay */}
        <div className="bg-black/50 w-full h-full rounded-xl p-8">
          {/* Header */}
          <motion.div
            className="mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex gap-6 mb-6">
              <div className="bg-black text-white px-4 py-2 shadow-xl">
                <p className="text-sm font-bold">CHECK-IN</p>
                <p className="text-xs">[DATE]</p>
              </div>
              <div className="bg-black text-white px-4 py-2 shadow-xl">
                <p className="text-sm font-bold">CHECK-OUT</p>
                <p className="text-xs">[DATE]</p>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-white text-black inline-block px-6 py-2 shadow-md">
              FAREHAM PARK HOTEL & COUNTRY CLUB
            </h1>
          </motion.div>

          {/* Info and Feedback */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-left space-y-2">
              <p className="font-bold text-lg">ROOM TYPE: <span className="font-normal">[ROOM TYPE]</span></p>
              <p className="font-bold text-lg">ROOM NUMBER: <span className="font-normal">[ROOM NUMBER]</span></p>
            </div>

            <a
              href="https://forms.gle/oTFCo7TRf4gJjYge7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-bold px-6 py-4 rounded-md shadow-lg text-center"
            >
              <p>DID YOU ENJOY YOUR STAY?</p>
              <p className="underline mt-1">LET US KNOW</p>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
