import React from 'react';

const certifications = [
  { label: 'Docker : Pemula Sampai Mahir',                  issuer: 'Udemy' },
  { label: 'Flutter Indonesia – Membuat Aplikasi Itu Mudah', issuer: 'Udemy' },
  { label: 'Pemrograman Go-Lang : Pemula Sampai Mahir',     issuer: 'Udemy' },
  { label: 'Desainer Grafis Muda',                          issuer: 'BNSP' },
  { label: 'Java (J2SE) For Intermediate',                  issuer: 'Lepkom' },
  { label: 'Fundamental Web Development',                   issuer: 'Lepkom Gunadarma' },
  { label: 'UI/UX Design – User Experience & Visual',       issuer: 'Rumah Siap Kerja' },
  { label: 'Bootcamp QA Engineer',                          issuer: 'Coding.id' },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 bg-(--bg) border-t border-(--border)">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="section-badge">Background</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-(--text-h)">
            Education &amp; Certifications
          </h2>
          <p className="text-(--text) text-lg">
            My academic foundation and professional learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── Education Card ── */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-500/12 rounded-xl text-xl select-none">🎓</div>
              <h3 className="text-xl font-bold tracking-tight text-(--text-h)">Education</h3>
            </div>

            <div className="glass-dark border-(--border) p-8 rounded-3xl hover:border-indigo-500/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(99,102,241,0.15)] space-y-5">
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div>
                  <h4 className="text-2xl font-extrabold text-(--text-h)">Gunadarma University</h4>
                  <p className="text-indigo-400 font-semibold text-base mt-1">
                    Bachelor of Information Systems
                  </p>
                </div>
                <div className="px-4 py-1.5 bg-white/8 border border-white/10 rounded-full text-white font-semibold text-sm shrink-0">
                  2017 – 2022
                </div>
              </div>

              {/* GPA */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-indigo-500/18 border border-indigo-500/28 text-indigo-300 rounded-lg font-bold text-sm">
                  GPA
                </span>
                <span className="text-xl font-bold text-white">3.10</span>
                <span className="text-sm text-(--text)">/ 4.00</span>
              </div>

              {/* Divider */}
              <div className="border-t border-(--border)" />

              {/* Highlights */}
              <ul className="space-y-2 text-(--text) text-sm">
                {[
                  'Thesis: Developed a mobile-based attendance tracking app',
                  'Laboratory Assistant for 1.5 years — mentored 50+ students',
                  'Active in computer networking & programming studies',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 leading-relaxed">
                    <span className="text-indigo-400 mt-[3px] shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Certifications Card ── */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-500/12 rounded-xl text-xl select-none">🏅</div>
              <h3 className="text-xl font-bold tracking-tight text-(--text-h)">Certifications</h3>
            </div>

            <div className="glass-dark border-(--border) p-6 rounded-3xl hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(34,211,238,0.1)] grid gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors group/cert"
                >
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-indigo-400 shrink-0 shadow-[0_0_6px_rgba(99,102,241,0.6)] group-hover/cert:scale-125 transition-transform" />
                  <div>
                    <p className="text-(--text) text-sm font-medium leading-snug group-hover/cert:text-white transition-colors">
                      {cert.label}
                    </p>
                    <span className="text-[11px] text-indigo-400/70 font-semibold mt-0.5 inline-block">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
