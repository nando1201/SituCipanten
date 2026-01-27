import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Fasilitas", path: "/fasilitas" },
    { name: "Aktivitas", path: "/aktivitas" },
    { name: "Galeri", path: "/galeri" },
    { name: "Info", path: "/info" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? "bg-transparent"
          : "bg-white/80 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-xl font-bold transition-colors duration-300 ${
              isHome && !scrolled
                ? "text-white" // Home sebelum scroll → putih
                : scrolled
                ? "text-green-600" // Saat scroll → hijau
                : "text-black" // Halaman lain sebelum scroll → hitam
            }`}
          >
            Situ Cipanten
          </NavLink>

        </motion.div>

        {/* Menu */}
        <motion.ul
          className="hidden md:flex items-center gap-8 font-medium"
        >
          {menuItems.map((item, index) => (
            <motion.li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isHome && !scrolled
                      ? "text-white"
                      : "text-black"
                  } ${
                    scrolled ? "hover:text-green-600" : "hover:text-green-400"
                  } ${isActive ? "text-green-600 font-semibold" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <NavLink
            to="/reservasi"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition"
          >
            Reservasi
          </NavLink>
        </motion.div>
      </div>
    </motion.nav>
  );
}