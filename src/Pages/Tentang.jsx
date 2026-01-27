import React from "react";
import Sejarah from "../components/Sejarah";



const Tentang = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white to-green-50 pt-19">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* TEXT */}
          <div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-green-800">
              Tentang Situ <br /> Cipanten
            </h2>

            <p className="mb-4 text-justify text-gray-700 leading-relaxed">
              Situ Cipanten adalah destinasi wisata alam yang terletak di
              Majalengka, Jawa Barat. Dengan luas sekitar 30 hektar, danau ini
              dikelilingi oleh perbukitan hijau dan pepohonan rindang yang
              menciptakan suasana tenang dan damai.
            </p>

            <p className="mb-4 text-justify text-gray-700 leading-relaxed">
              Tempat ini sempurna untuk melepas penat dari rutinitas sehari-hari.
              Udara sejuk pegunungan, pemandangan danau yang memukau, dan suasana
              alami menjadikan Situ Cipanten pilihan ideal untuk liburan
              keluarga, gathering, atau sekadar menikmati keindahan alam
              Indonesia.
            </p>

            <p className="text-justify text-gray-700 leading-relaxed">
              Dengan fasilitas lengkap dan berbagai aktivitas menarik, kami
              berkomitmen memberikan pengalaman wisata terbaik yang tak
              terlupakan bagi setiap pengunjung.
            </p>

            {/* STATS */}
            <div className="mt-10 flex gap-12">
              <div>
                <p className="text-3xl font-bold text-green-800">30+</p>
                <p className="text-sm text-gray-600">Hektar Area</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-800">10K+</p>
                <p className="text-sm text-gray-600">Pengunjung</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-800">4.8</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="src/assets/tentang.png"
                alt="Situ Cipanten"
                className="h-[360px] w-full object-cover md:w-[520px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
  
      <Sejarah />
    </section>
  );
};

export default Tentang;
