//nama : Fernando Adriyan salim
//nim : 10125904
//kelas : IF 10

// Import motion dari framer-motion
// Digunakan untuk memberikan animasi pada elemen (fade, slide, dll)
import { motion } from "framer-motion";

// Komponen Sejarah
// Berfungsi menampilkan informasi sejarah Situ Cipanten
export default function Sejarah() {
  return (
    // Section utama sejarah
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= JUDUL SECTION ================= */}
        {/* Judul dan deskripsi dengan animasi */}
        <motion.div
          // Kondisi awal animasi (transparan & turun)
          initial={{ opacity: 0, y: 30 }}

          // Animasi saat elemen masuk viewport
          whileInView={{ opacity: 1, y: 0 }}

          // Durasi animasi
          transition={{ duration: 0.6 }}

          // Animasi hanya dijalankan sekali
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          {/* Judul utama */}
          <h2 className="text-4xl font-bold text-green-800">
            Sejarah Situ Cipanten
          </h2>

          {/* Subjudul */}
          <p className="mt-4 text-gray-600">
            Jejak alam dan perjalanan waktu yang membentuk keindahan Situ Cipanten
          </p>
        </motion.div>

        {/* ================= KONTEN UTAMA ================= */}
        {/* Grid 1 kolom (mobile) & 2 kolom (desktop) */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* ================= TEKS SEJARAH ================= */}
          {/* Kolom kiri: penjelasan sejarah */}
          <motion.div
            // Animasi dari kiri
            initial={{ opacity: 0, x: -40 }}

            // Saat masuk viewport
            whileInView={{ opacity: 1, x: 0 }}

            // Durasi animasi
            transition={{ duration: 0.6 }}

            // Animasi hanya sekali
            viewport={{ once: true }}
          >
            {/* Paragraf 1 */}
            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              Situ Cipanten merupakan danau yang terbentuk secara alami yang sudah 
              sejak lama berfungsi sebagai wadah penampung air dan pendukung ekosistem
              perairan darat. Pada tahun 1973 pemerintah setempat melakukan pembangunan
              infrastruktur bendungan air untuk membantu dalam memastikan pasokan air
              yang stabil dan teratur yang digunakan untuk berbagai sektor seperti
              pertanian, industri, perumahan, dan konsumsi umum.
            </p>

            {/* Paragraf 2 */}
            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              Seiring bergulirnya waktu, Situ Cipanten mulai berkembang menjadi
              destinasi wisata semenjak tahun 1998 atas prakarsa masyarakat dan
              pemerintah desa setempat dan mulai dikenal secara meluas pada tahun
              2004 dengan mulai banyaknya pengunjung yang berdatangan dari luar
              daerah. Dalam proses pengembangan Situ Cipanten sebagai destinasi
              wisata, telah dibuat dan dikembangkan sejumlah fasilitas serta berbagai
              spot favorit yang bisa dinikmati pengunjung.
            </p>

            {/* Paragraf 3 */}
            <p className="text-justify leading-relaxed text-gray-700">
              Pengelolaan awalnya dilakukan oleh Karang Taruna Desa Gunungkuning
              sejak tahun 2017. Selanjutnya, pengelolaan Situ Cipanten dilakukan
              melalui BUM Desa Karya Mekar sejak tahun 2021. Beragam fasilitas wisata
              tersedia, seperti kapal dayung, bebek gowes, ayunan, sepeda gantung,
              dan lainnya.
            </p>
          </motion.div>

          {/* ================= TIMELINE / RINGKASAN ================= */}
          {/* Kolom kanan: poin-poin penting sejarah */}
          <motion.div
            // Animasi dari kanan
            initial={{ opacity: 0, x: 40 }}

            // Saat masuk viewport
            whileInView={{ opacity: 1, x: 0 }}

            // Durasi animasi
            transition={{ duration: 0.6 }}

            // Animasi hanya sekali
            viewport={{ once: true }}
            className="rounded-3xl bg-green-50 p-8 shadow-lg"
          >
            <ul className="space-y-6">
              {/* Item timeline */}
              <li className="flex gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-green-600"></span>
                <div>
                  <h4 className="font-semibold text-green-800">
                    Awal Terbentuk
                  </h4>
                  <p className="text-sm text-gray-600">
                    Danau alami dari sumber mata air pegunungan
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-green-600"></span>
                <div>
                  <h4 className="font-semibold text-green-800">
                    Pemanfaatan Warga
                  </h4>
                  <p className="text-sm text-gray-600">
                    Digunakan sebagai sumber air dan area istirahat
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-green-600"></span>
                <div>
                  <h4 className="font-semibold text-green-800">
                    Pengembangan Wisata
                  </h4>
                  <p className="text-sm text-gray-600">
                    Dikelola sebagai destinasi wisata alam berkelanjutan
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-green-600"></span>
                <div>
                  <h4 className="font-semibold text-green-800">
                    Ikon Majalengka
                  </h4>
                  <p className="text-sm text-gray-600">
                    Menjadi salah satu tujuan wisata favorit Jawa Barat
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
