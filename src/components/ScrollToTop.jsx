// Import useEffect dari React
// Digunakan untuk menjalankan efek samping saat terjadi perubahan state / props
import { useEffect } from "react";

// Import useLocation dari react-router-dom
// Digunakan untuk mendeteksi perubahan URL (route)
import { useLocation } from "react-router-dom";

// Komponen ScrollToTop
// Berfungsi untuk otomatis scroll ke atas setiap kali pindah halaman
export default function ScrollToTop() {

  // Mengambil pathname (alamat URL saat ini)
  const { pathname } = useLocation();

  // Effect akan dijalankan setiap kali pathname berubah
  useEffect(() => {
    // Scroll halaman ke posisi paling atas
    // behavior: "smooth" → efek scroll halus
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Dependency → jalan tiap ganti halaman

  // Komponen ini tidak merender UI apa pun
  // Hanya menjalankan logic scroll
  return null;
}
