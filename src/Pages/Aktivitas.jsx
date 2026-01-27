import React from "react";
import { FaFish, FaCampground, FaCamera, FaWater } from "react-icons/fa";

const aktivitasData = [
  {
    icon: <FaWater className="text-green-600 text-3xl" />,
    title: "Perahu & Kayak",
    desc: "Jelajahi keindahan danau dengan perahu kayuh atau kayak yang tersedia.",
    popular: true,
    image: "src/assets/Perahu.jpg",
  },
  {
    icon: <FaFish className="text-green-600 text-3xl" />,
    title: "Berenang",
    desc: "Area berenang yang aman dan nyaman di sekitar danau.",
    popular: true,
    image: "src/assets/Berenang.jpg",
  },
  {
    icon: <FaCampground className="text-green-600 text-3xl" />,
    title: "Camping",
    desc: "Nikmati pengalaman bermalam di alam terbuka dengan fasilitas lengkap.",
    popular: false,
    image: "src/assets/Camp.png",
  },
  {
    icon: <FaCamera className="text-green-600 text-3xl" />,
    title: "Fotografi",
    desc: "Abadikan momen indah dengan latar danau dan pegunungan.",
    popular: false,
    image: "src/assets/Foto.png",
  },
];

export default function Aktivitas() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          Aktivitas & Kegiatan
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Berbagai aktivitas seru menanti Anda untuk pengalaman wisata yang tak
          terlupakan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aktivitasData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 text-white">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
              </div>

              {/* Popular Tag */}
              {item.popular && (
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Populer
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}