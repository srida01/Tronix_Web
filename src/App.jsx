import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrolltoTop";
import Home from "./pages/Homepage";
import Events from "./pages/Events";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import About from "./pages/About";
function App() {
  return (
    <>
      {/* Always reset scroll on route change */}
      <ScrollToTop />

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
