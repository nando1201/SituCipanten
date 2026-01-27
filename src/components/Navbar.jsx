import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Beranda", "Tentang", "Fasilitas", "Aktivitas", "Galeri", "Info", "Kontak"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className={`text-xl font-bold transition ${
            scrolled ? "text-green-700" : "text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Situ Cipanten
        </motion.h1>

        {/* Menu */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`hidden md:flex items-center gap-8 font-medium transition ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                color: "#4ade80",
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer transition-colors"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition"
        >
          Reservasi
        </motion.button>
      </div>
    </motion.nav>
  );
}