import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/Tronix_Logo.jpg";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Only logo with gradient border, no black background */}
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
                duration: 12,
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
