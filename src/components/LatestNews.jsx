import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    title: "Situ Cipanten Jadi Primadona Wisata Majalengka Selama Libur Nataru",
    excerpt:
      "Libur Natal dan Tahun Baru (Nataru) 2025-2026 mendongkrak angka kunjungan wisata di Kabupaten Majalengka. Situ Cipanten menjadi primadona dengan jumlah pengunjung tertinggi dibandingkan destinasi lainnya di wilayah tersebut.",
    date: "10 Januari 2026",
    src: "src/assets/berita1.png",
    url: "https://www.detik.com/jabar/cirebon-raya/d-8300890/situ-cipanten-jadi-primadona-wisata-majalengka-selama-libur-nataru",
  },
  {
    title: "Spot Foto Baru Diresmikan di Area Danau",
    date: "08 Januari 2026",
  },
  {
    title: "Peningkatan Fasilitas Demi Kenyamanan Pengunjung",
    date: "05 Januari 2026",
  },
  {
    title: "Event Gathering Alam Digelar Akhir Pekan Ini",
    date: "01 Januari 2026",
  },
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Berita Terbaru
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Informasi dan kabar terbaru seputar wisata Situ Cipanten
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={news[0].src}
                alt={news[0].title}
                className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar size={16} />
                {news[0].date}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {news[0].title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {news[0].excerpt}
              </p>

              <button
                onClick={() => window.open(news[0].url, "_blank")}
               className="inline-flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition">
                Baca Selengkapnya <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Side News */}
          <div className="space-y-6">
            {news.slice(1).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b pb-4 last:border-none"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar size={14} />
                  {item.date}
                </div>

                <h4 className="font-medium text-gray-800 hover:text-green-600 transition cursor-pointer">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
