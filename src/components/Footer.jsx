import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-(--bg) border-t border-(--border)">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="gradient-text font-bold text-sm">Reza Wahyu Adinata</span>
          <span className="text-xs text-(--text)">— Full-Stack Engineer</span>
        </div>
        <p className="text-xs text-(--text) order-last md:order-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-5 text-sm text-(--text)">
          <a href="#home"     className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact"  className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
