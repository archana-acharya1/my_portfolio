import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const navRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef([]);
  const [logoTransform, setLogoTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const logoEl = logoRef.current;
    if (!logoEl) return;
    const rect = logoEl.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-8, Math.min(8, dx / 30));
    const y = Math.max(-4, Math.min(4, dy / 30));
    setLogoTransform({ x, y });
  };

  const handleMouseLeave = () => setLogoTransform({ x: 0, y: 0 });

  useGSAP(() => {
    gsap.from(logoRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "bounce.out",
    });

    gsap.from(linksRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.4,
      delay: 0.2,
    });
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="navbar-gradient w-full fixed top-0 left-0 z-50 shadow-md px-6 h-[7rem] flex justify-between items-center"
    >
      <div ref={logoRef} className="flex items-center ml-4 md:ml-6">
        <img
          src={logo}
          alt="Archana Acharya"
          className="h-28 w-auto transition-transform duration-200 will-change-transform"
          style={{
            transform: `translate(${logoTransform.x}px, ${logoTransform.y}px) scale(1.12)`,
          }}
        />
      </div>

      <ul className="flex space-x-6 text-lg">
        {["Home", "Services", "Projects", "About", "Blog", "Contact"].map(
          (text, i) => (
            <li key={text}>
              <Link
                to={`/${
                  text === "Home" ? "" : text.toLowerCase().replace(" ", "")
                }`}
                className="text-gray-800 hover:text-yellow-600"
                ref={(el) => (linksRef.current[i] = el)}
              >
                {text}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
