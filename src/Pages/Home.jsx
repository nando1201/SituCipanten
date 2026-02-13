//nama : Fernando Adriyan salim
//nim : 10125904
//kelas : IF 10

import React from 'react'

// Import komponen Hero
// Biasanya dipakai untuk bagian paling atas halaman (headline, gambar besar, CTA)
import Hero from '../components/Hero'

// Import komponen Welcome
// Berisi sambutan / pengenalan singkat tentang destinasi atau website
import Welcome from '../components/Welcome'

// Import komponen Testimonials
// Digunakan untuk menampilkan testimoni / pendapat pengunjung
import Testimonials from '../components/Testimonials'

// Import komponen LatestNews
// Menampilkan berita atau informasi terbaru
import LatestNews from '../components/LatestNews'

// Komponen Home
// Ini adalah halaman utama (landing page) website
const Home = () => {
  return (
    <div>
      {/* Hero section
          Berfungsi sebagai pembuka halaman,
          biasanya berisi judul besar dan visual utama */}
      <Hero />

      {/* Welcome section
          Menjelaskan gambaran umum tentang Situ Cipanten */}
      <Welcome />

      {/* Latest News section
          Menampilkan update / berita terbaru */}
      <LatestNews />

      {/* Testimonials section
          Menampilkan ulasan atau pengalaman pengunjung */}
      <Testimonials />
    </div>
  )
}

// Export Home agar bisa digunakan di routing (React Router)
export default Home
