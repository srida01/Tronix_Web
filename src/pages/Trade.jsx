// src/pages/events/Trade.jsx
import Galaxy from "../Components/Galaxy";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import React, { useState, useRef } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../images/Tronix_Logo.jpg";
import { supabase } from "../utilities/Supabase";

function Trade() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const navItems = [{ name: "Dashboard", path: "/dashboard" }];

  const handleLogout = async () => {
    await signOut();
    navigate("/register");
  };

  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    leaderEmail: "",
    member1Name: "",
    member1Email: "",
    member2Name: "",
    member2Email: "",
    member3Name: "",
    member3Email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage("❌ Please upload the payment receipt.");
      return;
    }

    let imageUrl = null;

    try {
      const fileName = `${formData.teamName}_${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("Trade_files")
        .upload(fileName, file);

      if (uploadError) {
        setErrorMessage("❌ File upload failed: " + uploadError.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("Trade_files")
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;

      const { error } = await supabase.from("Trade").insert([
        {
          Team: formData.teamName,
          Leader: formData.leaderName,
          LeaderE: formData.leaderEmail,
          Mem1: formData.member1Name,
          E1: formData.member1Email,
          Mem2: formData.member2Name,
          E2: formData.member2Email,
          Mem3: formData.member3Name,
          E3: formData.member3Email,
          Phone: formData.phone,
          Attendance: false,
          image_url: imageUrl,
        },
      ]);

      if (error) {
        setErrorMessage("❌ Error submitting form: " + error.message);
        console.log(error);
      } else {
        alert("✅ Registration successful!");
        setFormData({
          teamName: "",
          leaderName: "",
          leaderEmail: "",
          member1Name: "",
          member1Email: "",
          member2Name: "",
          member2Email: "",
          member3Name: "",
          member3Email: "",
          phone: "",
        });
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        setErrorMessage("");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("❌ Unexpected error: " + err.message);
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-black text-white relative overflow-y-auto">
      {/* Galaxy Background */}
      <Galaxy
        focal={[0.5, 0.5]}
        rotation={[1.0, 0.0]}
        starSpeed={0.5}
        density={2}
        saturation={5}
        hueShift={140}
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
        <h1 className="font-orbitron text-4xl font-bold mb-6 text-cyan-400">
          TradeOff
        </h1>

        <div className="bg-gradient-to-r from-purple-700/60 to-cyan-800/60 p-8 rounded-2xl shadow-lg w-full max-w-4xl mb-16">
          <h2 className="font-orbitron text-2xl font-semibold mb-6 text-center">
            Team Registration
          </h2>

          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-electrolize mb-2">Team Name</label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {[1,2,3].map((num) => (
              <div key={num} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-electrolize mb-2">Member {num} Name</label>
                  <input
                    type="text"
                    name={`member${num}Name`}
                    value={formData[`member${num}Name`]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block font-electrolize mb-2">Member {num} Email</label>
                  <input
                    type="email"
                    name={`member${num}Email`}
                    value={formData[`member${num}Email`]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="block font-electrolize mb-2">Leader Name</label>
              <input
                type="text"
                name="leaderName"
                value={formData.leaderName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <div>
              <label className="block font-electrolize mb-2">Leader Email</label>
              <input
                type="email"
                name="leaderEmail"
                value={formData.leaderEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <div>
              <label className="block font-electrolize mb-2">Team Leader Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {/* Payment QR + Upload */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="/ballbalancer_qr.png" // your QR image
                alt="Payment QR Code"
                className="w-48 h-48 object-contain mb-4 border-2 border-cyan-400 rounded-lg shadow-lg"
              />
              <p className="text-gray-300 text-sm font-electrolize">
                Scan the QR code to make payment and upload receipt below
              </p>
              <input
                type="file"
                accept="image/*,application/pdf"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="w-full mt-3 px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            {errorMessage && (
              <div className="mb-4 text-red-400 bg-red-900/50 px-4 py-2 rounded-md text-center font-medium animate-pulse">
                {errorMessage}
              </div>
            )}

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
      <footer className="relative z-10 w-full bg-black/70 backdrop-blur-lg border-t border-white/20 py-8 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <h3 className="font-orbitron text-lg font-semibold text-cyan-400">Contact Us</h3>
            <p className="font-electrolize text-gray-300 text-sm mt-1">
              NITK Surathkal
              NH 66, Srinivasnagar
              Surathkal, Mangalore
              Karnataka 575025
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

export default Trade;
