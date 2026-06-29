import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../../hooks';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  const { ref, isVisible } = useReveal(0.1);
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            // Career Path
          </span>
          <h2 className="section-title">
            Work{' '}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-3"
          >
            {experiences.map((exp, i) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveExp(i)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeExp === i
                    ? 'glass border border-white/15 shadow-lg'
                    : 'hover:bg-white/3'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${exp.color}40, ${exp.color}20)`, border: `1px solid ${exp.color}30` }}
                  >
                    {exp.company[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-sm truncate">{exp.company}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-gray-400 ml-2 flex-shrink-0">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">{exp.role}</p>
                    <p className="text-gray-600 text-xs mt-0.5 font-mono">{exp.period}</p>
                  </div>
                </div>

                {activeExp === i && (
                  <motion.div
                    layoutId="exp-indicator"
                    className="mt-3 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 rounded-2xl h-full"
              >
                {(() => {
                  const exp = experiences[activeExp];
                  return (
                    <>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-semibold" style={{ color: exp.color }}>{exp.company}</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-400 text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-mono text-xs text-gray-500">{exp.period}</span>
                          </div>
                        </div>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: `${exp.color}20`, color: exp.color }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                          <span>🏆</span> Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.08 }}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <span style={{ color: exp.color }} className="mt-0.5 flex-shrink-0">→</span>
                              {ach}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                          <span>⚙️</span> Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded-md text-xs font-mono"
                              style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 grid sm:grid-cols-2 gap-4"
        >
          {[
            {
              degree: 'B.Tech',
              institute: 'Madhyanchal Professional University',
              period: '2020 – 2023',
              icon: '🎓',
              color: '#6366f1',
            },
            {
              degree: 'Full-Stack Java Developer Certificate',
              institute: 'JSpiders Training & Development Centre',
              period: '2023 – 2024',
              icon: '📜',
              color: '#22d3ee',
            },
          ].map((edu) => (
            <div
              key={edu.degree}
              className="glass p-5 rounded-xl flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
              >
                {edu.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{edu.degree}</p>
                <p className="text-gray-400 text-xs mt-0.5">{edu.institute}</p>
                <p className="font-mono text-xs mt-1" style={{ color: edu.color }}>{edu.period}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
