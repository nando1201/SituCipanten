import { useState } from "react";
import { motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "giri gustika",
    role: "Wisatawan",
    message:
      "Airnya jernih banget, sejuk tempat nya. Asik berenang disini bareng sama ikan2. Murah meriah liburan disini.",
    rating: 5,
  },
  {
    name: "Sam Purwanto (Ipunk)",
    role: "Travel Blogger",
    message:
      "Akes jalan ke lokasi ada beberapa yang rusak parah. Parkir kurang tertata dengan baik. Saat saya datang dapat parkir agak jauh diatas padahal diarea wisata masih ada yang kosong. Air situ sangat jernih dan sangat deras airnya. Sangat cocok untuk rekreasi keluarga. Banyak ikan koi yang cukup besar. Mungkin jumlahnya ribuan. Kalau beli pakan ikan ambil sendiri dipinggir situ dengan harga 2 ribu/ kantong atau 5 ribu/ 3 kantong. Usahakan datang pagi hari karena siang biasanya pengunjung sangat padat.",
    rating: 5,
  },
  {
    name: "Rien",
    role: "Wisatawan",
    message:[
      "Kami tidak pernah menyangka akan menemukan tempat ini. ",
      " Air danau sangat jernih sehinhga ikan2 di dalamnya terlihat jelas,",
        "tiket masuk sangat terjangkau tidak sampai 50 rb per orang. Udaranya sejuk.",
         "Banyak terdapat penjual makanan di lokasi.  Tersedia juga food court dgn",
          "makanan yg enak.  Ada jasa foto unt pengunjung yg ditawarkan dgn",
           "view ikan2 yg sangat cantik.  Harga jasa foto juga sangat murah",
            "hanya 10 rb untuk 3 kali take foto."],
    rating: 4,
  },
  {
    name: "Harry Priyadi",
    role: "Pengunjung",
    message:
    [
      "Tempat wisata yg menurut saya nyaman, bersih, harga murah, gak ada pungli,",
      " alamnya masih bagus, habitat elang ya, kalo beruntung bisa liat elang terbang ",
      "pendek diatas setu/kolamnya.Tolong jaga kualitas dan kembangkan tempat wisata ini, jangan sampai ada pungli dari pihak yg tidak bertanggung jawab.",
    ],
      rating: 5,
  },
  {
    name: "ruby mulyadi",
    role: "Wisatawan",
    message:
      "No pungli warganya ramah.. mantaap.",
    rating: 5,
  },
  {
    name: "maria sembiring",
    role: "Wisatawan",
    message:
      "Tempatnya nyaman untuk wisata menenangkan pikiran karena melihat air dan ikan. Tiket masuk 10rb/orang dan mobil 10rb. Ada foto di ayunan 10rb untuk 3 foto. Bisa berenang bareng ikan 10rb sewa pelampung. Beli makann ikan 5rb 3 sistem warung kejujuran karna ga ada yg jaga. Bebek gowes, perahu tidak naik jd ga tau tarifnya. Bisa bawa makan dr rumah jd piknik tinggal bawa tiket saja. Di sana jg banyak warung jajan dan harganya masih terjangkau. Ada elang terbang bebas di area situ.  Ada jg kolam renang tp agak mahal ya 30rb hanya ada 2 kolam untuk anak. Ada jg perosotan pelangi 10rb. Sedang di bangun villa dan area glamping. Disarankan datang hr biasa. Kalau liburan pasti penuh. Akses parkir mobil dan bus bisa masuk. Semoga kedepannya bisa makin berkembang.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = testimonials.length - visibleCards;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimoni Pengunjung
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Pengalaman langsung dari wisatawan Situ Cipanten
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Arrow Left */}
          <button
            onClick={prev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">

            {/* Track */}
            <motion.div
              animate={{ x: `-${index * 33.3333}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="w-full lg:w-1/3 flex shrink-0 px-4 pb-6"
                >
                  <div className="bg-white rounded-2xl shadow-md p-6 h-full">

                    <Quote className="text-green-600 mb-4" size={24} />

                    <p className="text-gray-600 mb-5 leading-relaxed">
                      “{item.message}”
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          size={16}
                          className={
                            star < item.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Arrow Right */}
          <button
            onClick={next}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}
