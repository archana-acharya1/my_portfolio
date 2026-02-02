import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaCogs,
  FaShoppingCart,
} from "react-icons/fa";
import { AiOutlineAppstore, AiFillSetting } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Frontend Development (React, TypeScript)",
    icon: <FaLaptopCode size={40} className="text-[#bfa76f]" />,
    description:
      "Modern, accessible, and performant user interfaces using React and TypeScript.",
  },
  {
    title: "Backend & APIs (Node.js, TypeScript)",
    icon: <AiOutlineAppstore size={40} className="text-[#bfa76f]" />,
    description:
      "Robust REST/GraphQL APIs, authentication, and data modeling for scalable systems.",
  },
  {
    title: "Mobile Apps (Flutter / Dart)",
    icon: <FaMobileAlt size={40} className="text-[#bfa76f]" />,
    description:
      "Cross-platform mobile applications with a focus on smooth UX and native performance.",
  },
  {
    title: "ERP & POS Solutions",
    icon: <FaCogs size={40} className="text-[#bfa76f]" />,
    description:
      "End-to-end ERP and POS implementations for billing, inventory, and business workflows.",
  },
  {
    title: "Custom Application Development",
    icon: <AiFillSetting size={40} className="text-[#bfa76f]" />,
    description:
      "Tailor-made software solutions to address unique business problems.",
  },
  {
    title: "SEO & Digital Growth",
    icon: <FaBullhorn size={40} className="text-[#bfa76f]" />,
    description:
      "Technical SEO and growth strategies to increase visibility and user acquisition.",
  },
];

const Service = () => {
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);
  const introRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const direction = index % 2 === 0 ? -200 : 200;

        gsap.fromTo(
          card,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              markers: false,
            },
          },
        );
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={servicesRef}
      className="pt-10 bg-white text-center w-full"
      id="services"
    >
      <div
        ref={introRef}
        className="h-56 md:h-72 flex flex-col justify-center items-center px-4 md:px-8 bg-gradient-to-r from-[#fdf6e3] to-[#fceabb]"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6 leading-tight max-w-4xl">
          What I Do
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl">
          I build web and mobile applications, backend APIs, and bespoke
          business solutions (ERP, POS). My focus is on pragmatic, maintainable
          systems using React, TypeScript, Node.js, and Flutter.
        </p>

        <a
          href="#services-list"
          className="mt-6 inline-block chev-down animate-bounce"
          aria-label="Scroll to services"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>

      <div
        id="services-list"
        className="py-20 grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto px-4 md:px-8"
      >
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="gold-card p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#111]">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
