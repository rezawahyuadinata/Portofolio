import React from 'react';

const experiences = [
  {
    role: 'Programmer',
    company: 'Secretariat of State – Republic of Indonesia',
    location: 'South Jakarta, Indonesia',
    type: 'Full Time',
    period: 'Nov 2023 – Present',
    icon: '🏛️',
    description: [
      'Developed and maintained critical internal web portals (SIAKS, SIGTK, WBS) to support national-level secretariat operations.',
      'Led system upgrade initiatives using CodeIgniter 4 and Laravel — implementing new features, performance improvements, and security hardening.',
      'Ensured 99%+ system uptime through routine maintenance, proactive troubleshooting, and data integrity audits.',
    ],
    stack: ['Laravel', 'CodeIgniter 4', 'PHP', 'MySQL', 'Linux'],
  },
  {
    role: 'Programmer',
    company: 'PT. Putri Maharani Selaras',
    location: 'Jakarta, Indonesia',
    type: 'Freelance',
    period: 'Sep 2023 – Present',
    icon: '💼',
    description: [
      'Delivered custom web applications for various clients, specializing in accounting systems and corporate landing pages.',
      'Built end-to-end solutions with Laravel — from database design to UI implementation.',
      'Managed full deployment pipeline via Hostinger, ensuring reliable hosting and smooth go-live for each client.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Hostinger'],
  },
  {
    role: 'Web Developer',
    company: 'PT. Indotech Media Indonesia',
    location: 'Jakarta, Indonesia',
    type: 'Freelance',
    period: 'Sep 2022 – Nov 2023',
    icon: '🌐',
    description: [
      'Built the "Toyota Owner Manual" web app to digitize vehicle manuals — improving user accessibility to car interior & exterior information.',
      'Developed responsive interfaces using HTML, CSS, and JavaScript with cross-browser and cross-device compatibility.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'IT Consultant',
    company: 'Ministry of Public Works and Public Housing',
    location: 'South Jakarta, Indonesia',
    type: 'Full Time',
    period: 'May 2022 – Dec 2022',
    icon: '🏗️',
    description: [
      'Developed "SI-KIMR," a Risk Management Information System, to facilitate internal compliance and crisis mitigation.',
      'Managed Linux server infrastructure with regular maintenance to guarantee 99.9% system uptime.',
      'Provided technical support and efficient resolution of user-reported application issues.',
    ],
    stack: ['Laravel', 'MySQL', 'Linux'],
  },
  {
    role: 'Lab Assistant',
    company: 'Advanced Computer System Laboratory – Gunadarma University',
    location: 'Bekasi, Indonesia',
    type: 'Part Time',
    period: 'Jul 2020 – Mar 2022',
    icon: '🎓',
    description: [
      'Mentored students in mobile application development and computer network fundamentals.',
      'Facilitated laboratory sessions and resolved technical issues to ensure smooth learning outcomes.',
    ],
    stack: ['Teaching', 'Mobile Dev', 'Networking'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-(--bg)">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="section-badge">Career</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-(--text-h)">
            Work Experience
          </h2>
          <p className="text-(--text) text-lg">
            3+ years building scalable government &amp; enterprise systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-indigo-500/40 before:to-transparent">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/40 bg-(--bg) shadow-[0_0_12px_rgba(99,102,241,0.20)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-lg transition-transform duration-300 group-hover:scale-125 group-hover:bg-indigo-900/30 group-hover:border-indigo-400/70 select-none">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-dark border-(--border) p-6 rounded-2xl group-hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(99,102,241,0.18)] space-y-4">

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-(--text-h)">{exp.role}</h3>
                    <div className="text-indigo-400 font-semibold text-sm mt-0.5">{exp.company}</div>
                  </div>
                  <div className="shrink-0 text-xs font-semibold px-3 py-1.5 bg-(--accent-bg) border border-(--accent-border) text-indigo-300 rounded-full w-fit">
                    {exp.period}
                  </div>
                </div>

                {/* Meta */}
                <div className="text-xs text-neutral-400 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {exp.location}
                  <span className="text-(--border)">·</span>
                  <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/60">{exp.type}</span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 text-(--text) text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2.5 leading-relaxed">
                      <span className="text-indigo-400 mt-[3px] shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white/5 border border-white/10 text-white/60 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
