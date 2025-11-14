import { IoIosColorPalette } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/store/theme.store";
import { themeItems } from "@/data/data";
import { useEffect, useRef } from "react";

const ThemeMenu = () => {
  const { themeMenuOpen, setThemeMenuOpen, handleThemeChange, theme } =
    useTheme();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    if (themeMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [themeMenuOpen, setThemeMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setThemeMenuOpen(!themeMenuOpen)}
        className="btn btn-soft btn-accent transition-all duration-300"
      >
        <IoIosColorPalette className="text-xl" />
      </motion.button>

      <AnimatePresence>
        {themeMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-52 shadow-xl rounded-xl z-10 menu menu-sm border bg-base-300 border-gray-700"
          >
            {themeItems.map((themeOption, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => handleThemeChange(themeOption.value)}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-accent hover:text-accent-content rounded-lg transition duration-300 ease-in-out ${
                    theme === themeOption.value
                      ? "bg-accent text-accent-content"
                      : ""
                  }`}
                >
                  {themeOption.value}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeMenu;
