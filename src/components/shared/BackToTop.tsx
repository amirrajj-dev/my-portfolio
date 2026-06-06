"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px oklch(var(--a)/0.5)" }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg cursor-pointer"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
