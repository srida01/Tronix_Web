import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import logo from "../images/Tronix_Logo.jpg";
import { Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setShowScrollTop(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black text-white relative">
      {/* Galaxy Background */}
      <Galaxy
        focal={[0.5, 0.5]}
        rotation={[1.0, 0.0]}
        starSpeed={0.3}
        density={2.0}
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

      <Navbar />

      {/* Hero Section */}
      <div
        id="hero"
        className="relative z-10 flex flex-col items-center justify-center h-screen space-y-6 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-orbitron text-6xl md:text-8xl font-extrabold tracking-widest 
                     text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                     drop-shadow-[0_0_35px_rgba(59,130,246,0.9)]"
        >
          TRONIX
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => navigate("/events")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 font-orbitron rounded-full font-semibold shadow-lg 
            hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300 w-[200px]"
          >
            Register Now
          </button>
        </div>

      </div>

      
      {/* Footer Section */}
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Address */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">
              Contact Us
            </h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">
              NITK Surathkal<br></br>
              NH 66, Srinivasnagar<br></br>
              Surathkal, Mangalore<br></br>
              Karnataka 575025
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

        <p className="text-gray-500 text-xs mt-6 font-electrolize">
          © {new Date().getFullYear()} TRONIX. All Rights Reserved.
        </p>
      </footer>
      
    </div>
  );
}

export default Home;
