import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Partners from "./components/Partners";
import Trusted from "./components/Trusted";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <main className="pt-[7rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/trusted" element={<Trusted />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
