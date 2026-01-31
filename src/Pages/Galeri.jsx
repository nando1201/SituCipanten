// components/Gallery.jsx

// Import React (dibutuhkan untuk membuat komponen React)
import React from "react";

// Import motion dari motion/react
// Digunakan untuk memberikan animasi pada elemen
import { motion } from "motion/react";

/**
 * Data foto galeri
 * → Berisi path gambar dan teks alternatif (alt)
 * → Digunakan agar galeri bisa dirender secara dinamis
 */
const photos = [
  {
    src: "src/assets/1.jpg",
    alt: "Situ Cipanten",
  },
  {
    src: "src/assets/2.jpg",
    alt: "Gunung bersalju",
  },
  {
    src: "src/assets/3.jpg",
    alt: "Jalan berliku",
  },
  {
    src: "src/assets/4.jpg",
    alt: "Hutan tropis",
  },
  {
    src: "src/assets/5.jpg",
    alt: "Danau",
  },
  {
    src: "src/assets/6.jpg",
    alt: "Senja",
  },
];

/**
 * Komponen Gallery
 * → Menampilkan galeri foto Situ Cipanten dengan animasi
 */
export default function Gallery() {
  return (
    // Section utama galeri
    <section className="py-10 bg-linear-to-br from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== HEADING GALERI ===== */}
        <motion.div
          // Posisi awal sebelum animasi
          initial={{ opacity: 0, y: 30 }}

          // Posisi akhir setelah animasi
          animate={{ opacity: 1, y: 0 }}

          // Durasi animasi
          transition={{ duration: 0.6 }}

          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 pt-12 text-green-800">
            Galeri Foto
          </h2>
          <p className="text-gray-600">
            Lihat keindahan Situ Cipanten melalui koleksi foto kami
          </p>
        </motion.div>

        {/* ===== GRID FOTO ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Loop data foto */}
          {photos.map((photo, index) => (
            <motion.div
              key={index}

              // Animasi awal kartu foto
              initial={{ opacity: 0, scale: 0.95 }}

              // Animasi saat tampil
              animate={{ opacity: 1, scale: 1 }}

              // Delay bertahap agar muncul satu per satu
              transition={{ duration: 0.5, delay: index * 0.1 }}

              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Gambar */}
              <img
                src={photo.src}
                alt={photo.alt}

                // Hover → gambar sedikit zoom
                className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient gelap saat hover */}
              <div
                className="absolute inset-0 bg-linear-to-t
                from-black/60 via-transparent to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity"
              />

              {/* Caption bisa ditambahkan di sini jika diperlukan */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
