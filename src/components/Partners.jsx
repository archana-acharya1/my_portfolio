import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import partner1 from "../assets/partners/partner1.png";
import partner2 from "../assets/partners/partner2.png";
import partner3 from "../assets/partners/partner3.png";
import partner4 from "../assets/partners/partner4.png";
import partner5 from "../assets/partners/partner5.png";
import partner6 from "../assets/partners/partner6.jpeg";
import partner7 from "../assets/partners/partner7.jpeg";
import partner8 from "../assets/partners/partner8.jpeg";
import partner9 from "../assets/partners/partner9.png";
import partner10 from "../assets/partners/partner10.jpeg";
import partner11 from "../assets/partners/partner11.jpeg";
import partner12 from "../assets/partners/partner12.jpeg";
import partner13 from "../assets/partners/partner13.png";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
];

const Partners = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".partner-logo");

    const tl = gsap.fromTo(
      boxes,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      },
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="py-20 bg-[#fdf6e3] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Our Trusted Partners
      </h2>

      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6"
      >
        {partners.map((logo, index) => (
          <div
            key={index}
            className="partner-logo bg-white shadow-md rounded-lg p-4 flex justify-center items-center h-28"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="max-h-20 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
