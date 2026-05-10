import React, { useState, useEffect } from "react";
import profileImg from "../assets/fotobgprofile.jpg";

const ROLES = [
  "Full-Stack Engineer",
  "Laravel Specialist",
  "Flutter Developer",
  "System Architect",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () =>
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1),
          ),
        isDeleting ? 55 : 95,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16 relative overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="animate-fade-in z-10 w-full max-w-6xl mx-auto space-y-16">
        {/* ── Main Split ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-3xl animate-wave select-none">👋</span>
              <span className="text-base text-(--text) font-medium tracking-wide">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-(--text-h) leading-[1.1]">
              Reza Wahyu
              <br />
              <span className="gradient-text">Adinata</span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-2 justify-center lg:justify-start h-9 min-w-0">
              <span className="text-xl md:text-2xl text-indigo-400 font-semibold truncate">
                {displayText}
              </span>
              <span className="w-0.5 h-6 bg-indigo-400 rounded-full shrink-0 animate-blink" />
            </div>

            {/* Elevator pitch */}
            <p className="max-w-xl text-lg md:text-xl text-(--text) leading-relaxed mx-auto lg:mx-0">
              I build{" "}
              <strong className="text-white font-semibold">
                scalable web &amp; mobile systems
              </strong>{" "}
              for government and enterprise clients — turning complex
              requirements into{" "}
              <strong className="text-white font-semibold">
                reliable, maintainable applications
              </strong>{" "}
              using Laravel, JavaScript, and Flutter.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 glass border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
              >
                Hire Me
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 justify-center lg:justify-start pt-1 flex-wrap">
              <a
                href="https://github.com/rezawahyuadinata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text) hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span className="text-(--border) select-none">·</span>
              <a
                href="https://www.linkedin.com/in/reza-wahyu-adinata/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text) hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
              <span className="text-(--border) select-none">·</span>
              <a
                href="mailto:adinatarezawahyu@gmail.com"
                className="text-(--text) hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-sm font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              {/* Rotating ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow" />

              {/* Avatar circle */}
              <div className="relative w-full h-full rounded-full border-2 border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.20)] overflow-hidden bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge — Available */}
              <div className="absolute -bottom-5 -left-4 glass px-3 py-2 rounded-2xl border border-white/10 flex items-center gap-2 shadow-xl animate-float">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <div>
                  <div className="text-xs font-bold text-white leading-none">
                    Available
                  </div>
                  <div className="text-[10px] text-(--text) mt-0.5">
                    For Hire
                  </div>
                </div>
              </div>

              {/* Floating badge — Experience */}
              <div
                className="absolute -top-5 -right-4 glass px-3 py-2 rounded-2xl border border-white/10 flex items-center gap-2 shadow-xl"
                style={{ animation: "float 4s ease-in-out 1s infinite" }}
              >
                <span className="text-xl">🚀</span>
                <div>
                  <div className="text-xs font-bold text-white leading-none">
                    3+ Years
                  </div>
                  <div className="text-[10px] text-(--text) mt-0.5">
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Banner ── */}
        <div className="grid grid-cols-3 gap-6 pt-12 border-t border-(--border)">
          {[
            { number: "3+", label: "Years Experience", icon: "📅" },
            { number: "10+", label: "Projects Built", icon: "🛠️" },
            { number: "99%", label: "System Uptime", icon: "⚡" },
          ].map(({ number, label, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center space-y-2 group"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-3xl lg:text-5xl font-extrabold text-white group-hover:gradient-text transition-all duration-300">
                {number}
              </span>
              <span className="text-xs text-(--text) font-medium uppercase tracking-wider text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
