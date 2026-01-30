import { motion } from "motion/react";
import { Award, Leaf, ShieldCheck } from "lucide-react";

const awards = [
  {
    icon: <Award size={32} />,
    title: "Best Natural Tourism",
    year: "2024",
    desc: "Penghargaan destinasi wisata alam terbaik tingkat Jawa Barat.",
  },
  {
    icon: <Leaf size={32} />,
    title: "Eco Tourism Award",
    year: "2023",
    desc: "Komitmen dalam menjaga kelestarian alam dan lingkungan.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Clean & Safe Destination",
    year: "2022",
    desc: "Destinasi wisata bersih, aman, dan nyaman bagi pengunjung.",
  },
];

export default function Awards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Penghargaan Kami
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Berbagai penghargaan yang kami raih sebagai bentuk komitmen dalam
            memberikan pengalaman wisata terbaik.
          </p>
        </div>

        {/* Awards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                {award.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {award.title}
              </h3>

              <p className="text-sm text-green-600 font-medium mt-1">
                {award.year}
              </p>

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
