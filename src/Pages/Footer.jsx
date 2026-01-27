import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-700 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Situ Cipanten</h2>
          <p className="text-sm leading-relaxed text-green-100">
            Destinasi wisata alam terbaik di Majalengka. Nikmati keindahan
            danau, udara segar pegunungan, dan suasana damai untuk liburan
            sempurna.
          </p>

          <div className="flex gap-3 mt-6">
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Youtube size={18} />} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Link Cepat</h3>
          <ul className="space-y-2 text-green-100 text-sm">
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white">Fasilitas</a></li>
            <li><a href="#" className="hover:text-white">Aktivitas</a></li>
            <li><a href="#" className="hover:text-white">Galeri</a></li>
            <li><a href="#" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>

        {/* Services */}
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

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Kontak Kami</h3>
          <ul className="space-y-4 text-green-100 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} />
              <span>
                Desa Cipanten, Kec. Cijulang,<br />
                Kab. Majalengka, Jawa Barat
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@situcipanten.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-green-100">
          <p>© 2026 Situ Cipanten Tourism. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ for Indonesian natural beauty</p>
        </div>
      </div>

      {/* Scroll To Top */}
      <button className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-600 p-3 rounded-full shadow-lg transition">
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500 cursor-pointer transition">
      {icon}
    </div>
  );
}