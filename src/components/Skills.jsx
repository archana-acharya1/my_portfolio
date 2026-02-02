import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiFlutter,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Flutter", Icon: SiFlutter },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "React", Icon: SiReact },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Postgres", Icon: SiPostgresql },
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".skill-card");

    const tl = gsap.fromTo(
      boxes,
      {
        opacity: 0,
        scale: 0.85,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
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
    <section className="pt-10 pb-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        My Skills
      </h2>

      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto px-6"
      >
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="skill-card gold-card p-5 flex flex-col justify-center items-center gap-3 h-28 hover:shadow-xl transition-all duration-200"
          >
            <Icon className="w-12 h-12 text-gray-700" aria-hidden />
            <span className="font-semibold text-gray-800 text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
