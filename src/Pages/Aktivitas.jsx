import React, { useRef } from "react";
import { FaFish, FaCampground, FaCamera, FaWater } from "react-icons/fa";
import { motion, useInView } from "motion/react";

const aktivitasData = [
  {
    icon: <FaWater className="text-3xl text-green-400" />,
    title: "Perahu & Kayak",
    desc: "Jelajahi keindahan danau dengan perahu kayuh atau kayak yang tersedia.",
    popular: true,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Aktivitas() {
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
            Aktivitas & Kegiatan
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Berbagai aktivitas seru menanti Anda untuk pengalaman wisata yang tak
            terlupakan.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {aktivitasData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* IMAGE */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 flex flex-col justify-end bg-black/45 p-6">
                <div className="flex items-center gap-3 text-white">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
              </div>

              {/* POPULAR */}
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
