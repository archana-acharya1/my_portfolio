import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            About Me
          </h2>
          <p className="text-gray-600 mt-3">Hi — I&apos;m Archana Acharya.</p>
        </div>

        <div className="bg-[#fdf6ee] rounded-xl p-6 md:p-10 shadow-md">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I&apos;m a software/mobileApp developer based in Nepal, currently
            working at Deskgoo Consulting. I build web and mobile applications,
            APIs, and custom business solutions as per client requirements. I
            enjoy turning ideas into polished, production-ready products.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            My primary tools include Flutter(Dart), Node.js, React, and
            TypeScript . I&apos;m comfortable across the full stack — from UI
            and frontend performance to backend APIs and database design.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            You can explore a selection of my projects on the Projects page or
            view them directly on my GitHub. If you&apos;d like to work together
            or just say hello, visit the Contact page or drop me an email.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
            <a
              href="/projects"
              className="inline-block px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-center"
            >
              View Projects
            </a>
            <a
              href="https://github.com/archana-acharya1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition-colors text-center"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
