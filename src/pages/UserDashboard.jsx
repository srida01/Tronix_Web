import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import logo from "../images/Tronix_Logo.jpg";
import Galaxy from "../Components/Galaxy";
import { Instagram, Linkedin } from "lucide-react";

function UserDashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
  ];

  const handleLogout = async () => {
    await signOut();
    navigate("/register");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-black text-white relative overflow-y-auto">
      {/* Galaxy Background */}
<Galaxy
  focal={[0.5, 0.5]}
  rotation={[1.0, 0.0]}
  starSpeed={0.5}
  density={2}
  hueShift={140}
  speed={1}
  mouseInteraction={false}
  mouseRepulsion={false}
  rotationSpeed={0.1}
  glowIntensity={0.4}
  saturation={5}
  repulsionStrength={4}
  autoCenterRepulsion={0}
  twinkleIntensity={0.6}
  transparent={true}
  className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
/>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <img
              src={user?.profileImageUrl || logo}
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-cyan-400 shadow-lg"
            />
            <span className="text-white font-bold text-lg sm:text-xl">
              {user?.firstName || "User"}
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-purple-600/80 hover:shadow-lg hover:scale-105"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-110 hover:shadow-pink-500/50 transition-all duration-300"
            >
              Logout
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/90 backdrop-blur-lg shadow-lg"
            >
              <div className="flex flex-col space-y-3 px-6 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.path);
                      setIsOpen(false);
                    }}
                    className="text-white w-full text-left px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-purple-600/80 hover:shadow-md hover:scale-105"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-32 px-4 z-10 relative">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-orbitron text-4xl md:text-6xl font-extrabold tracking-widest 
                     text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                     drop-shadow-[0_0_35px_rgba(59,130,246,0.9)] text-center mb-16"
        >
          Welcome {user?.firstName || "User"} !
        </motion.h1>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          <div
            onClick={() => navigate("/user/events")}
            className="cursor-pointer bg-gradient-to-r from-cyan-700/60 to-purple-800/60 p-12 rounded-3xl flex items-center justify-center font-orbitron text-2xl md:text-4xl font-bold text-white shadow-xl hover:scale-105 transition-transform duration-300 text-center"
          >
            Events
          </div>
          <div
            onClick={() => navigate("/timeline")}
            className="cursor-pointer bg-gradient-to-r from-pink-700/60 to-purple-700/60 p-12 rounded-3xl flex items-center justify-center font-orbitron text-2xl md:text-4xl font-bold text-white shadow-xl hover:scale-105 transition-transform duration-300 text-center"
          >
            Timeline
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">Contact Us</h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">NITK Surathkal
              NH 66, Srinivasnagar
              Surathkal, Mangalore
              Karnataka 575025
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/tronixnitk?igsh=ZGt6aHI5bXdoNHR6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition"
            >
              <Instagram size={20} />
              <span className="font-electrolize"></span>
            </a>
            <a
              href="https://www.linkedin.com/company/tronix-nitk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition"
            >
              <Linkedin size={20} />
              <span className="font-electrolize"></span>
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

export default UserDashboard;
