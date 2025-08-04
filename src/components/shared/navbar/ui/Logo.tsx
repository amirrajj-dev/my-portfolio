import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 text-2xl font-extrabold group"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.2, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{
          scale: { repeat: Infinity, duration: 2 },
          rotate: { repeat: Infinity, duration: 4 },
        }}
      >
        <FaCode
          className="text-accent transition-colors duration-200"
          size={30}
        />
        <div className="absolute inset-0 bg-accent/30 rounded-full blur-md group-hover:bg-accent/50 transition-all duration-200" />
      </motion.div>
      <motion.span
        className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent drop-shadow-md group-hover:drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.05 }}
      >
        {Array.from("Amirhosein").map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Link>
  );
};

export default Logo;
