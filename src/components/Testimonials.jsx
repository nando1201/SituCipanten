// useState → untuk menyimpan state index slider
import { useState } from "react";

// motion → untuk animasi (slider geser)
import { motion } from "motion/react";

// Icon dari lucide-react
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Data testimoni pengunjung
 * Berisi nama, peran, pesan, dan rating
 */
const testimonials = [
  {
    name: "giri gustika",
    role: "Wisatawan",
    message:
      "Airnya jernih banget, sejuk tempat nya. Asik berenang disini bareng sama ikan2. Murah meriah liburan disini.",
    rating: 5,
  },
  {
    name: "Sam Purwanto (Ipunk)",
    role: "Travel Blogger",
    message:
      "Akes jalan ke lokasi ada beberapa yang rusak parah...",
    rating: 5,
  },
  {
    name: "Rien",
    role: "Wisatawan",
    message: [
      "Kami tidak pernah menyangka akan menemukan tempat ini...",
    ],
    rating: 4,
  },
  {
    name: "Harry Priyadi",
    role: "Pengunjung",
    message: [
      "Tempat wisata yg menurut saya nyaman, bersih...",
    ],
    rating: 5,
  },
  {
    name: "ruby mulyadi",
    role: "Wisatawan",
    message: "No pungli warganya ramah.. mantaap.",
    rating: 5,
  },
  {
    name: "maria sembiring",
    role: "Wisatawan",
    message:
      "Tempatnya nyaman untuk wisata menenangkan pikiran...",
    rating: 5,
  },
];

export default function Testimonials() {
  /**
   * index → menyimpan posisi slider saat ini
   * contoh: index = 0 → slide pertama
   */
  const [index, setIndex] = useState(0);

  /**
   * visibleCards → jumlah card yang tampil dalam satu layar
   * disini 3 card sekaligus
   */
  const visibleCards = 3;

  /**
   * maxIndex → batas maksimal pergeseran slider
   * supaya tidak melebihi jumlah data
   */
  const maxIndex = testimonials.length - visibleCards;

  /**
   * Fungsi next
   * → untuk geser slider ke kanan
   * → jika sudah di akhir, kembali ke awal
   */
  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  /**
   * Fungsi prev
   * → untuk geser slider ke kiri
   * → jika sudah di awal, lompat ke akhir
   */
  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Heading Section ===== */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimoni Pengunjung
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Pengalaman langsung dari wisatawan Situ Cipanten
          </p>
        </div>

        {/* ===== Slider Container ===== */}
        <div className="relative">

          {/* Tombol geser ke kiri */}
          <button
            onClick={prev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          {/* Area tampilan slider */}
          <div className="overflow-hidden">

            {/* Track slider (yang bergerak) */}
            <motion.div
              /**
               * x → posisi geser horizontal
               * index * 33.333% → karena 3 card (100% / 3)
               */
              animate={{ x: `-${index * 33.3333}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="w-full lg:w-1/3 flex shrink-0 px-4 pb-6"
                >
                  {/* Card Testimoni */}
                  <div className="bg-white rounded-2xl shadow-md p-6 h-full">

                    {/* Icon quote */}
                    <Quote className="text-green-600 mb-4" size={24} />

                    {/* Pesan testimoni */}
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      “{item.message}”
                    </p>

                    {/* Rating bintang */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          size={16}
                          className={
                            star < item.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    {/* Nama & peran */}
                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tombol geser ke kanan */}
          <button
            onClick={next}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
