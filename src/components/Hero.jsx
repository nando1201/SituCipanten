import { motion } from "motion/react";
import { NavLink } from 'react-router-dom';


export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/Hero1.png)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Situ Cipanten
            </h1>

            <p className="text-lg md:text-xl mb-2">
              Surga Tersembunyi di Majalengka
            </p>

            <p className="text-sm md:text-base text-white/80 mb-8">
              Nikmati Keindahan Alam, Udara Segar, dan Kedamaian
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-4 flex-col sm:flex-row"
            >
            <NavLink to="/tentang">
            <button className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full transition">
              Jelajahi Sekarang
            </button>
            </NavLink>
            <NavLink to="/kontak"> 
              <button className="border border-white/70 hover:bg-white hover:text-black px-6 py-3 rounded-full transition">
                Hubungi Kami
              </button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
