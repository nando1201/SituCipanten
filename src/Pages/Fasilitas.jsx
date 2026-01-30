import React, { useRef } from "react";
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
import { motion, useInView } from "motion/react";

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

export default function Fasilitas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-linear-to-br from-white to-green-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {fasilitasData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-green-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}