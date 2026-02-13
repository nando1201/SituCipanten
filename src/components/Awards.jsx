//nama : Fernando Adriyan salim
//nim : 10125904
//kelas : IF 10


// Import motion dari motion/react
// Digunakan untuk membuat animasi (fade, slide, dll)
import { motion } from "motion/react";

// Import icon dari lucide-react
// Award, Leaf, ShieldCheck = icon SVG siap pakai
import { Award, Leaf, ShieldCheck } from "lucide-react";

// Data penghargaan
// Disimpan dalam array agar mudah di-loop (map)
// Jadi kalau nambah award, tinggal tambah object baru
const awards = [
  {
    // Icon penghargaan (komponen React)
    icon: <Award size={32} />,

    // Judul penghargaan
    title: "Peringkat 10 Besar Wisata Jawa Barat",

    // Tahun penghargaan
    year: "2026",

    // Deskripsi detail penghargaan
    desc: "Situ Cipanten berhasil menembus 10 besar destinasi wisata terbaik di Jawa Barat, bersaing dengan destinasi skala nasional seperti Pangandaran dan Taman Safari.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Destinasi Wisata Nomor 1 di Majalengka",
    year: "2023 – 2025",
    desc: "Mempertahankan posisi sebagai destinasi terfavorit di Kabupaten Majalengka selama tiga tahun berturut-turut",
  },
  {
    icon: <Leaf size={32} />,
    title: "Ikon Wisata Berbasis Konservasi",
    year: "2026",
    desc: "Mendapatkan dukungan khusus melalui hibah ribuan ikan koi premium senilai miliaran rupiah dari komunitas pecinta koi nasional sebagai pengakuan atas kualitas air dan ekosistemnya yang terjaga.",
  },
];

// Komponen Awards
// Berfungsi menampilkan section penghargaan
export default function Awards() {
  return (
    // Section utama
    // py-20 = padding atas & bawah
    // bg-gray-50 = background abu-abu terang
    <section className="py-20 bg-gray-50">
      {/* Container agar konten tidak terlalu lebar */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        {/* Berisi judul & deskripsi */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Penghargaan Kami
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Berbagai penghargaan yang kami raih sebagai bentuk komitmen dalam
            memberikan pengalaman wisata terbaik.
          </p>
        </div>

        {/* Grid Penghargaan */}
        {/* 1 kolom di mobile, 3 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Loop data awards */}
          {awards.map((award, index) => (
            // motion.div digunakan agar card punya animasi
            <motion.div
              key={index}

              // Kondisi awal sebelum muncul di layar
              // opacity 0 = transparan
              // y 30 = geser ke bawah
              initial={{ opacity: 0, y: 30 }}

              // Saat masuk viewport (terlihat di layar)
              whileInView={{ opacity: 1, y: 0 }}

              // Animasi hanya dijalankan sekali
              viewport={{ once: true }}

              // Durasi animasi + delay bertahap
              // index * 0.15 bikin efek muncul satu-satu
              transition={{ duration: 0.5, delay: index * 0.15 }}

              // Styling card
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              {/* Icon container */}
              {/* Bulat + background hijau */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                {award.icon}
              </div>

              {/* Judul penghargaan */}
              <h3 className="text-lg font-semibold text-gray-800">
                {award.title}
              </h3>

              {/* Tahun penghargaan */}
              <p className="text-sm text-green-600 font-medium mt-1">
                {award.year}
              </p>

              {/* Deskripsi */}
              <p className="text-sm text-gray-600 mt-4">
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
