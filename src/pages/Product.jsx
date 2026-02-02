import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "ERPPro",
    desc: "Unified ERP system streamlining all business functions.",
    to: "/service/erpro",
  },
  {
    title: "POS Billing System",
    desc: "Fast, IRD‑verified billing with inventory sync.",
    to: "/service/pos-billing",
  },
  {
    title: "Website Development",
    desc: "Custom branded websites built for growth.",
    to: "/service/website-development",
  },
  {
    title: "Mobile Application",
    desc: "Cross-platform mobile apps for your business.",
    to: "/service/mobile-app-development",
  },
  {
    title: "Web Application",
    desc: "Scalable web app solutions tailored to your needs.",
    to: "/service/web-application",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Data‑driven growth strategies and SEO.",
    to: "/service/search-engine-optimization",
  },
  {
    title: "Custom Application Dev",
    desc: "Tailor‑made software solving your unique challenges.",
    to: "/service/custom-application-development",
  },
];

const Product = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // fetch public repositories from GitHub for the user
    fetch(
      "https://api.github.com/users/archana-acharya1/repos?per_page=100&sort=updated",
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    // reset refs when data changes
    cardRefs.current = [];
  }, [repos]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const direction = index % 2 === 0 ? -50 : 50;

        gsap.fromTo(
          card,
          { opacity: 0, y: direction },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [repos]);

  const list = repos.length ? repos : products;

  return (
    <section className="py-16 px-6 bg-white" ref={containerRef}>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Products</h1>
        <p className="text-gray-600 mt-4">
          Explore our advanced solutions designed to meet diverse business needs
          and drive success across various industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {list.map((item, idx) => {
          const title = item.title || item.name;
          const desc = item.desc || item.description || "";
          const to = item.to || item.html_url || item.href || "#";

          return (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="product-card gold-card p-6 transform transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-700 mb-4">{desc}</p>
              <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bfa76f] font-medium hover:underline"
              >
                View →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
