// Import motion dari motion/react
// Digunakan untuk animasi saat elemen masuk ke layar (scroll animation)
import { motion } from "motion/react";

// Import icon dari lucide-react
// Calendar = icon tanggal
// ArrowRight = icon panah untuk tombol "Baca Selengkapnya"
import { Calendar, ArrowRight } from "lucide-react";

// Data berita
// Disimpan dalam array agar mudah dikelola dan di-loop
const news = [
  {
    // Judul berita utama
    title: "Situ Cipanten Jadi Primadona Wisata Majalengka Selama Libur Nataru",

    // Ringkasan berita (hanya untuk berita utama)
    excerpt:
      "Libur Natal dan Tahun Baru (Nataru) 2025-2026 mendongkrak angka kunjungan wisata di Kabupaten Majalengka. Situ Cipanten menjadi primadona dengan jumlah pengunjung tertinggi dibandingkan destinasi lainnya di wilayah tersebut.",

    // Tanggal publikasi
    date: "10 Januari 2026",

    // Sumber gambar berita
    src: "assets/berita1.png",

    // URL berita lengkap (external link)
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

// Komponen LatestNews
// Berfungsi menampilkan daftar berita terbaru
export default function LatestNews() {
  return (
    // Section berita
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        {/* Judul section dan deskripsi */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Berita Terbaru
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Informasi dan kabar terbaru seputar wisata Situ Cipanten
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        {/* Grid utama: berita besar + berita samping */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ================= MAIN NEWS ================= */}
          {/* Berita utama (lebih besar & menonjol) */}
          <motion.div
            // Kondisi awal animasi
            initial={{ opacity: 0, y: 30 }}

            // Saat elemen terlihat di layar
            whileInView={{ opacity: 1, y: 0 }}

            // Animasi hanya berjalan sekali
            viewport={{ once: true }}

            // Pengaturan animasi
            transition={{ duration: 0.6 }}

            // 2 kolom di layar besar
            className="lg:col-span-2 group"
          >
            {/* Gambar berita */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={news[0].src}          // Gambar berita utama
                alt={news[0].title}       // Alt text untuk aksesibilitas
                className="h-72 w-full object-cover 
                           group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Konten teks berita */}
            <div className="mt-6">

              {/* Tanggal berita */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar size={16} />
                {news[0].date}
              </div>

              {/* Judul berita */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {news[0].title}
              </h3>

              {/* Ringkasan berita */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {news[0].excerpt}
              </p>

              {/* Tombol baca berita lengkap */}
              <button
                // Membuka link berita di tab baru
                onClick={() => window.open(news[0].url, "_blank")}
                className="inline-flex items-center gap-2 
                           text-green-600 font-medium 
                           hover:gap-3 transition"
              >
                Baca Selengkapnya <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* ================= SIDE NEWS ================= */}
          {/* Daftar berita lain (lebih ringkas) */}
          <div className="space-y-6">

            {/* Loop berita selain berita utama */}
            {news.slice(1).map((item, index) => (
              <motion.div
                key={index}

                // Animasi dari samping kanan
                initial={{ opacity: 0, x: 30 }}

                // Saat masuk viewport
                whileInView={{ opacity: 1, x: 0 }}

                // Animasi hanya sekali
                viewport={{ once: true }}

                // Delay bertahap antar item
                transition={{ duration: 0.4, delay: index * 0.1 }}

                className="border-b pb-4 last:border-none"
              >
                {/* Tanggal berita */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar size={14} />
                  {item.date}
                </div>

                {/* Judul berita */}
                <h4 className="font-medium text-gray-800 
                               hover:text-green-600 
                               transition cursor-pointer">
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
