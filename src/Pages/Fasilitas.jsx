import React from "react";
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

const fasilitasData = [
  {
    icon: <FaUtensils className="text-green-600 text-3xl" />,
    title: "Restoran & Cafe",
    desc: "Nikmati hidangan lokal dan internasional dengan pemandangan danau.",
  },
  {
    icon: <FaCampground className="text-green-600 text-3xl" />,
    title: "Area Camping",
    desc: "Zona camping nyaman dengan fasilitas lengkap untuk pengalaman outdoor.",
  },
  {
    icon: <FaParking className="text-green-600 text-3xl" />,
    title: "Parkir Luas",
    desc: "Area parkir kendaraan yang aman dan luas untuk kenyamanan Anda.",
  },
  {
    icon: <FaCamera className="text-green-600 text-3xl" />,
    title: "Spot Foto",
    desc: "Berbagai spot foto instagramable dengan latar danau dan pegunungan.",
  },
  {
    icon: <FaChild className="text-green-600 text-3xl" />,
    title: "Taman Bermain",
    desc: "Playground aman untuk anak-anak dengan pengawasan.",
  },
  {
    icon: <FaWifi className="text-green-600 text-3xl" />,
    title: "Free WiFi",
    desc: "Akses internet gratis di area utama untuk tetap terhubung.",
  },
  {
    icon: <FaGift className="text-green-600 text-3xl" />,
    title: "Toko Souvenir",
    desc: "Oleh-oleh khas dan kerajinan lokal untuk kenang-kenangan.",
  },
  {
    icon: <FaPrayingHands className="text-green-600 text-3xl" />,
    title: "Musholla & Toilet",
    desc: "Fasilitas ibadah dan toilet bersih tersedia di beberapa titik.",
  },
];

export default function Fasilitas() {
  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12 pt-8">
          Fasilitas Lengkap
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Kami menyediakan berbagai fasilitas untuk kenyamanan dan keamanan
          pengunjung agar liburan Anda semakin menyenangkan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fasilitasData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-green-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
}