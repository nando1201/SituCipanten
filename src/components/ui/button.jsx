// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/70 backdrop-blur-md shadow"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <h1 className="text-xl font-bold text-white mix-blend-difference">
//           Situ Cipanten
//         </h1>

//         {/* Menu */}
//         <ul className="hidden md:flex items-center gap-8 font-medium text-white mix-blend-difference">
//           <li className="hover:text-green-400 cursor-pointer">Beranda</li>
//           <li className="hover:text-green-400 cursor-pointer">Tentang</li>
//           <li className="hover:text-green-400 cursor-pointer">Fasilitas</li>
//           <li className="hover:text-green-400 cursor-pointer">Aktivitas</li>
//           <li className="hover:text-green-400 cursor-pointer">Galeri</li>
//           <li className="hover:text-green-400 cursor-pointer">Info</li>
//           <li className="hover:text-green-400 cursor-pointer">Kontak</li>
//         </ul>

//         {/* Button */}
//         <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition">
//           Reservasi
//         </button>
//       </div>
//     </nav>
//   );
// }
