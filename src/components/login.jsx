import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';

const Login = ({ setUsername, onLogin }) => {
  const [inputValue, setInputValue] = useState('');

  const handleLogin = () => {
    if (inputValue.trim()) {
      setUsername(inputValue);
      onLogin();
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <motion.img
        src="https://freeimage.host/i/F6GMm8u"
        alt="FEVA Hotel Logo"
        className="w-60 md:w-72 drop-shadow-xl mb-8 animate-fadeIn"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.input
        type="text"
        placeholder="ROBLOX USERNAME"
        className="bg-black border-2 border-white px-6 py-3 text-white text-center text-lg font-semibold tracking-widest w-80 mb-4 focus:outline-none hover:shadow-xl hover:border-green-400 transition duration-300"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      <motion.button
        onClick={handleLogin}
        className="w-80 bg-white text-black py-3 text-lg font-extrabold border-2 border-white hover:bg-green-500 hover:text-white transition duration-300 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        LOGIN
      </motion.button>

      <motion.div
        className="absolute bottom-4 text-sm text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        &copy; {new Date().getFullYear()} FEVA Hotels. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Login;
