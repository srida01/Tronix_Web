// src/pages/UserEvents.jsx
import React, { useState } from "react";
import Galaxy from "../Components/Galaxy";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../images/Tronix_Logo.jpg";

function UserEvents() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items
  const navItems = [{ name: "Dashboard", path: "/dashboard" }];

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const events = [
    {
      title: "Lights and Lasers",
      slug: "Lights",
      desc: "Experience fascinating laser and light experiments with science.",
      time: "2:00 PM - 3:00 PM",
      venue: "Physics Block",
      img: "https://source.unsplash.com/400x250/?laser,lights",
    },
    {
      title: "Tradeoff",
      slug: "Trade",
      desc: "A fun technical quiz + problem solving event with surprises.",
      time: "5:00 PM - 6:00 PM",
      venue: "Seminar Hall 2",
      img: "https://source.unsplash.com/400x250/?puzzle,team",
    },
    {
      title: "Football CV",
      slug: "Football",
      desc: "Computer vision applied to football tracking and analysis.",
      time: "8:00 PM - 9:00 PM",
      venue: "Ground + AI Lab",
      img: "https://source.unsplash.com/400x250/?football,ai",
    },
    {
      title: "Fox Hunt",
      slug: "Foxhunt",
      desc: "A fun treasure hunt with riddles and tech clues.",
      time: "9:30 PM - 10:30 PM",
      venue: "Campus Area",
      img: "https://source.unsplash.com/400x250/?adventure,clues",
    },
  ];

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
        className="absolute top-0 left-0 w-full h-full"
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

          {/* Mobile menu button */}
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
      <div className="flex-1 flex flex-col items-center pt-32 px-6 z-10 relative">
        <h1
          className="font-orbitron text-6xl md:text-8xl font-extrabold tracking-widest 
                     text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                     drop-shadow-[0_0_35px_rgba(59,130,246,0.9)] mb-12"
        >
          Our Events
        </h1>
        {/* Changed grid to 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-700/60 to-purple-800/60 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="font-orbitron text-xl font-semibold mb-2">
                {event.title}
              </h2>
              <p className="text-gray-300 text-sm mb-2">{event.desc}</p>
              <p className="text-gray-400 text-xs mb-1">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-400 text-xs mb-4">
                <strong>Venue:</strong> {event.venue}
              </p>
              <button
                onClick={() => navigate(`/events/${event.slug}`)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-lg font-semibold shadow-md hover:scale-110 transition-transform duration-300 w-full"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">
              Contact Us
            </h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">
              NITK Surathkal
            </p>
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

export default UserEvents;
