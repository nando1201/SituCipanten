// Import React Hooks
// useState  → menyimpan state (status scroll)
// useEffect → menjalankan efek samping (event listener scroll)
import { useState, useEffect } from "react";

// Import motion untuk animasi
import { motion } from "motion/react";

// Import NavLink & useLocation untuk routing
// NavLink   → navigasi + active state
// useLocation → mengetahui halaman aktif (pathname)
import { NavLink, useLocation } from "react-router-dom";

// Komponen Navbar
// Berfungsi sebagai navigasi utama website
export default function Navbar() {

  // State untuk mengecek apakah halaman sudah di-scroll
  // true  → navbar berubah style
  // false → navbar default
  const [scrolled, setScrolled] = useState(false);

  // Mengambil lokasi route saat ini
  const location = useLocation();

  // Effect untuk mendeteksi scroll halaman
  useEffect(() => {
    // Fungsi yang dijalankan setiap kali scroll
    const handleScroll = () => {
      // Jika scroll lebih dari 20px → scrolled = true
      setScrolled(window.scrollY > 20);
    };

    // Menambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup → menghapus event listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mengecek apakah halaman saat ini adalah Home
  const isHome = location.pathname === "/";

  // Daftar menu navigasi
  // Mudah ditambah / dikurangi
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Fasilitas", path: "/fasilitas" },
    { name: "Aktivitas", path: "/aktivitas" },
    { name: "Galeri", path: "/galeri" },
    { name: "Info", path: "/info" },
    { name: "Kontak", path: "/kontak" },
  ];

  // Variants animasi container menu
  // Digunakan untuk efek stagger (muncul satu-satu)
  const menuContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,   // Delay antar item
        delayChildren: 0.2,      // Delay sebelum item muncul
      },
    },
  };

  // Variants animasi setiap item menu
  const menuItem = {
    // Kondisi awal → transparan & turun dari atas
    hidden: { opacity: 0, y: -30 },

    // Kondisi akhir → terlihat & posisi normal
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
    // Navbar dengan animasi slide dari atas
    <motion.nav
      initial={{ y: -100 }}     // Posisi awal di luar layar
      animate={{ y: 0 }}        // Masuk ke posisi normal
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // Style navbar berdasarkan halaman & scroll
        isHome && !scrolled
          ? "bg-transparent"                       // Home sebelum scroll
          : "bg-white/80 backdrop-blur-sm shadow-lg" // Setelah scroll / halaman lain
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
                ? "text-white"      // Home sebelum scroll
                : scrolled
                ? "text-green-600"  // Setelah scroll
                : "text-black"      // Halaman lain
            }`}
          >
            Situ Cipanten
          </NavLink>
        </motion.div>

        {/* ================= MENU ================= */}
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
                    scrolled ? "hover:text-green-600" : "hover:text-green-400"
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

      </div>
    </motion.nav>
  );
}
