import { motion, AnimatePresence } from "framer-motion";
import Galaxy from "./Galaxy"; // Make sure the path is correct
import logo from "../images/Tronix_Logo.jpg";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Galaxy Background */}
          <Galaxy
            focal={[0.5, 0.5]}
            rotation={[1.0, 0.0]}
            starSpeed={0.3}
            density={2.0}
            hueShift={140}
            disableAnimation={false}
            speed={1}
            mouseInteraction={false} // keep static for loader
            mouseRepulsion={false}
            rotationSpeed={0.1}
            glowIntensity={0.4}
            saturation={5}
            repulsionStrength={4}
            autoCenterRepulsion={0}
            twinkleIntensity={0.6}
            transparent={true}
            className="absolute top-0 left-0 w-full h-full"
          />

          {/* Gradient Border Logo */}
          <div
            className="relative p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 
                       shadow-[0_0_40px_rgba(236,72,153,0.8)] 
                       animate-border-gradient z-10"
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="w-32 md:w-48 rounded-full border-4 border-transparent"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12, // slow rotation
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
