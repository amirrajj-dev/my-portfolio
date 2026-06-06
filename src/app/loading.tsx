"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "☕ Brewing Nescafé...",
  "🌙 Late Night Coding...",
  "🎧 Tuning the Playlist...",
  "🚀 Optimizing Performance...",
  "💡 Solving Problems...",
];

const Loading = () => {
  const [dots, setDots] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const [phase, setPhase] = useState<"enter" | "display">("enter");

  useEffect(() => {
    const t = setTimeout(() => setPhase("display"), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 2200);
    return () => clearInterval(msgInterval);
  }, []);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        size: Math.random() * 5 + 2,
        xDrift: (Math.random() - 0.5) * 40,
        yDrift: (Math.random() - 0.5) * 30,
      })),
    []
  );

  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-base-300"
      >
        {/* Drifting Particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, oklch(var(--p)/0.4), transparent)"
                  : i % 3 === 1
                    ? "radial-gradient(circle, oklch(var(--a)/0.3), transparent)"
                    : "radial-gradient(circle, oklch(var(--s)/0.3), transparent)",
            }}
            animate={{
              y: [p.yDrift * -0.5, p.yDrift * 0.5],
              x: [p.xDrift * -0.5, p.xDrift * 0.5],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 3,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

        {/* Terminal Card - Responsive sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={
            phase === "enter"
              ? { opacity: 0, scale: 0.85, y: 30 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 100,
            damping: 14,
          }}
          className="relative w-11/12 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] bg-base-200 rounded-xl border border-base-200 shadow-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 50px -15px oklch(var(--p))",
          }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-base-300 border-b border-base-200">
            <div className="w-3 h-3 rounded-full bg-error" />
            <div className="w-3 h-3 rounded-full bg-warning" />
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-[10px] sm:text-xs text-base-content/40 ml-2 font-mono tracking-widest uppercase">
              Terminal — portfolio
            </span>
          </div>

          {/* Terminal Body - Larger padding on bigger screens */}
          <div className="p-4 sm:p-6 md:p-7 lg:p-8 font-mono text-xs sm:text-sm space-y-4 sm:space-y-5">
            {/* Name reveal */}
            <motion.div className="flex items-center gap-2">
              <span className="text-accent font-bold">$</span>
              <motion.span className="text-base-content/50">whoami</motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-accent"
              />
            </motion.div>

            {showName && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-1 pl-4 sm:pl-6"
              >
                <span className="text-base-content/40">{">"}</span>
                {/* Larger name on bigger screens */}
                <span className="inline-block text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                  Amirhosein
                </span>
                <span className="text-base-content/30 mx-1"> </span>
                <span className="inline-block text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent">
                  Rajaei
                </span>
              </motion.div>
            )}

            {/* Indeterminate progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-xs text-base-content/50">
                <motion.span
                  key={msgIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-sm"
                >
                  {messages[msgIndex]}
                </motion.span>
                <span className="font-mono text-accent">{dots}</span>
              </div>
              <div className="h-1.5 sm:h-2 bg-base-300 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: "easeInOut",
                  }}
                  style={{ width: "60%" }}
                />
              </div>
            </motion.div>

            {/* Status footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-2 text-[10px] sm:text-xs text-base-content/25"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-success"
              />
              <span>all systems operational</span>
            </motion.div>
          </div>

          {/* Breathing glow border */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{
              boxShadow: [
                "inset 0 0 25px -12px oklch(var(--p))",
                "inset 0 0 40px -8px oklch(var(--a)/0.6)",
                "inset 0 0 25px -12px oklch(var(--p))",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;