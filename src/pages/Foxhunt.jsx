// src/pages/events/BallBalancer.jsx
import Galaxy from "../Components/Galaxy";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../images/Tronix_Logo.jpg";

function Foxhunt() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [{ name: "Dashboard", path: "/dashboard" }];

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
        density={1.5}
        hueShift={140}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* User Info */}
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

          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
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
      <div className="flex-1 flex flex-col items-center pt-32 px-6 z-10 relative">
        {/* Event Title */}
        <h1 className="font-orbitron text-4xl font-bold mb-6 text-cyan-400">
          FoxHunt
        </h1>

        {/* Event Image */}
        <img
          src="https://source.unsplash.com/1000x400/?robotics,technology"
          alt="Foxhunt"
          className="rounded-2xl shadow-lg mb-8 w-full max-w-5xl"
        />

        {/* Event Info */}
        <div className="bg-gradient-to-r from-cyan-700/60 to-purple-800/60 p-8 rounded-2xl shadow-lg w-full max-w-4xl mb-12 text-center">
          <h2 className="font-orbitron text-2xl font-semibold mb-4">Event Details</h2>
          <p className="font-electrolize text-gray-300 mb-2">
            <strong>Time:</strong> 10:00 AM - 11:30 AM
          </p>
          <p className="font-electrolize text-gray-300 mb-2">
            <strong>Venue:</strong> Main Auditorium
          </p>
          <p className="font-electrolize text-gray-300">
            In Ball Balancer, teams must design a mechanism to balance a rolling
            ball on a dynamic platform using precision, sensors, and control
            systems. The goal is to keep the ball balanced for the longest
            duration without letting it drop.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-gradient-to-r from-purple-700/60 to-cyan-800/60 p-8 rounded-2xl shadow-lg w-full max-w-4xl mb-16">
          <h2 className="font-orbitron text-2xl font-semibold mb-6 text-center">
            Team Registration
          </h2>
          <form className="grid grid-cols-1 gap-6">
            {/* Team Name */}
            <div>
              <label className="block font-electrolize mb-2">Team Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Team Members */}
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-electrolize mb-2">
                    Member {num} Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block font-electrolize mb-2">
                    Member {num} Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
              </div>
            ))}

            {/* Team Leader Phone */}
            <div>
              <label className="block font-electrolize mb-2">
                Team Leader Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-110 transition-transform duration-300"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">Contact Us</h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">NITK Surathkal</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/tronixnitk"
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
        <p className="text-gray-500 text-xs mt-6 font-electrolize">
          © {new Date().getFullYear()} TRONIX. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Foxhunt;
