import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function BookingCard({ username }) {
  const [hasVisited, setHasVisited] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const checkVisitStatus = async () => {
      try {
        const userRef = doc(db, 'visits', username.toLowerCase());
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          setHasVisited(true);
          setBookingData(docSnap.data()); // You can add real data here later
        } else {
          setHasVisited(false);
        }
      } catch (error) {
        console.error('Error checking visit status:', error);
        setHasVisited(false);
      }
    };

    checkVisitStatus();
  }, [username]);

  if (hasVisited === null) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black text-white px-4"
      style={{
        backgroundImage: "url('https://ibb.co/RTRMvHc6')",
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
        {hasVisited ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="text-left">
                <div className="flex gap-4 mb-2">
                  <div className="bg-black text-white p-3 shadow-lg">
                    <div className="text-xs">CHECK-IN</div>
                    <div className="font-bold text-lg">{bookingData?.checkIn || '[DATE]'}</div>
                  </div>
                  <div className="bg-black text-white p-3 shadow-lg">
                    <div className="text-xs">CHECK-OUT</div>
                    <div className="font-bold text-lg">{bookingData?.checkOut || '[DATE]'}</div>
                  </div>
                </div>
                <div className="bg-white text-black inline-block px-4 py-1 text-lg font-bold shadow-lg">
                  FAREHAM PARK HOTEL & COUNTRY CLUB
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-left text-white">
                <p className="text-xl font-bold">ROOM TYPE: <span className="font-normal">{bookingData?.roomType || 'Standard Room'}</span></p>
                <p className="text-xl font-bold">ROOM NUMBER: <span className="font-normal">{bookingData?.roomNumber || 'Not Allocated'}</span></p>
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
          </>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">You’ve never visited us before… maybe this is a sign to book!</h2>
            <motion.button
              className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              BOOK NOW
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
