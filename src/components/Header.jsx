import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home',       href: '#home',       id: 'home' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects',   href: '#projects',   id: 'projects' },
  { name: 'Education',  href: '#education',  id: 'education' },
  { name: 'Skills',     href: '#skills',     id: 'skills' },
  { name: 'Contact',    href: '#contact',    id: 'contact' },
];

const Header = () => {
  const [active, setActive]   = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollPos = window.scrollY + 120;
      const sections  = navLinks
        .map(l => document.getElementById(l.id))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav
        className={`px-6 py-3 rounded-full flex items-center gap-1 overflow-x-auto max-w-full text-sm font-medium hide-scrollbar transition-all duration-500 ${
          scrolled
            ? 'glass-dark shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
              active === link.id
                ? 'text-indigo-300 bg-indigo-500/12 font-semibold'
                : 'text-(--text) hover:text-white hover:bg-white/5'
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </header>
  );
};

export default Header;
