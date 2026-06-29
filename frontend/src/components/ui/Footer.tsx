import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
              AS
            </div>
            <span className="font-display font-bold text-white">
              Ayush<span className="gradient-text">.</span>
            </span>
          </div>

          {/* Center */}
          <p className="text-gray-600 text-sm text-center">
            Crafted with ❤️ in Pune, India · {year}
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: socialLinks.github, label: 'GitHub' },
              { href: socialLinks.linkedin, label: 'LinkedIn' },
              { href: socialLinks.email, label: 'Email' },
            ].map(({ href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-primary-400 text-xs transition-colors font-mono"
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 text-xs font-mono">
            Built with React · Tailwind CSS · Framer Motion · TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
