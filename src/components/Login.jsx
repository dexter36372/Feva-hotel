import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login({ setUsername, onLogin }) {
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (input.trim()) {
      setUsername(input.trim());
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <motion.img
        src="https://freeimage.host/images/2025/08/04/F6wOpgn.png"
        alt="Room Key Graphic"
        className="w-64 mb-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.input
        type="text"
        placeholder="ROBLOX USERNAME"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-center text-lg font-semibold bg-transparent border-b-2 border-white outline-none placeholder-white/60 mb-6 w-72 focus:border-green-400 transition-all duration-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      />

      <motion.button
        onClick={handleLogin}
        className="px-8 py-3 border-2 border-white text-white font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        LOGIN
      </motion.button>
    </div>
  );
}
