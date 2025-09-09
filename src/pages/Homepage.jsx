import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import logo from "../images/Tronix_Logo.jpg";
import { Instagram, Linkedin } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
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
        starSpeed={0.5}
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
            onClick={() => navigate(isSignedIn ? "/dashboard" : "/register")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg 
            hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
          >
            {isSignedIn ? "Go To Dashboard" : "Registration"}
          </button>

          {!isSignedIn && <button
            onClick={() => navigate("/events")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg 
            hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
          >
            Events
          </button>}
        </div>

        <motion.h2
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="font-orbitron text-xl md:text-2xl lg:text-3xl font-bold 
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-cyan-400 via-purple-400 to-pink-500 
                     drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]
                     mt-6 text-center"
        >
          Scroll Down
        </motion.h2>
      </div>

      {/* About Us Section */}
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 md:px-10 md:py-20 gap-10 md:gap-16">
        {/* Logo / Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="relative p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 
                       shadow-[0_0_40px_rgba(236,72,153,0.8)] 
                       animate-border-gradient"
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="w-32 md:w-48 rounded-full border-4 border-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* About Us Box / Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-lg p-[2px] rounded-[2.5rem] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.5)]"
        >
          <div className="bg-black/70 backdrop-blur-lg rounded-[2.5rem] p-6 md:p-10">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 flowing-text text-center md:text-left">
              About Us
            </h2>
            <p className="font-electrolize text-base md:text-lg leading-relaxed text-gray-200 text-center md:text-left">
              <span className="text-cyan-400 font-semibold">TRONIX</span> is a
              hub of <span className="text-purple-400">innovation</span> and{" "}
              <span className="text-pink-400">creativity</span>. We connect
              brilliant minds to explore tech, craft futuristic solutions, and
              empower the next generation of innovators.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Address */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">
              Contact Us
            </h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">
              NITK Surathkal
              NH 66, Srinivasnagar
              Surathkal, Mangalore
              Karnataka 575025
            </p>
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
            </a>
            <a
              href="https://www.linkedin.com/company/tronix-nitk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition"
            >
              <Linkedin size={20} />
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
