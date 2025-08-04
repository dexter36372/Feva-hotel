import React from 'react';
import { motion } from 'framer-motion';

export default function Admin() {
  const bookings = [
    {
      username: 'johndoe123',
      roomType: 'Deluxe Suite',
      roomNumber: '205',
      checkIn: '2025-08-01',
      checkOut: '2025-08-03',
    },
    {
      username: 'guest456',
      roomType: 'Executive Room',
      roomNumber: '310',
      checkIn: '2025-07-29',
      checkOut: '2025-08-02',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        👨‍💼 Admin Dashboard - FEVA Hotels
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="overflow-x-auto bg-white/5 backdrop-blur-md rounded-lg shadow-xl border border-white/10"
      >
        <table className="min-w-full text-sm text-white">
          <thead className="bg-white/10">
            <tr>
              <th className="px-6 py-4 text-left">Username</th>
              <th className="px-6 py-4 text-left">Room Type</th>
              <th className="px-6 py-4 text-left">Room Number</th>
              <th className="px-6 py-4 text-left">Check-In</th>
              <th className="px-6 py-4 text-left">Check-Out</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <motion.tr
                key={index}
                whileHover={{ scale: 1.01 }}
                className="border-t border-white/10 hover:bg-white/10 transition duration-200"
              >
                <td className="px-6 py-4">{booking.username}</td>
                <td className="px-6 py-4">{booking.roomType}</td>
                <td className="px-6 py-4">{booking.roomNumber}</td>
                <td className="px-6 py-4">{booking.checkIn}</td>
                <td className="px-6 py-4">{booking.checkOut}</td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-xs px-3 py-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-xs px-3 py-1 rounded">Delete</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
