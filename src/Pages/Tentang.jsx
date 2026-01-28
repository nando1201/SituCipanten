import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Sejarah from "../components/Sejarah";

const Tentang = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-linear-to-br from-white to-green-50 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* TEXT */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold leading-tight text-green-800">
              Tentang Situ <br /> Cipanten
            </h2>

            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              Situ Cipanten adalah destinasi wisata alam yang terletak di
              Majalengka, Jawa Barat. Dengan luas sekitar 30 hektar, danau ini
              dikelilingi oleh perbukitan hijau dan pepohonan rindang yang
              menciptakan suasana tenang dan damai.
            </p>

            <p className="mb-4 text-justify leading-relaxed text-gray-700">
              Tempat ini sempurna untuk melepas penat dari rutinitas sehari-hari.
              Udara sejuk pegunungan, pemandangan danau yang memukau, dan suasana
              alami menjadikan Situ Cipanten pilihan ideal untuk liburan
              keluarga, gathering, atau sekadar menikmati keindahan alam
              Indonesia.
            </p>

            <p className="text-justify leading-relaxed text-gray-700">
              Dengan fasilitas lengkap dan berbagai aktivitas menarik, kami
              berkomitmen memberikan pengalaman wisata terbaik yang tak
              terlupakan bagi setiap pengunjung.
            </p>

            {/* STATS */}
            <div className="mt-10 flex gap-12">
              {[
                { value: "30+", label: "Hektar Area", delay: 0.2 },
                { value: "10K+", label: "Pengunjung", delay: 0.3 },
                { value: "4.8", label: "Rating", delay: 0.4 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-green-800">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/src/assets/tentang.png"
                alt="Situ Cipanten"
                className="h-90 full object-cover md:w-130"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* SEJARAH SECTION */}
      <Sejarah />
    </section>
  );
};

export default Tentang;
