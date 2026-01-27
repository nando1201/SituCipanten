import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="h-screen bg-[url('/hero.jpg')] bg-cover">
        {/* konten */}
      </main>
    </>
  );
};

export default App;
