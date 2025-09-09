import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import logo from "../images/Tronix_Logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Timeline", path: "/timeline" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo with Gradient Border (No Rotation) */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="p-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border-2 border-transparent hover:scale-110 transition"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className="relative text-white px-4 py-2 rounded-lg font-medium transition-all duration-300
              hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-purple-600/80
              hover:shadow-lg hover:shadow-purple-500/40 hover:scale-105"
            >
              {item.name}
            </button>
          ))}

          {/* Dynamic Registration/Dashboard Button */}
          <button
            onClick={() => navigate(isSignedIn ? "/dashboard" : "/register")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg 
            hover:scale-110 hover:shadow-pink-500/50 transition-all duration-300"
          >
            {isSignedIn ? "Go to Dashboard" : "Registration"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
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
                  className="text-white w-full text-left px-4 py-2 rounded-lg transition-all duration-300 
                  hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-purple-600/80 hover:shadow-md hover:scale-105"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => {
                  navigate(isSignedIn ? "/dashboard" : "/register");
                  setIsOpen(false);
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg 
                hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
              >
                {isSignedIn ? "Go to Dashboard" : "Registration"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
