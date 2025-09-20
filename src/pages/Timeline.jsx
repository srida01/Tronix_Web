// src/pages/Timeline.jsx
import React from "react";
import Galaxy from "../Components/Galaxy";
import Navbar from "../Components/Navbar";
import { Instagram, Linkedin } from "lucide-react";

const timelineEvents = [
  { time: "08:00 AM", title: "Registration Opens", desc: "Participants check in and get their badges." },
  { time: "09:00 AM", title: "Opening Ceremony", desc: "Kickoff event with welcome speech and schedule overview." },
  { time: "10:00 AM", title: "Ball Balancer", desc: "Balance the ball using sensors and control systems." },
  { time: "12:00 PM", title: "Hexapod", desc: "Watch and control the six-legged robot in action." },
  { time: "02:00 PM", title: "Lights & Lasers", desc: "Fascinating laser experiments and light shows." },
  { time: "03:30 PM", title: "Sign Language Detector", desc: "AI recognizes hand gestures in real time." },
  { time: "05:00 PM", title: "Tradeoff Quiz", desc: "Team-based technical quiz and problem-solving." },
  { time: "06:30 PM", title: "Automata Workshop", desc: "Hands-on session to build and simulate automata." },
  { time: "08:00 PM", title: "Football CV", desc: "Computer vision applied to football tracking and analysis." },
  { time: "09:30 PM", title: "Fox Hunt", desc: "Treasure hunt with riddles and tech clues." },
];

function Timeline(){
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
        twinkleIntensity={1}
        transparent={true}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Navbar */}
      <Navbar />
      <br />
      <br />
      <br />

      {/* Timeline Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-center drop-shadow-[0_0_25px_rgba(59,130,246,0.9)] mb-12 md:mb-16">
          Event Timeline
        </h1>

        {/* Vertical Timeline */}
        <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:bg-cyan-400  before:-translate-x-1/2">
          {timelineEvents.map((event) => {
            return (
              <div
                className={`mb-12 flex flex-col  lg:ml-[220px] md:flex-row items-center w-full relative z-10`}
              >
                <div className="w-full md:w-1/2 px-0 md:px-6">
                  <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300">
                    <p className="text-cyan-300 font-bold">{event.time}</p>
                    <h2 className="text-xl md:text-2xl font-bold mt-1 mb-2">{event.title}</h2>
                    <p className="text-gray-300 text-sm md:text-base">{event.desc}</p>
                  </div>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Address */}
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">Contact Us</h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">NITK Surathkal<br></br>
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

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-6 font-electrolize">
          © {new Date().getFullYear()} TRONIX. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Timeline;
