import React from 'react';

const skillCategories = [
  { icon: '🖥️', label: 'Backend',      skills: ['PHP', 'Laravel', 'Go-Lang'] },
  { icon: '🌐', label: 'Frontend',     skills: ['JavaScript', 'HTML', 'CSS'] },
  { icon: '📱', label: 'Mobile',       skills: ['Flutter', 'Dart'] },
  { icon: '⚙️', label: 'DevOps',       skills: ['Docker', 'Git', 'Linux'] },
  { icon: '🗄️', label: 'Database',     skills: ['MySQL', 'SQL'] },
  { icon: '🧪', label: 'QA & Methods', skills: ['Katalon', 'QA Engineer', 'Agile'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-(--bg) overflow-hidden relative">
      {/* Subtle single-color ambient glow */}
      <div className="absolute left-[-10%] top-[20%] w-72 h-72 bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="section-badge">Expertise</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-(--text-h)">
            Technical Skills
          </h2>
          <p className="text-(--text) text-lg">
            My go-to stack for building robust, scalable applications.
          </p>
        </div>

        {/* Category Grid — single accent color */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="group glass-dark border border-white/5 hover:border-indigo-500/30 p-5 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(99,102,241,0.12)]"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-xl select-none group-hover:bg-indigo-500/18 transition-colors">
                  {cat.icon}
                </div>
                <span className="font-bold text-sm uppercase tracking-wider text-indigo-300">
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/4 border border-white/8 text-white/80 text-sm font-semibold rounded-xl cursor-default hover:border-indigo-500/40 hover:text-indigo-200 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
