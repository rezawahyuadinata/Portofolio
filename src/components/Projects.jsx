import React from 'react';

const projects = [
  {
    title: 'Toyota Owner Manual',
    description:
      'Digitized the official Toyota vehicle owner manual into an interactive web app, giving drivers quick access to interior & exterior car information without physical booklets.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: '🚗',
    type: 'client',
    link: null,
  },
  {
    title: 'Waroenk Bude',
    description:
      'Built a full-featured e-commerce platform for a food catering business — streamlining menu management, online food ordering, and sales transaction tracking.',
    tags: ['Laravel', 'MySQL', 'Web'],
    icon: '🍽️',
    type: 'client',
    link: null,
  },
  {
    title: 'SI-KIMR',
    description:
      'Designed and developed a comprehensive Risk Management Information System to help the Ministry of Public Works analyze, track, and mitigate project risks in real-time.',
    tags: ['Laravel', 'MySQL', 'Linux'],
    icon: '📊',
    type: 'government',
    link: null,
  },
  {
    title: 'SIAKS',
    description:
      'Created a collaboration system to manage and automate employee rank & promotion submission workflows — replacing manual paperwork for the Secretariat of State.',
    tags: ['PHP', 'Laravel', 'Workflow'],
    icon: '🤝',
    type: 'government',
    link: null,
  },
  {
    title: 'WBS (Whistleblowing System)',
    description:
      'Built a secure, anonymous public complaints portal — allowing citizens to safely report irregularities with full privacy protection and case management tools.',
    tags: ['Security', 'Laravel', 'Portal'],
    icon: '🛡️',
    type: 'government',
    link: null,
  },
  {
    title: 'SIGTK',
    description:
      'Developed an end-to-end HR approval system for managing employee title promotions, service commendations, and award ceremony workflows at the national level.',
    tags: ['Laravel', 'Approval Workflow'],
    icon: '🎖️',
    type: 'government',
    link: null,
  },
  {
    title: 'HK-PATI Website',
    description:
      'Delivered a professional, high-impact company landing page for HK-PATI — focusing on strong visual identity, responsive layout, and SEO-friendly structure.',
    tags: ['Landing Page', 'Laravel', 'Web'],
    icon: '🏢',
    type: 'client',
    link: null,
  },
  {
    title: 'E-Sukses',
    description:
      'Designed an integrated accounting & management application for the logistics, administration, and overseas deployment of foreign workers — covering full payroll and reporting cycles.',
    tags: ['Accounting', 'Laravel', 'Logistics'],
    icon: '🌍',
    type: 'client',
    link: null,
  },
];

const typeBadge = {
  government: {
    label: '🏛️ Government',
    className: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
  },
  client: {
    label: '💼 Client Work',
    className: 'bg-white/5 border-white/12 text-zinc-400',
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-(--bg) border-t border-(--border)">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="section-badge">Portfolio</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-(--text-h)">
            Featured Projects
          </h2>
          <p className="text-(--text) text-lg">
            Real systems. Real impact. Built for government &amp; enterprise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => {
            const badge = typeBadge[project.type];
            return (
              <div
                key={project.title}
                className="group glass-dark border-(--border) p-5 rounded-3xl space-y-4 hover:-translate-y-2 hover:border-indigo-500/35 transition-all duration-300 flex flex-col"
              >
                {/* Image / Icon area */}
                <div className="w-full h-44 bg-neutral-900 rounded-2xl border border-white/5 relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(99,102,241,0.10)] transition-all duration-300">
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/8 to-indigo-300/5 group-hover:from-indigo-500/14 group-hover:to-indigo-300/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500 select-none">
                    {project.icon}
                  </div>
                  {/* Type badge */}
                  <div className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${badge.className}`}>
                    {badge.label}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2 px-1">
                  <h3 className="text-xl font-bold text-(--text-h) group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-(--text) text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags + Link */}
                <div className="flex items-center justify-between gap-2 px-1 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-white/60 text-[11px] font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors shrink-0"
                    >
                      View
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-[11px] text-neutral-600 italic shrink-0">Confidential</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
