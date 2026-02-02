import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "todos-api",
    desc: "A TypeScript-based REST API for managing todos.",
    href: "https://github.com/archana-acharya1/todos-api",
    lang: "TypeScript",
  },
  {
    name: "LMS-API",
    desc: "Learning Management System backend (TypeScript).",
    href: "https://github.com/archana-acharya1/LMS-API",
    lang: "TypeScript",
  },
  {
    name: "LMS-app",
    desc: "Frontend application for an LMS built with modern web tech.",
    href: "https://github.com/archana-acharya1/LMS-app",
    lang: "TypeScript",
  },
  {
    name: "Query-Management-Api",
    desc: "API for managing user queries and support tickets.",
    href: "https://github.com/archana-acharya1/Query-Management-Api",
    lang: "TypeScript",
  },
  {
    name: "employee-management-app",
    desc: "A JS app to manage employee records and workflows.",
    href: "https://github.com/archana-acharya1/employee-management-app",
    lang: "JavaScript",
  },
  {
    name: "deskgoo_cafe",
    desc: "A Flutter/Dart app related to Deskgoo Cafe project.",
    href: "https://github.com/archana-acharya1/deskgoo_cafe",
    lang: "Dart",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);

      // animate all cards on mount (no scroll trigger) — start from zero and reveal
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          stagger: 0.1,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-20 px-4 md:px-8 bg-white min-h-screen"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Projects</h2>
        <p className="text-gray-600 mb-8">
          A selection of projects and repositories from my GitHub. Click any
          card to view the source and details.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardRefs.current[idx] = el)}
              className="block gold-card p-6 transform transition hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
            >
              <div className="mb-3">
                <div className="h-1 w-14 bg-amber-600 rounded-full mb-4" />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {p.name}
                  </h3>
                  <span className="text-sm text-amber-600 font-medium">
                    {p.lang}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
