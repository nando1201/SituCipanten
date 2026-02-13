//nama : Fernando Adriyan salim
//nim : 10125904
//kelas : IF 10

// Import icon dari lucide-react
// Digunakan untuk icon sosial media & kontak
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

// Import NavLink dari react-router-dom
// Dipakai untuk navigasi antar halaman SPA (Single Page App)
import { NavLink } from "react-router-dom";

// Komponen Footer
// Berfungsi sebagai bagian footer (bagian bawah website)
export default function Footer() {
  return (
    // Elemen footer utama
    // Menggunakan background gradasi hijau
    <footer className="bg-linear-to-br from-green-700 to-green-600 text-white">
      
      {/* Container utama footer */}
      {/* Grid 1 kolom (mobile) & 4 kolom (desktop) */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* ================= BRAND ================= */}
        {/* Menampilkan nama brand & deskripsi singkat */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Situ Cipanten</h2>

          <p className="text-sm leading-relaxed text-green-100">
            Destinasi wisata alam terbaik di Majalengka. Nikmati keindahan
            danau, udara segar pegunungan, dan suasana damai untuk liburan
            sempurna.
          </p>

          {/* Social Media */}
          {/* Kumpulan icon sosial media */}
          <div className="flex gap-3 mt-6">
            <SocialIcon
              icon={<Facebook size={18} />}
              href="https://www.facebook.com/profile.php?id=61573233981488"
            />
            <SocialIcon
              icon={<Instagram size={18} />}
              href="https://www.instagram.com/situcipanten_mjlk/?hl=en"
            />
            <SocialIcon
              icon={<Youtube size={18} />}
              href="https://www.youtube.com/results?search_query=situ+cipanten+majalengka"
            />
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        {/* Navigasi cepat ke halaman website */}
        <div>
          <h3 className="font-semibold mb-4">Link Cepat</h3>

          <ul className="space-y-2 text-green-100 text-sm">
            {/* NavLink digunakan agar routing tanpa reload */}
            <li>
              <NavLink to="/tentang" className="hover:text-white transition">
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink to="/fasilitas" className="hover:text-white transition">
                Fasilitas
              </NavLink>
            </li>
            <li>
              <NavLink to="/aktivitas" className="hover:text-white transition">
                Aktivitas
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeri" className="hover:text-white transition">
                Galeri
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontak" className="hover:text-white transition">
                Kontak
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        {/* Menampilkan daftar layanan yang tersedia */}
        <div>
          <h3 className="font-semibold mb-4">Layanan</h3>

          <ul className="space-y-2 text-green-100 text-sm">
            <li>Tiket Masuk</li>
            <li>Paket Camping</li>
            <li>Sewa Perahu</li>
            <li>Area Memancing</li>
            <li>Gathering & Event</li>
            <li>Fotografi</li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        {/* Informasi kontak dan alamat */}
        <div>
          <h3 className="font-semibold mb-4">Kontak Kami</h3>

          <ul className="space-y-4 text-green-100 text-sm">
            {/* Alamat */}
            <li className="flex items-start gap-3">
              <MapPin size={18} />
              <span>
                Desa Gunung Kuning, Kec. Sindang <br />
                Kab. Majalengka, Jawa Barat 45471 <br />
                Indonesia
              </span>
            </li>

            {/* Nomor Telepon */}
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>
                +62 822-6260-0744 <br />
                +62 857-5917-7885
              </span>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <Mail size={18} />
              <span>wisatasitucipanten@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      {/* Copyright & credit */}
      <div className="border-t border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-green-100">
          <p>© 2026 Fernando-Arnevin. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ for Indonesian natural beauty</p>
        </div>
      </div>
    </footer>
  );
}

// ================= SOCIAL ICON COMPONENT =================
// Komponen reusable untuk icon sosial media
// Props:
// - icon : icon React (Facebook, Instagram, dll)
// - href : link tujuan
function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}                 // Link tujuan
      target="_blank"             // Buka di tab baru
      rel="noopener noreferrer"   // Keamanan link eksternal
      className="w-9 h-9 flex items-center justify-center rounded-full
                 bg-green-600 hover:bg-green-500 hover:scale-110
                 transition-transform duration-300"
    >
      {icon}
    </a>
  );
}
