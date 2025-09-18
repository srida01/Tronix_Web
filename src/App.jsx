import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrolltoTop";
import Home from "./pages/Homepage";
import Events from "./pages/Events";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import UserRegister from "./pages/UserRegister";
import UserDashboard from "./pages/UserDashboard";
import { SignIn, SignUp } from "@clerk/clerk-react";
import EventRegister from "./pages/UserEvents";
import Football from "./pages/Football";
import Foxhunt from "./pages/Foxhunt";
import Trade from "./pages/Trade";
import Light from "./pages/Lights"
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

        {/* Clerk auth pages */}
        <Route path="/register/*" element={<UserRegister />} />
        <Route path="/register/sign-in" element={<SignIn />} />
        <Route path="/register/sign-up" element={<SignUp />} />

        {/* User dashboard */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/user/events" element={<EventRegister />} />

        {/* Event pages */}
        <Route path="/events/Football" element={<Football />} />
        <Route path="/events/Foxhunt" element={<Foxhunt />} />
        <Route path="/events/Lights" element={<Light />} />
        <Route path="/events/Trade" element={<Trade />} />
      </Routes>
    </>
  );
}

export default App;
