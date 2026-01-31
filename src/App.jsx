import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import Tentang from "./Pages/Tentang";
import Fasilitas from "./Pages/Fasilitas";
import Aktivitas from "./Pages/Aktivitas";
import Galeri from "./Pages/Galeri";
import Info from "./Pages/Info";
import Kontak from "./Pages/Kontak";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} /> 
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/aktivitas" element={<Aktivitas />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/info" element={<Info />} /> 
        <Route path="/kontak" element={<Kontak />} /> 
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
