// src/pages/Gallery.jsx
import React from "react";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import { Instagram, Linkedin } from "lucide-react";
import img1 from "../images/20191018_141759.jpg";
import img2 from "../images/20191018_150221.jpg";
import img3 from "../images/20191019_151740.jpg";
import img4 from "../images/20191019_222501.jpg";
import img5 from "../images/20191020_154803.jpg";
import img6 from "../images/IMG_20191019_153820.jpg";
import img7 from "../images/IMG_20191019_182729.jpg";
import img8 from "../images/IMG_20191020_180943.jpg";
// Replace these URLs with your actual event images
const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

function Gallery() {
  return (
    <div className="w-screen min-h-screen bg-black overflow-y-auto text-white relative">
      {/* Galaxy Background */}
      <Galaxy
        focal={[0.5, 0.5]}
        rotation={[1.0, 0.0]}
        starSpeed={0.5}
        density={2}
        hueShift={140}
        disableAnimation={false}
        speed={1}
        mouseInteraction={true}
        mouseRepulsion={true}
        rotationSpeed={0.1}
        glowIntensity={0.4}
        saturation={5}
        repulsionStrength={4}
        autoCenterRepulsion={0}
        twinkleIntensity={0.6}
        transparent={true}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Navbar */}
      <Navbar />
      <br />
      <br />


      {/* Gallery Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-6xl md:text-7xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-center drop-shadow-[0_0_35px_rgba(59,130,246,0.9)] mb-16">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-white/20 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              <img
                src={img}
                alt={`Event ${idx + 1}`}
                className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Address */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">Contact Us</h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">NITK Surathkal
              NH 66, Srinivasnagar<br></br>
              Surathkal, Mangalore<br></br>
              Karnataka 575025<br></br>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex  gap-6">
  <a
    href="https://www.instagram.com/tronixnitk?igsh=ZGt6aHI5bXdoNHR6"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
  >
    <Instagram size={20} />
    <span>@tronixnitk</span>
  </a>

  <a
    href="https://www.linkedin.com/company/tronix-nitk/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
  >
    <Linkedin size={20} />
    <span>/Tronix NITK</span>
  </a>
</div>

        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-6 font-electrolize">
          © {new Date().getFullYear()} TRONIX. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Gallery;
