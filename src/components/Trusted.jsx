import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaShoppingCart,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaSearch,
  FaCogs,
  FaBullhorn,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "POS Billing System",
    icon: <FaShoppingCart size={36} className="text-amber-600" />,
  },
  {
    title: "Website Development",
    icon: <FaLaptopCode size={36} className="text-amber-600" />,
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt size={36} className="text-amber-600" />,
  },
  {
    title: "Web Application",
    icon: <FaServer size={36} className="text-amber-600" />,
  },
  {
    title: "SEO Improvements",
    icon: <FaSearch size={36} className="text-amber-600" />,
  },
  {
    title: "ERP System",
    icon: <FaCogs size={36} className="text-amber-600" />,
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn size={36} className="text-amber-600" />,
  },
];

const Trusted = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });
  }, []);

  return (
    <section id="services" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Services & Solutions
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="gold-card overflow-hidden transform transition duration-300 hover:scale-105 p-6 flex flex-col items-center justify-center"
          >
            <div className="mb-4">{service.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted;
