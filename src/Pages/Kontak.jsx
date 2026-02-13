//nama : Arnevin Renata Ahmad Barkah
//nim : 10125914
//kelas : IF 10

// Import React dan hooks
// useState → menyimpan data input form
// useRef → referensi elemen DOM
import React, { useState, useRef } from "react";

// Import icon dari lucide-react
// Digunakan untuk icon kontak (telepon, email, lokasi, tombol kirim)
import { Phone, Mail, MapPin, Send } from "lucide-react";

// motion → animasi
// useInView → mendeteksi elemen saat masuk viewport
import { motion, useInView } from "motion/react";

/**
 * Variants animasi untuk container
 * → Digunakan agar child muncul satu per satu (stagger effect)
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

/**
 * Variants animasi untuk item
 * → Efek fade + slide ke atas
 */
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/**
 * Komponen Contact
 * → Menampilkan form kontak, info kontak, dan peta lokasi
 */
const Contact = () => {
  /**
   * State formData
   * → Menyimpan nilai input form (controlled component)
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ref → referensi ke header section
  const ref = useRef(null);

  // useInView → animasi aktif saat elemen terlihat
  const isInView = useInView(ref, {
    once: true,       // animasi hanya sekali
    margin: "-100px", // aktif sebelum terlihat penuh
  });

  /**
   * handleChange
   * → Menangani perubahan input form
   * → Mengupdate state berdasarkan name input
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * handleSubmit
   * → Mencegah reload halaman
   * → Menangani submit form (sementara log ke console)
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    // Section utama halaman Contact
    <section className="min-h-screen bg-linear-to-br from-white to-green-50 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* ================= HEADER ================= */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}     // kondisi awal
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 pt-8 text-5xl font-bold text-emerald-800 md:text-6xl">
            Hubungi Kami
          </h1>
          <p className="text-lg text-gray-600">
            Ada pertanyaan? Kami siap membantu Anda merencanakan kunjungan
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* ================= FORM KONTAK ================= */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm"
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Kirim Pesan
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input dinamis */}
              {[
                {
                  label: "Nama Lengkap",
                  name: "name",
                  type: "text",
                  placeholder: "Masukkan nama Anda",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "nama@email.com",
                },
                {
                  label: "Nomor Telepon",
                  name: "phone",
                  type: "tel",
                  placeholder: "08xx-xxxx-xxxx",
                },
              ].map((field, index) => (
                <div key={index}>
                  <label className="mb-3 block text-sm font-medium text-gray-800">
                    {field.label}
                  </label>

                  {/* Input controlled */}
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full rounded-2xl bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              ))}

              {/* Textarea pesan */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-800">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  required
                  className="w-full resize-none rounded-2xl bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              {/* Tombol submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-700 py-4 font-semibold text-white transition hover:bg-emerald-800"
              >
                <Send className="h-5 w-5" />
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* ================= INFO KONTAK ================= */}
          <motion.div variants={containerVariants} className="space-y-6">
            {[
              {
                icon: <Phone className="h-7 w-7 text-emerald-700" />,
                title: "Telepon",
                lines: ["+62 822-6260-0744", "+62 857-5917-7885"],
              },
              {
                icon: <Mail className="h-7 w-7 text-emerald-700" />,
                title: "Email",
                lines: ["wisatasitucipanten@gmail.com"],
              },
              {
                icon: <MapPin className="h-7 w-7 text-emerald-700" />,
                title: "Alamat",
                lines: [
                  "Desa Gunung Kuning, Kec. Sindang",
                  "Kab. Majalengka, Jawa Barat 45471",
                  "Indonesia",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }} // efek hover
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="flex gap-5">
                  {/* Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100/70">
                    {item.icon}
                  </div>

                  {/* Teks */}
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ================= MAP ================= */}
            <motion.div
              variants={itemVariants}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative h-80 w-full">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.029112998694!2d108.3251659239966!3d-6.823925093173877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2406b0ed6805%3A0x86493d5c4d863bc5!2sWisata%20Situ%20Cipanten!5e1!3m2!1sid!2sid!4v1770030140605!5m2!1sid!2sid"  
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;