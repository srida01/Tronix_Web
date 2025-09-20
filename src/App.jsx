import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./Components/ScrolltoTop";
import Galaxy from "./Components/Galaxy";
import Loader from "./Components/Loader";
import Home from "./pages/Homepage";
import Events from "./pages/Events";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import About from "./pages/About";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      {/* Galaxy background once for all pages */}
      <Galaxy
        focal={[0.5, 0.5]}
        rotation={[1.0, 0.0]}
        starSpeed={0.3}
        density={2.0}
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
        className="fixed top-0 left-0 w-full h-full z-0"
      />

      <Loader loading={loading} />

      {!loading && (
        <Routes key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </>
  );
}

export default App;
