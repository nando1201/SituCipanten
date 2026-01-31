// React & hook useRef → untuk referensi DOM (dipakai oleh useInView)
import React, { useRef } from "react";

// Icon aktivitas
import { FaFish, FaCampground, FaCamera, FaWater } from "react-icons/fa";

// motion → animasi, useInView → deteksi elemen masuk viewport
import { motion, useInView } from "motion/react";

/**
 * Data aktivitas wisata
 * → Berisi icon, judul, deskripsi, status populer, dan gambar
 */
const aktivitasData = [
  {
    icon: <FaWater className="text-3xl text-green-400" />,
    title: "Perahu & Kayak",
    desc: "Jelajahi keindahan danau dengan perahu kayuh atau kayak yang tersedia.",
    popular: true, // menandakan aktivitas favorit
    image: "/src/assets/Perahu.jpg",
  },
  {
    icon: <FaFish className="text-3xl text-green-400" />,
    title: "Berenang",
    desc: "Area berenang yang aman dan nyaman di sekitar danau.",
    popular: true,
    image: "/src/assets/Berenang.jpg",
  },
  {
    icon: <FaCampground className="text-3xl text-green-400" />,
    title: "Camping",
    desc: "Nikmati pengalaman bermalam di alam terbuka dengan fasilitas lengkap.",
    popular: false,
    image: "/src/assets/Camp.png",
  },
  {
    icon: <FaCamera className="text-3xl text-green-400" />,
    title: "Fotografi",
    desc: "Abadikan momen indah dengan latar danau dan pegunungan.",
    popular: false,
    image: "/src/assets/Foto.png",
  },
];

/**
 * Variants untuk container grid
 * → Mengatur animasi anak-anaknya agar muncul bergantian (stagger)
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

/**
 * Variants untuk kartu aktivitas
 * → Efek fade + naik ke atas
 */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * Komponen Aktivitas
 * → Menampilkan daftar aktivitas wisata Situ Cipanten
 */
export default function Aktivitas() {
  // ref → referensi ke elemen header
  const ref = useRef(null);

  // useInView → mengecek apakah elemen sudah masuk layar
  const isInView = useInView(ref, {
    once: true,       // animasi hanya sekali
    margin: "-100px", // animasi aktif sedikit sebelum terlihat penuh
  });

  return (
    // Section utama
    <section className="w-full bg-linear-to-br from-white to-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* ===== HEADER SECTION ===== */}
        <motion.div
          ref={ref} // elemen yang dipantau oleh useInView
          initial={{ opacity: 0, y: 30 }} // posisi awal
          animate={isInView ? { opacity: 1, y: 0 } : {}} // animasi saat terlihat
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-green-800">
            Aktivitas & Kegiatan
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Berbagai aktivitas seru menanti Anda untuk pengalaman wisata yang tak
            terlupakan.
          </p>
        </motion.div>

        {/* ===== GRID AKTIVITAS ===== */}
        <motion.div
          variants={containerVariants} // animasi container
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {aktivitasData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants} // animasi tiap kartu
              whileHover={{ scale: 1.02 }} // efek hover
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* ===== GAMBAR AKTIVITAS ===== */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
                whileHover={{ scale: 1.1 }} // zoom gambar saat hover
                transition={{ duration: 0.4 }}
              />

              {/* ===== OVERLAY TEKS ===== */}
              <div className="absolute inset-0 flex flex-col justify-end bg-black/45 p-6">
                <div className="flex items-center gap-3 text-white">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
              </div>

              {/* ===== LABEL POPULER ===== */}
              {item.popular && (
                <span className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                  Populer
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
