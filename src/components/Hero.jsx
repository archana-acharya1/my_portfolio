import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import profileImage from "../assets/profile.png";
import cvPdf from "../assets/cv/Archana-Acharya CV.pdf";

// Put your PDF in the `public/` folder and name it exactly `Archana-Acharya-CV.pdf`
// It will then be available at `/Archana-Acharya-CV.pdf` at runtime.
const CV_URL = cvPdf;

const Hero = () => {
  const heroRef = useRef(null);
  const [showCvModal, setShowCvModal] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(["h1", "p", ".hero-button"], { opacity: 0 });

      const tl = gsap.timeline();

      tl.fromTo(
        "h1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      )
        .fromTo(
          "p",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .fromTo(
          ".hero-button",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="bg-gradient-to-r from-[#fdf6e3] to-[#fceabb] w-full flex items-center justify-center pt-28 pb-12 px-4 relative overflow-hidden"
      >
        {/* subtle decorative circle behind profile */}
        <div className="absolute -left-10 -top-10 w-56 h-56 rounded-full bg-amber-100 opacity-60 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-4xl">
          <div className="flex-shrink-0">
            {/*
                Prefer a user-provided image in `public/profile.jpg` (referenced as `/profile.jpg`).
                If that file is missing, the imported `profileImage` fallback will be used.
              */}
            <img
              src="/profile.jpg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = profileImage;
              }}
              alt="Archana Acharya"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-white/80"
            />
          </div>
          <div className="bg-white px-5 py-6 rounded-xl shadow-lg max-w-md text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-[#111] mb-2">
              Hi — I'm Archana Acharya
            </h1>
            <p className="text-sm md:text-base text-[#111] mb-4">
              Software engineer building web & mobile apps, APIs, and business
              systems (ERP/POS). I focus on practical, maintainable solutions
              with a solid UX.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => setShowCvModal(true)}
                className="hero-button bg-[#bfa76f] text-white font-semibold px-4 py-2.5 rounded-full shadow hover:bg-[#d4c197] transition duration-300 inline-block text-sm"
              >
                View CV
              </button>
              <a
                href={CV_URL}
                download="Archana-Acharya CV.pdf"
                className="hero-button bg-white text-[#bfa76f] font-semibold px-4 py-2.5 rounded-full shadow border-2 border-[#bfa76f] hover:bg-[#bfa76f] hover:text-white transition duration-300 inline-block text-sm"
              >
                Download CV
              </a>
              <Link
                to="/contact"
                className="hero-button bg-white text-[#bfa76f] font-semibold px-4 py-2.5 rounded-full shadow border-2 border-[#bfa76f] hover:bg-[#bfa76f] hover:text-white transition duration-300 inline-block text-sm"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll prompt arrows (bottom-right) - 3 stacked arrows to attract attention */}
        {/* Swipe indicator (bottom-right) - suggests vertical swipe/scroll */}
        <a
          href="#services"
          aria-label="Scroll to services"
          title="See Services & Solutions"
          className="absolute bottom-6 right-6"
        >
          <div className="swipe-indicator" aria-hidden>
            <div className="swipe-body">
              <div className="swipe-dot" />
            </div>
          </div>
        </a>
      </section>

      {showCvModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setShowCvModal(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setShowCvModal(false)}
          aria-label="Close CV"
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <div className="flex justify-between items-center p-3 border-b bg-gray-50">
              <h3 className="font-semibold text-gray-800">My CV</h3>
              <div className="flex items-center gap-2">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-amber-700 hover:text-amber-800 font-medium"
                >
                  Open in new tab
                </a>
                <button
                  type="button"
                  onClick={() => setShowCvModal(false)}
                  className="text-gray-600 hover:text-gray-900 text-2xl leading-none px-2"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            <object
              data={CV_URL}
              type="application/pdf"
              title="Archana Acharya CV"
              className="w-full h-[80vh]"
            >
              <p className="p-4 text-gray-600">
                Your browser may not support viewing PDFs.{" "}
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 underline"
                >
                  Open CV in new tab
                </a>
              </p>
            </object>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
