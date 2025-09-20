// src/pages/Events.jsx
import React from "react";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react"; // icons

const events = [
    {
    title: "Fox Hunt",
    desc: "A fun treasure hunt with riddles and tech clues.",
    time: "9:30 PM - 10:30 PM",
    venue: "Campus Area",
    img: "https://source.unsplash.com/400x250/?adventure,clues",
    link:" https://forms.gle/r78kvsaiw2tGo1vcA",
  },
  {
    title: "Lights and Lasers",
    desc: "Experience fascinating laser and light experiments with science.",
    time: "2:00 PM - 3:00 PM",
    venue: "Physics Block",
    img: "https://source.unsplash.com/400x250/?laser,lights",
    link:" https://forms.gle/Ek4REzF8B8qwi7qx9",
  },
  {
    title: "Tradeoff",
    desc: "A fun technical quiz + problem solving event with surprises.",
    time: "28th Sept, 1:30 PM - 4:30 PM",
    venue: "Department of Electronic and Communitcation Engineering NITK ",
    img: "https://source.unsplash.com/400x250/?puzzle,team",
    link:" https://forms.gle/NxjYgEtck1h4MYJQ7",
  },
  {
    title: "Football CV",
    desc: "Computer vision applied to football tracking and analysis.",
    time: "8:00 PM - 9:00 PM",
    venue: "Ground + AI Lab",
    img: "https://source.unsplash.com/400x250/?football,ai",
    link:"https://forms.gle/bQohMYxsLcYV1iLBA",
  },
];

function Events() {
  let navigate = useNavigate();

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
      {/* Events Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Centered Heading */}
        <div className="w-full flex justify-center">
          <h1
            className="font-orbitron text-6xl md:text-8xl font-extrabold tracking-widest 
                       text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500
                       drop-shadow-[0_0_35px_rgba(59,130,246,0.9)] "
          >
            Our Events
          </h1>
        </div>

        {/* Grid of Event Cards - 1 per row on mobile, 2 per row on all larger screens */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mt-12">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden 
                         hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-2xl font-orbitron font-bold mb-2 text-cyan-300">
                  {event.title}
                </h2>
                <p className="text-sm font-orbitron text-gray-300 mb-4 flex-grow">
                  {event.desc}
                </p>
                <p className="text-sm">🕒 {event.time}</p>
                <p className="text-sm mb-4">📍 {event.venue}</p>

                {/* Registration Button */}
                <a href={event.link} rel="noopener noreferrer" className="w-full">
                <button
                  className="w-full font-electrolize bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg 
                             transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]"
                >
                  Register
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
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
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/tronixnitk?igsh=ZGt6aHI5bXdoNHR6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition"
            >
              <Instagram size={20} />
              <span>@tronixnitk</span>
            </a>
            <a
              href="https://www.linkedin.com/company/tronix-nitk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition"
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

export default Events;
