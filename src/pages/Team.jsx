// src/pages/Team.jsx
import React from "react";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import { Instagram, Linkedin } from "lucide-react";

// Example team members
const teamMembers = [
  {
    name: "Alice Johnson",
    designation: "President",
    photo: "https://randomuseitspi//women/45.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Bob Smith",
    designation: "Vice President",
    photo: "https://randoits/men/46.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Clara Lee",
    designation: "Lead Designer",
    photo: "https://randomusmen/47.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "David Kim",
    designation: "Tech Head",
    photo: "https://randomuser.me/api/popg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Alice Johnson",
    designation: "President",
    photo: "https://randomuseitspi//women/45.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Bob Smith",
    designation: "Vice President",
    photo: "https://randoits/men/46.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Clara Lee",
    designation: "Lead Designer",
    photo: "https://randomusmen/47.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "David Kim",
    designation: "Tech Head",
    photo: "https://randomuser.me/api/popg",
    instagram: "#",
    linkedin: "#",
  },
];

function Team() {
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

      {/* Navbar */}
      <Navbar />

      {/* Team Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-20">
        <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-12 text-center">
          Our Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-black/70 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white/30 mb-4"
              />
              <h2 className="font-orbitron text-xl md:text-2xl font-semibold text-cyan-400">
                {member.name}
              </h2>
              <p className="font-electrolize text-gray-300 text-sm md:text-base mb-3">
                {member.designation}
              </p>
              <div className="flex space-x-4">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      

    </div>
  );
}

export default Team;
