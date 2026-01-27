import { motion } from "framer-motion";

export default function Sejarah() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold text-green-800">
            Sejarah Situ Cipanten
          </h2>
          <p className="mt-4 text-gray-600">
            Jejak alam dan perjalanan waktu yang membentuk keindahan Situ Cipanten
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              Situ Cipanten awalnya merupakan sebuah danau alami yang terbentuk
              dari sumber mata air pegunungan di wilayah Majalengka, Jawa Barat.
              Sejak dahulu, kawasan ini dimanfaatkan oleh masyarakat sekitar
              sebagai sumber air dan tempat beristirahat karena suasananya yang
              sejuk dan tenang.
            </p>

            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              Seiring berjalannya waktu, keindahan alam yang dimiliki Situ Cipanten
              mulai dikenal luas. Pemerintah daerah dan masyarakat setempat
              kemudian berinisiatif mengembangkan kawasan ini menjadi destinasi
              wisata alam tanpa menghilangkan nilai keasrian dan kelestariannya.
            </p>

            <p className="text-justify leading-relaxed text-gray-700">
              Hingga saat ini, Situ Cipanten terus berkembang sebagai salah satu
              ikon wisata unggulan Majalengka yang memadukan keindahan alam,
              kearifan lokal, serta pengalaman wisata yang nyaman bagi setiap
              pengunjung.
            </p>
          </motion.div>

          {/* Timeline / Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-green-50 p-8 shadow-lg"
          >
            <ul className="space-y-6">
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
