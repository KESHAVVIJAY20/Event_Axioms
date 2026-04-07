import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useState } from "react";
import SplashScreen from "./conponents/WelcomeModal";
import ScrollToTop from "./conponents/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";
import Gallery from "./pages/Gallery";
function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <HashRouter>
          <ScrollToTop />
          <a
            href="https://wa.me/919214036552?text=Hello%20Event%20Axiom!%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 left-8 animate-bounce bg-green-500 hover:bg-green-600 transition p-4 rounded-full shadow-xl z-50"
          >
            <FaWhatsapp className="text-2xl text-white" />
          </a>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
}

export default App;
