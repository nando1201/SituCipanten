// Import motion dari motion/react
// Digunakan untuk membuat animasi (fade, slide, dll)
import { motion } from "motion/react";

// Import NavLink dari react-router-dom
// Digunakan untuk navigasi antar halaman tanpa reload
import { NavLink } from 'react-router-dom';

// Komponen Hero
// Berfungsi sebagai section utama (bagian atas / landing page)
export default function Hero() {
  return (
    // Section hero fullscreen
    // relative → agar child absolute bisa diposisikan relatif ke section ini
    <section className="relative h-screen w-full overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      {/* Background image fullscreen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Gambar hero utama
          backgroundImage: "url(/Hero1.png)",
        }}
      />

      {/* ================= OVERLAY ================= */}
      {/* Overlay gelap untuk meningkatkan keterbacaan teks */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= CONTENT ================= */}
      {/* Container konten berada di atas background */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">

          {/* ================= TEXT CONTENT ================= */}
          {/* motion.div untuk animasi teks saat pertama kali muncul */}
          <motion.div
            // Kondisi awal (teks transparan & sedikit turun)
            initial={{ opacity: 0, y: 30 }}

            // Kondisi akhir (teks terlihat & posisi normal)
            animate={{ opacity: 1, y: 0 }}

            // Pengaturan animasi
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Judul utama */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Situ Cipanten
            </h1>

            {/* Subjudul */}
            <p className="text-lg md:text-xl mb-2">
              Surga Tersembunyi di Majalengka
            </p>

            {/* Deskripsi singkat */}
            <p className="text-sm md:text-base text-white/80 mb-8">
              Nikmati Keindahan Alam, Udara Segar, dan Kedamaian
            </p>
          </motion.div>

          {/* ================= BUTTONS ================= */}
          {/* motion.div untuk animasi tombol */}
          <motion.div
            // Kondisi awal (transparan & turun sedikit)
            initial={{ opacity: 0, y: 20 }}

            // Kondisi akhir
            animate={{ opacity: 1, y: 0 }}

            // Delay lebih lama agar muncul setelah teks
            transition={{ duration: 0.8, delay: 0.6 }}

            // Flex responsive
            className="flex justify-center gap-4 flex-col sm:flex-row"
          >
            {/* Tombol navigasi ke halaman Tentang */}
            <NavLink to="/tentang">
              <button className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full transition">
                Jelajahi Sekarang
              </button>
            </NavLink>

            {/* Tombol navigasi ke halaman Kontak */}
            <NavLink to="/kontak"> 
              <button className="border border-white/70 hover:bg-white hover:text-black px-6 py-3 rounded-full transition">
                Hubungi Kami
              </button>
            </NavLink>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
