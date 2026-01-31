// Import React Hooks
// useState  → menyimpan state (scroll & mobile menu)
// useEffect → menjalankan efek samping (event listener scroll)
import { useState, useEffect } from "react";

// Import motion untuk animasi
import { motion } from "motion/react";

// Import NavLink & useLocation untuk routing
// NavLink     → navigasi + active state
// useLocation → mengetahui halaman aktif (pathname)
import { NavLink, useLocation } from "react-router-dom";

// Import icon hamburger & close (X) untuk mobile
import { Menu, X } from "lucide-react";

// ================= KOMPONEN NAVBAR =================
// Berfungsi sebagai navigasi utama website
export default function Navbar() {

  // ================= STATE =================

  // State untuk mengecek apakah halaman sudah di-scroll
  // true  → navbar berubah style
  // false → navbar default
  const [scrolled, setScrolled] = useState(false);

  // State untuk membuka / menutup menu mobile
  // true  → menu mobile terbuka
  // false → menu mobile tertutup
  const [isOpen, setIsOpen] = useState(false);

  // Mengambil lokasi route saat ini
  const location = useLocation();

  // ================= EFFECT SCROLL =================
  // Digunakan untuk mendeteksi scroll halaman
  useEffect(() => {
    // Fungsi yang dijalankan setiap kali scroll
    const handleScroll = () => {
      // Jika scroll lebih dari 20px → navbar dianggap sudah di-scroll
      setScrolled(window.scrollY > 20);
    };

    // Menambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup → menghapus event listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mengecek apakah halaman saat ini adalah Home
  const isHome = location.pathname === "/";

  // ================= MENU ITEMS =================
  // Daftar menu navigasi (mudah ditambah / dikurangi)
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Fasilitas", path: "/fasilitas" },
    { name: "Aktivitas", path: "/aktivitas" },
    { name: "Galeri", path: "/galeri" },
    { name: "Info", path: "/info" },
    { name: "Kontak", path: "/kontak" },
  ];

  // ================= ANIMASI MENU DESKTOP =================

  // Variants animasi container menu (stagger effect)
  const menuContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Variants animasi tiap item menu
  const menuItem = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    // ================= NAVBAR =================
    <motion.nav
      // Animasi navbar muncul dari atas
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Style navbar berdasarkan halaman & scroll
        isHome && !scrolled
          ? "bg-transparent"
          : "bg-white/80 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <NavLink
            to="/"
            // Scroll ke atas saat logo diklik
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-xl font-bold transition-colors duration-300 ${
              isHome && !scrolled
                ? "text-white"
                : scrolled
                ? "text-green-600"
                : "text-black"
            }`}
          >
            Situ Cipanten
          </NavLink>
        </motion.div>

        {/* ================= MENU DESKTOP ================= */}
        <motion.ul
          variants={menuContainer}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-8 font-medium"
        >
          {menuItems.map((item, index) => (
            <motion.li key={index} variants={menuItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isHome && !scrolled ? "text-white" : "text-black"
                  } ${
                    scrolled
                      ? "hover:text-green-600"
                      : "hover:text-green-400"
                  } ${
                    isActive ? "text-green-600 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* ================= BUTTON MOBILE ================= */}
        {/* Hanya muncul di layar kecil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors ${
              isHome && !scrolled ? "text-white" : "text-black"
            }`}
          >
            {/* Icon berubah sesuai state */}
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MENU MOBILE ================= */}
      {/* Dropdown menu untuk HP */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-full left-0 w-full ${
          isHome && !scrolled
            ? "bg-black/80 backdrop-blur-md"
            : "bg-white shadow-lg"
        }`}
      >
        <ul className="flex flex-col py-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                // Tutup menu setelah klik
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-3 transition-colors ${
                    isHome && !scrolled
                      ? "text-white hover:bg-white/10"
                      : "text-black hover:bg-gray-100"
                  } ${
                    isActive ? "text-green-600 font-semibold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
