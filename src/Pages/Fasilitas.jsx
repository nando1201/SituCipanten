// React dan hook useRef → untuk mereferensikan elemen DOM
import React, { useRef } from "react";

// Icon fasilitas dari react-icons
import {
  FaUtensils,
  FaCampground,
  FaParking,
  FaCamera,
  FaChild,
  FaWifi,
  FaGift,
  FaPrayingHands,
} from "react-icons/fa";

// motion → animasi, useInView → mendeteksi elemen masuk viewport
import { motion, useInView } from "motion/react";

/**
 * Data fasilitas wisata
 * → Berisi icon, judul, dan deskripsi fasilitas
 */
const fasilitasData = [
  {
    icon: <FaUtensils className="text-3xl text-green-600" />,
    title: "Restoran & Cafe",
    desc: "Nikmati hidangan lokal dan internasional dengan pemandangan danau.",
  },
  {
    icon: <FaCampground className="text-3xl text-green-600" />,
    title: "Area Camping",
    desc: "Zona camping nyaman dengan fasilitas lengkap untuk pengalaman outdoor.",
  },
  {
    icon: <FaParking className="text-3xl text-green-600" />,
    title: "Parkir Luas",
    desc: "Area parkir kendaraan yang aman dan luas untuk kenyamanan Anda.",
  },
  {
    icon: <FaCamera className="text-3xl text-green-600" />,
    title: "Spot Foto",
    desc: "Berbagai spot foto instagramable dengan latar danau dan pegunungan.",
  },
  {
    icon: <FaChild className="text-3xl text-green-600" />,
    title: "Taman Bermain",
    desc: "Playground aman untuk anak-anak dengan pengawasan.",
  },
  {
    icon: <FaWifi className="text-3xl text-green-600" />,
    title: "Free WiFi",
    desc: "Akses internet gratis di area utama untuk tetap terhubung.",
  },
  {
    icon: <FaGift className="text-3xl text-green-600" />,
    title: "Toko Souvenir",
    desc: "Oleh-oleh khas dan kerajinan lokal untuk kenang-kenangan.",
  },
  {
    icon: <FaPrayingHands className="text-3xl text-green-600" />,
    title: "Musholla & Toilet",
    desc: "Fasilitas ibadah dan toilet bersih tersedia di beberapa titik.",
  },
];

/**
 * Komponen Fasilitas
 * → Menampilkan daftar fasilitas yang tersedia di Situ Cipanten
 */
export default function Fasilitas() {
  // ref → penanda elemen header yang akan dipantau
  const ref = useRef(null);

  // useInView → mengecek apakah elemen sudah masuk layar
  const isInView = useInView(ref, {
    once: true,        // animasi hanya dijalankan sekali
    margin: "-100px",  // animasi aktif sedikit sebelum elemen terlihat penuh
  });

  return (
    // Section utama fasilitas
    <section className="w-full bg-linear-to-br from-white to-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* ===== HEADER SECTION ===== */}
        <motion.div
          ref={ref} // elemen yang dipantau useInView
          initial={{ opacity: 0, y: 30 }} // posisi awal animasi
          animate={isInView ? { opacity: 1, y: 0 } : {}} // animasi saat terlihat
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-green-800">
            Fasilitas Lengkap
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Kami menyediakan berbagai fasilitas untuk kenyamanan dan keamanan
            pengunjung agar liburan Anda semakin menyenangkan.
          </p>
        </motion.div>

        {/* ===== GRID FASILITAS ===== */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {fasilitasData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }} // posisi awal kartu
              animate={isInView ? { opacity: 1, y: 0 } : {}} // animasi saat terlihat
              transition={{
                duration: 0.5,
                delay: index * 0.1, // efek muncul satu per satu
              }}
              className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg"
            >
              {/* Icon fasilitas */}
              {item.icon}

              {/* Judul fasilitas */}
              <h3 className="mt-4 text-lg font-semibold text-green-700">
                {item.title}
              </h3>

              {/* Deskripsi fasilitas */}
              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}