// src/pages/Gallery.jsx
import React from "react";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import { Instagram, Linkedin } from "lucide-react";

// Replace these URLs with your actual event images
const galleryImages = [
  "https://source.unsplash.com/800x600/?technology,event",
  "https://source.unsplash.com/800x600/?robotics,event",
  "https://source.unsplash.com/800x600/?coding,event",
  "https://source.unsplash.com/800x600/?workshop,event",
  "https://source.unsplash.com/800x600/?students,event",
  "https://source.unsplash.com/800x600/?competition,event",
  "https://source.unsplash.com/800x600/?science,event",
  "https://source.unsplash.com/800x600/?innovation,event",
];

function Gallery() {
  return (
    <div className="w-screen min-h-screen bg-black overflow-y-auto text-white relative">
      {/* Galaxy Background */}
      <Galaxy
        focal={[0.5, 0.5]}
        rotation={[1.0, 0.0]}
        starSpeed={0.5}
        density={1.5}
        hueShift={140}
        disableAnimation={false}
        speed={1}
        mouseInteraction={true}
        mouseRepulsion={true}
        rotationSpeed={0.1}
        glowIntensity={0.4}
        saturation={0.0}
        repulsionStrength={4}
        autoCenterRepulsion={0}
        twinkleIntensity={0.3}
        transparent={true}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Navbar */}
      <Navbar />
      <br />

      {/* Gallery Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-6xl md:text-7xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-center drop-shadow-[0_0_35px_rgba(59,130,246,0.9)] mb-16">
          Last Year's Event Gallery
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
            <p className="font-electrolize text-gray-300 text-sm mt-1">NITK Surathkal</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/tronixnitk?igsh=ZGt6aHI5bXdoNHR6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition"
            >
              <Instagram size={20} />
              <span className="font-electrolize">@Tronix_NITK</span>
            </a>
            <a
              href="https://www.linkedin.com/company/tronix-nitk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition"
            >
              <Linkedin size={20} />
              <span className="font-electrolize">/Tronix_NITK</span>
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
