import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./Components/ScrolltoTop";
import Home from "./pages/Homepage";
import Events from "./pages/Events";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import About from "./pages/About";
import Loader from "./Components/Loader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // stays visible ~1.2s
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Loader loading={loading} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
