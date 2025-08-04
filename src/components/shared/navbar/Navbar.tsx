"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "@/data/data";
import Link from "next/link";
import ThemeMenu from "@/components/shared/navbar/ui/ThemeMenu";
import { useTheme } from "@/store/theme.store";
import { FaBars, FaCode } from "react-icons/fa";
import Logo from "./ui/Logo";

const Navbar = () => {
  const pathname = usePathname();
  const { initializeTheme } = useTheme();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <div className="m-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="bg-base-300 border-b border-accent p-4 mx-auto max-w-7xl rounded-md mt-4 z-50"
      >
        <div className="flex items-center justify-between">
          <Logo/>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <ThemeMenu />
            {navItems.map(({ href, icon, name }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  className={`flex items-center gap-2 btn btn-accent ${
                    pathname === href ? "" : "btn-soft"
                  }`}
                >
                  {icon}
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="drawer-button hover:cursor-pointer"
                >
                  <FaBars size={24} />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 md:w-96 bg-base-300 text-base-content h-full space-y-2">
                 <div className="flex items-center justify-center">
                  <Logo/>
                 </div>
                  {navItems.map(({ href, icon, name }, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={href}
                        className={`flex items-center gap-2 btn btn-accent ${
                          pathname === href ? "" : "btn-soft"
                        }`}
                      >
                        {icon}
                        {name}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="flex items-center justify-center">
                    <ThemeMenu />
                  </div>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
