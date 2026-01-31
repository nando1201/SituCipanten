// motion → digunakan untuk animasi (fade & slide)
import { motion } from "motion/react";

// Icon → elemen visual penunjang fitur
import { Leaf, Mountain, Droplets } from "lucide-react";

/**
 * Komponen WelcomeSection
 * → Menampilkan section pembuka / pengenalan Situ Cipanten
 */
export default function WelcomeSection() {
  return (
    // Section utama
    <section className="py-20 bg-white">
      {/* Container utama + grid layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ===== Bagian Teks ===== */}
        <motion.div
          // Posisi awal animasi (sembunyi & geser ke kiri)
          initial={{ opacity: 0, x: -40 }}

          // Animasi saat elemen masuk viewport
          whileInView={{ opacity: 1, x: 0 }}

          // Animasi hanya berjalan sekali
          viewport={{ once: true }}

          // Durasi animasi
          transition={{ duration: 0.6 }}
        >
          {/* Label kecil */}
          <span className="inline-block text-green-600 font-semibold mb-3">
            Welcome to Situ Cipanten
          </span>

          {/* Judul utama */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Pesona Alam yang Menenangkan <br />
            di Jantung Majalengka
          </h2>

          {/* Deskripsi 1 */}
          <p className="mt-5 text-gray-600 leading-relaxed">
            Situ Cipanten merupakan destinasi wisata alam yang menawarkan
            keindahan danau jernih, udara pegunungan yang sejuk, serta suasana
            tenang yang cocok untuk melepas penat dari rutinitas harian.
          </p>

          {/* Deskripsi 2 */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            Dengan berbagai fasilitas wisata dan aktivitas menarik, Situ
            Cipanten menjadi pilihan ideal untuk liburan keluarga, komunitas,
            maupun wisatawan pecinta alam.
          </p>
        </motion.div>

        {/* ===== Bagian Fitur ===== */}
        <motion.div
          // Posisi awal animasi (geser dari kanan)
          initial={{ opacity: 0, x: 40 }}

          // Animasi saat muncul di layar
          whileInView={{ opacity: 1, x: 0 }}

          // Animasi hanya sekali
          viewport={{ once: true }}

          // Durasi + sedikit delay
          transition={{ duration: 0.6, delay: 0.1 }}

          // Grid untuk feature card
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {/* Feature 1 */}
          <Feature
            icon={<Droplets size={28} />}
            title="Danau Jernih"
            desc="Air alami yang bersih dan menyegarkan."
          />

          {/* Feature 2 */}
          <Feature
            icon={<Mountain size={28} />}
            title="Udara Sejuk"
            desc="Lingkungan pegunungan yang asri."
          />

          {/* Feature 3 */}
          <Feature
            icon={<Leaf size={28} />}
            title="Wisata Alami"
            desc="Keindahan alam yang masih terjaga."
          />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Komponen Feature
 * → Digunakan untuk menampilkan kartu fitur
 * @param icon  → icon fitur
 * @param title → judul fitur
 * @param desc  → deskripsi fitur
 */
function Feature({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
      
      {/* Icon fitur */}
      <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
        {icon}
      </div>

      {/* Judul fitur */}
      <h3 className="font-semibold text-gray-800">{title}</h3>

      {/* Deskripsi fitur */}
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
