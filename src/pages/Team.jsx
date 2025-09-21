// src/pages/Team.jsx
import React from "react";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import { Instagram, Linkedin } from "lucide-react";
import con from "../images/con.jpeg"
import event1 from "../images/events.jpeg"
import proj1 from "../images/proj1.jpeg"
import proj2 from "../images/proj2.jpeg"
import media from "../images/media.jpeg"
import invenhead from "../images/invenhead.jpeg"
import web1 from "../images/web1.jpeg"
import projectlead from "../images/projectlead.jpeg"
import logistics from "../images/logistics.jpeg"
// Example team members
const teamMembers = [
  {
    name: "Shreyas Aney",
    designation: "Convener",
    photo: con,
    instagram: "https://www.instagram.com/aney_shreyas?igsh=MXIzcnBqZGcxaWVlNQ==",
    linkedin: "https://www.linkedin.com/in/shreyasaney",
  },
  {
    name: "Ninad Srinivasa Rao",
    designation: "Events & Projects Lead",
    photo: event1,
    instagram: "https://www.instagram.com/n1n4d_r4o?igsh=MTdmdWYwaDZ0anlsdg==",
    linkedin: "https://www.linkedin.com/in/ninad-srinivasa-rao-744250337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Aditya Sarma",
    designation: "Inventory Head",
    photo: invenhead,
    instagram: "https://www.instagram.com/evas_1331?igsh=MTAyOWdmaDk3aHczag==",
    linkedin: "https://www.linkedin.com/in/edara-aditya",
  },
  {
    name: "Saivarshith",
    designation: "Logistics Head",
    photo: logistics,
    instagram: "https://www.instagram.com/saivarshithm?igsh=MTR4dXZxNmx3d3RqMw==",
    linkedin: "https://www.linkedin.com/in/saivarshithmitukula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Karthikeswar Nadh",
    designation: "Project Lead",
    photo: proj1,
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/karthikeswarnadh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Debarghya Banerjee",
    designation: "Project Lead",
    photo: proj2,
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/debarghya-banerjee-5b27671b7",
  },
  {
    name: "Sanjana Dalal",
    designation: "Media Head",
    photo: media,
    instagram: "https://www.instagram.com/sanjana12_d?igsh=MTdoeXNmdTB6NGhxMg==",
    linkedin: "https://www.linkedin.com/in/sanjana1204",
  },
  {
    name: "Sadhana Krishna Kotha",
    designation: "Project Lead",
    photo: projectlead,
    instagram: "https://www.instagram.com/sadhanakrishnak?igsh=MWd4eXRtNmVvaXN2dg==",
    linkedin: "https://www.linkedin.com/in/sadhanakrishnakotha",
  },
  {
    name: "Prem Sai",
    designation: "Web Team",
    photo: web1,
    instagram: "https://www.instagram.com/_prem.sai_?igsh=c202b2s1eDV3YXNh",
    linkedin: "https://www.linkedin.com/in/prem-sai-85520a313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
      <br></br>
      <br></br>

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
                className="w-40 h-40 md:w-36 md:h-36 rounded-full border-4 border-white/30 mb-4"
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
