import { motion } from "motion/react";
import { Leaf, Mountain, Droplets } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-green-600 font-semibold mb-3">
            Welcome to Situ Cipanten
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Pesona Alam yang Menenangkan <br />
            di Jantung Majalengka
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Situ Cipanten merupakan destinasi wisata alam yang menawarkan
            keindahan danau jernih, udara pegunungan yang sejuk, serta suasana
            tenang yang cocok untuk melepas penat dari rutinitas harian.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Dengan berbagai fasilitas wisata dan aktivitas menarik, Situ
            Cipanten menjadi pilihan ideal untuk liburan keluarga, komunitas,
            maupun wisatawan pecinta alam.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <Feature
            icon={<Droplets size={28} />}
            title="Danau Jernih"
            desc="Air alami yang bersih dan menyegarkan."
          />
          <Feature
            icon={<Mountain size={28} />}
            title="Udara Sejuk"
            desc="Lingkungan pegunungan yang asri."
          />
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

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
