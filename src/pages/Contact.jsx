import React from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: HiOutlineMail,
      label: "Email",
      value: "aacharyaarchana057@gmail.com",
      href: "mailto:aacharyaarchana057@gmail.com",
    },
    {
      icon: HiOutlinePhone,
      label: "Phone",
      value: "+977 9841340390",
      href: "tel:+9779841340390",
    },
    {
      icon: HiOutlineLocationMarker,
      label: "Location",
      value: "Nepal",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/archana-acharya-045b93352?utm_source=share_via&utm_content=profile&utm_medium=member_android", // confirmed LinkedIn profile URL
    },
    {
      icon: FaTwitter,
      label: "Twitter / X",
      href: "https://twitter.com/yourusername", // Replace with your Twitter profile URL
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/archana-acharya1",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/aacharya_archana", // Updated to provided Instagram handle
    },
  ];

  return (
    <div className="min-h-screen pt-[96px] pb-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Me</h1>
        <p className="text-gray-600 mb-12">
          Feel free to reach out — I&apos;d love to hear from you.
        </p>

        {/* Contact Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="gold-card p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-800 font-medium hover:text-amber-600 transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-800 font-medium">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Connect with me
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 gold-card rounded-lg hover:shadow-lg hover:bg-amber-50 transition-all group"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-amber-600" />
                  <span className="font-medium text-gray-700 group-hover:text-amber-700">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send a message
          </h2>
          <p className="text-gray-600 mb-6">
            Or use the form below to email me directly.
          </p>

          {/*
            NOTE: Replace the `action` URL with your Formspree form endpoint (e.g. https://formspree.io/f/your_form_id)
            Alternatively, integrate EmailJS or a server endpoint if you prefer.
          */}

          <div className="max-w-2xl mx-auto">
            <div className="gold-card rounded-xl p-6 md:p-8 border border-amber-50">
              <form
                action="https://formspree.io/f/your_form_id"
                method="POST"
                className="grid gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message"
                  required
                  className="p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
