import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase'; // ✅ Make sure this is correct
import { ref, get } from 'firebase/database';

export default function BookingCard({ username }) {
  const [hasVisited, setHasVisited] = useState(null); // null = loading

  useEffect(() => {
    if (username) {
      const userRef = ref(db, `visits/${username.toLowerCase()}`);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          setHasVisited(true);
        } else {
          setHasVisited(false);
        }
      }).catch((error) => {
        console.error('Error checking visit status:', error);
        setHasVisited(false); // Fail-safe
      });
    }
  }, [username]);

  if (hasVisited === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Checking visit history for {username}...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black text-white px-4"
      style={{
        backgroundImage: "url('https://freeimage.host/images/2025/08/03/F6GMm8u.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="bg-black/80 p-6 rounded-xl shadow-2xl border-4 border-white w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 text-center">
          {hasVisited ? (
            <h2 className="text-2xl font-bold">
              Welcome back, {username}!
            </h2>
          ) : (
            <h2 className="text-2xl font-bold">
              You’ve never visited us before... maybe this is a sign to book!
            </h2>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left text-white">
            <p className="text-xl font-bold">
              ROOM TYPE: <span className="font-normal">[ROOM TYPE]</span>
            </p>
            <p className="text-xl font-bold">
              ROOM NUMBER: <span className="font-normal">[ROOM NUMBER]</span>
            </p>
          </div>

          <motion.a
            href="https://forms.gle/oTFCo7TRf4gJjYge7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 text-center font-bold text-md shadow-xl hover:bg-white hover:text-green-600 transition-all duration-300 border-2 border-green-500"
            whileHover={{ scale: 1.05 }}
          >
            <span>DID YOU ENJOY YOUR STAY?</span>
            <br />
            <u>LET US KNOW</u>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
