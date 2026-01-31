// Import React dan hook useRef
// useRef → untuk menyimpan referensi elemen DOM
import React, { useRef } from "react";

// Import icon dari lucide-react
// Digunakan sebagai ikon visual informasi
import { DollarSign, Clock, Calendar, MapPin } from "lucide-react";

// Import motion & useInView
// motion → animasi komponen
// useInView → mendeteksi kapan elemen masuk ke viewport (layar)
import { motion, useInView } from "motion/react";

/**
 * Variants animasi untuk container kartu
 * → Mengatur animasi global (anak-anaknya muncul bertahap)
 */
const containerVariants = {
  hidden: { opacity: 0 }, // kondisi awal
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // delay antar kartu
  },
};

/**
 * Variants animasi untuk masing-masing kartu
 * → Efek fade + naik ke atas
 */
const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // posisi awal
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // animasi halus
  },
};

/**
 * Komponen Info
 * → Menampilkan informasi penting bagi pengunjung
 */
const Info = () => {

  // ref → referensi ke elemen header
  const ref = useRef(null);

  // useInView → cek apakah elemen sudah terlihat di layar
  const isInView = useInView(ref, {
    once: true,        // animasi hanya sekali
    margin: "-100px",  // aktif sebelum elemen terlihat penuh
  });

  return (
    // Section utama halaman Info
    <section className="min-h-screen bg-linear-to-br from-white to-green-50 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* ================= HEADER ================= */}
        <motion.div
          ref={ref} // elemen yang dipantau oleh useInView
          initial={{ opacity: 0, y: 40 }} // kondisi awal animasi
          animate={isInView ? { opacity: 1, y: 0 } : {}} // animasi saat terlihat
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-3 pt-8 text-4xl font-bold text-emerald-700 md:text-5xl">
            Informasi Pengunjung
          </h1>
          <p className="text-lg text-slate-600">
            Semua yang perlu Anda ketahui sebelum berkunjung
          </p>
        </motion.div>

        {/* ================= INFO CARDS ================= */}
        <motion.div
          variants={containerVariants} // animasi container
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // aktif saat terlihat
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: <DollarSign className="h-8 w-8 text-emerald-700" />,
              title: "Harga Tiket",
              content: (
                <>
                  <p className="text-3xl font-bold text-emerald-700">Rp 10.000</p>
                  <p className="text-sm text-slate-600 mb-4">
                    Per Orang (Weekday)
                  </p>
                  <p className="text-3xl font-bold text-emerald-700">Parkir</p>
                  <p className="text-sm text-slate-600">
                    Motor: Rp 5.000 | Mobil: Rp 10.000
                  </p>
                </>
              ),
            },
            {
              icon: <Clock className="h-8 w-8 text-emerald-700" />,
              title: "Jam Operasional",
              content: (
                <>
                  <p className="text-2xl font-bold text-emerald-700">
                    08:00 - 17:00
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Senin - Jumat
                  </p>
                  <p className="text-2xl font-bold text-emerald-700">
                    07:00 - 17:00
                  </p>
                  <p className="text-sm text-slate-600">
                    Sabtu - Minggu
                  </p>
                </>
              ),
            },
            {
              icon: <Calendar className="h-8 w-8 text-emerald-700" />,
              title: "Waktu Terbaik",
              content: (
                <>
                  <p className="font-semibold text-slate-800">Pagi Hari</p>
                  <p className="text-sm text-slate-600 mb-3">
                    07:00 - 10:00 (udara segar)
                  </p>
                  <p className="font-semibold text-slate-800">Sore Hari</p>
                  <p className="text-sm text-slate-600">
                    15:00 - 17:00 (sunset)
                  </p>
                </>
              ),
            },
            {
              icon: <MapPin className="h-8 w-8 text-emerald-700" />,
              title: "Lokasi",
              content: (
                <>
                  <p className="font-semibold text-slate-800">
                    Desa Gunung Kuning
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Kec. Sindang, Kab. Majalengka, Jawa Barat
                  </p>
                  <p className="text-sm text-slate-600">• 50km dari Cirebon</p>
                  <p className="text-sm text-slate-600">• 180km dari Bandung</p>
                </>
              ),
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants} // animasi tiap kartu
              whileHover={{ y: -6 }} // efek hover (naik sedikit)
              className="rounded-3xl border border-slate-200/50 bg-green-50 p-8 shadow-md backdrop-blur transition"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-200/60">
                  {item.icon}
                </div>
              </div>

              {/* Judul */}
              <h3 className="mb-6 text-center text-xl font-bold text-slate-800">
                {item.title}
              </h3>

              {/* Konten */}
              <div className="text-center space-y-1">
                {item.content}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= INFORMASI TAMBAHAN ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} // kondisi awal
          animate={isInView ? { opacity: 1, y: 0 } : {}} // animasi saat terlihat
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-slate-200/50 bg-green-50 p-10 shadow-md backdrop-blur"
        >
          <h2 className="mb-10 text-center text-2xl font-bold text-emerald-700">
            Informasi Tambahan
          </h2>

          {/* Grid info tambahan */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h4 className="mb-2 text-lg font-bold text-slate-800">
                Kapasitas
              </h4>
              <p className="text-slate-600">Max 500 pengunjung/hari</p>
            </div>

            <div className="text-center">
              <h4 className="mb-2 text-lg font-bold text-slate-800">
                Fasilitas Camping
              </h4>
              <p className="text-slate-600">Tenda (VVIP) - Rp.390.000</p>
              <p className="text-slate-600">
                Tenda (Reguler) - Rp.200.000 - Rp.250.000
              </p>
            </div>

            <div className="text-center">
              <h4 className="mb-2 text-lg font-bold text-slate-800">
                Sewa Perahu
              </h4>
              <p className="text-slate-600">Rp 10.000/orang - Dewasa</p>
              <p className="text-slate-600">Rp 5.000/orang - anak-anak</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export komponen Info agar bisa digunakan di routing
export default Info;