//nama : Fernando Adriyan salim
//nim : 10125904
//kelas : IF 10

// Import komponen routing dari react-router-dom
// BrowserRouter → pembungkus utama routing
// Routes → wadah kumpulan Route
// Route → mendefinisikan path dan komponen yang ditampilkan
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import komponen layout
// Navbar → navigasi utama website
// ScrollToTop → mengatur scroll ke atas setiap ganti halaman
// Footer → footer yang tampil di semua halaman
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Import halaman (pages)
// Home → halaman utama
// Tentang → halaman informasi tentang Situ Cipanten
// Fasilitas → halaman fasilitas wisata
// Aktivitas → halaman aktivitas wisata
// Galeri → halaman galeri foto
// Info → halaman informasi pengunjung
// Kontak → halaman kontak
import Home from "./Pages/Home";
import Tentang from "./Pages/Tentang";
import Fasilitas from "./Pages/Fasilitas";
import Aktivitas from "./Pages/Aktivitas";
import Galeri from "./Pages/Galeri";
import Info from "./Pages/Info";
import Kontak from "./Pages/Kontak";

/**
 * Komponen App
 * → Root / komponen utama aplikasi React
 * → Mengatur routing dan layout global
 */
export default function App() {
  return (
    // BrowserRouter membungkus seluruh aplikasi
    // Agar fitur routing React Router bisa digunakan
    <BrowserRouter>

      {/* ScrollToTop
          → Mengatur agar halaman selalu scroll ke atas
          → Saat user berpindah halaman (route)
      */}
      <ScrollToTop />

      {/* Navbar
          → Ditampilkan di semua halaman
          → Berisi menu navigasi antar halaman
      */}
      <Navbar />

      {/* Routes
          → Wadah semua route (halaman)
      */}
      <Routes>

        {/* Route Home
            → Ditampilkan saat path "/"
        */}
        <Route path="/" element={<Home />} />

        {/* Route Tentang
            → Halaman informasi tentang Situ Cipanten
        */}
        <Route path="/tentang" element={<Tentang />} /> 

        {/* Route Fasilitas
            → Halaman daftar fasilitas wisata
        */}
        <Route path="/fasilitas" element={<Fasilitas />} />

        {/* Route Aktivitas
            → Halaman aktivitas wisata
        */}
        <Route path="/aktivitas" element={<Aktivitas />} />

        {/* Route Galeri
            → Halaman galeri foto
        */}
        <Route path="/galeri" element={<Galeri />} />

        {/* Route Info
            → Halaman informasi pengunjung
        */}
        <Route path="/info" element={<Info />} />

        {/* Route Kontak
            → Halaman form & info kontak
        */}
        <Route path="/kontak" element={<Kontak />} /> 

      </Routes>

      {/* Footer
          → Ditampilkan di semua halaman
          → Berisi informasi tambahan & copyright
      */}
      <Footer />

    </BrowserRouter>
  );
}
