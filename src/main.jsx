//nama : Fernando Adriyan salim
//nim : 10125904
//kelas : IF 10


// StrictMode → fitur bawaan React
// Digunakan untuk membantu mendeteksi bug, deprecated API,
// dan potensi masalah pada aplikasi saat development
import { StrictMode } from 'react'

// createRoot → API React 18 untuk membuat root aplikasi
// Digunakan untuk merender React ke dalam DOM
import { createRoot } from 'react-dom/client'

// Import file CSS global
// Berisi styling dasar dan konfigurasi Tailwind CSS
import './index.css'

// Import komponen App
// App → komponen utama/root dari seluruh aplikasi
import App from './App.jsx'

// createRoot(...).render()
// → Menentukan elemen HTML dengan id="root"
// → Merender aplikasi React ke dalam elemen tersebut
createRoot(document.getElementById('root')).render(
  
  // StrictMode membungkus seluruh aplikasi
  // Hanya aktif di mode development
  // Tidak berpengaruh di production
  <StrictMode>
    
    {/* App
        → Komponen utama aplikasi
        → Berisi routing, navbar, footer, dan halaman
    */}
    <App />

  </StrictMode>,
)
