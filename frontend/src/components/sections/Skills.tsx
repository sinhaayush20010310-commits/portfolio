import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../../hooks';
import { skills } from '../../data/portfolio';

const categoryColors: Record<string, string> = {
  Frontend: 'from-primary-500 to-accent-violet',
  Backend: 'from-accent-cyan to-primary-500',
  Database: 'from-accent-emerald to-accent-cyan',
  DevOps: 'from-accent-amber to-accent-rose',
  Cloud: 'from-accent-violet to-accent-rose',
  Tools: 'from-accent-rose to-accent-amber',
};

const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  DevOps: '🔧',
  Cloud: '☁️',
  Tools: '🛠️',
};

export default function Skills() {
  const { ref, isVisible } = useReveal(0.1);
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const categories = Object.keys(skills);
  const activeSkills = skills[activeCategory as keyof typeof skills];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary-900/10 blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            // Tech Stack
          </span>
          <h2 className="section-title">
            Skills &{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies I work with to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-white shadow-lg shadow-primary-900/40'
                  : 'glass text-gray-400 hover:text-white'
              }`}
              style={activeCategory === cat ? {
                background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              } : {}}
            >
              <span>{categoryIcons[cat]}</span>
              <span>{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass p-5 rounded-xl group hover:border-primary-500/30 transition-all duration-300 neon-border cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium text-white text-sm">{skill.name}</span>
                  </div>
                  <span className="font-mono text-xs text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="skill-bar">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${categoryColors[activeCategory]}`}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                  />
                </div>

                {/* Level indicator */}
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-600">Beginner</span>
                  <span className="text-xs text-gray-600">Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All skills cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-sm mb-6 font-mono">// All technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.values(skills).flat().map((skill) => (
              <motion.span
                key={skill.name}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg bg-white/3 border border-white/5 text-gray-500 text-xs font-mono hover:text-primary-400 hover:border-primary-500/20 transition-all cursor-default"
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
