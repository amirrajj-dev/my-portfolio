"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { sampleCode } from "@/data/data";
import { codeEditorContainerVariants, codeLineVariants } from "@/data/varients";
import { getSyntaxClass } from "@/helpers/helpers";

const CodeEditor = () => {
  const [codeText, setCodeText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < sampleCode.length) {
        i++;
        setCodeText((prev) => {
          const next = sampleCode.slice(0, i);
          return prev === next ? prev : next;
        });
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    const cursorInterval = setInterval(() => setCursorVisible((v) => !v), 480);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const codeLines = useMemo(() => codeText.split("\n"), [codeText]);

  return (
    <motion.div
      variants={codeEditorContainerVariants}
      initial="hidden"
      animate="visible"
      className="bg-base-300 rounded-lg shadow-md border border-base-200 max-w-5xl mx-auto font-mono"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center bg-base-300 px-4 py-2 rounded-t-lg border-b border-base-300"
      >
        <div className="flex space-x-2">
          {["bg-error", "bg-warning", "bg-success"].map((color, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full ${color}`}
            />
          ))}
        </div>
        <motion.span
          className="text-xs font-bold text-base-content/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Portfolio.jsx
        </motion.span>
        <div className="w-12" />
      </motion.div>

      {/* Code Block */}
      <motion.div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-b-lg overflow-x-auto">
        <div className="flex text-sm">
          <pre className="whitespace-pre-wrap text-base-content">
            {codeLines.map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                custom={lineIndex}
                initial="hidden"
                animate="visible"
                variants={codeLineVariants}
                className="group px-2 rounded-md transition-all duration-150 hover:bg-accent-focus/10 relative"
              >
                <motion.div
                  whileHover={{ scale: 1.01, x: 1 }}
                  className="inline-block w-full"
                >
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      className={getSyntaxClass(char)}
                    >
                      {char}
                    </motion.span>
                  ))}

                  {lineIndex === codeLines.length - 1 && (
                    <motion.span
                      animate={{ opacity: cursorVisible ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="inline-block w-1.5 h-4 bg-accent rounded-sm translate-y-1 ml-1 animate-blink"
                      style={{
                        boxShadow: "0 0 6px var(--fallback-bc,rgba(0,0,0,0.4))",
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </pre>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodeEditor;
