import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Skill", to: "skill" },
    { id: 4, text: "Project", to: "project" },
    { id: 5, text: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 shadow-md"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-3xl font-extrabold text-green-500 cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        >
          Aniket
        </h1>

        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text, to }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="relative text-white font-medium cursor-pointer hover:text-green-400 transition"
              >
                <span className="after:content-[''] after:block after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full">
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? (
            <AiOutlineMenu className="text-green-400" size={28} />
          ) : (
            <IoCloseSharp className="text-red-600" size={28} />
          )}
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center bg-white text-gray-800 shadow-md py-4 space-y-4"
          >
            {navItems.map(({ id, text, to }) => (
              <li key={id}>
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="font-medium hover:text-green-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
