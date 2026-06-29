import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useReveal } from '../../hooks';
import { personalInfo, stats } from '../../data/portfolio';

const timeline = [
  { year: '2020', label: 'B.Tech Begins', desc: 'Started Computer Science at Madhyanchal Professional University', icon: '🎓' },
  { year: '2023', label: 'Graduated', desc: 'Completed B.Tech in Computer Science & Engineering', icon: '🏆' },
  { year: '2023', label: 'Tech Mahindra', desc: 'Joined as Support Associate, honing problem-solving skills', icon: '💼' },
  { year: '2023', label: 'JSpiders', desc: 'Intensive full-stack development training in Noida', icon: '🚀' },
  { year: '2024', label: 'First Product', desc: 'Launched Pritam Medical — a live pharmacy e-commerce platform', icon: '🏪' },
  { year: '2024', label: 'Outlier', desc: 'Started AI code evaluation work, reviewing LLM outputs', icon: '🤖' },
  { year: '2025', label: 'Present', desc: 'Seeking full-time opportunities to build impactful products', icon: '⚡' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-900/10 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            // About Me
          </span>
          <h2 className="section-title">
            The Dev Behind the{' '}
            <span className="gradient-text">Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Bio card */}
            <div className="glass p-8 rounded-2xl neon-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary-900/50 flex-shrink-0">
                  AS
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{personalInfo.name}</h3>
                  <p className="text-primary-400 text-sm font-mono">{personalInfo.title}</p>
                  <p className="text-gray-500 text-sm mt-1">📍 {personalInfo.location}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">{personalInfo.bio}</p>
              <p className="text-gray-400 leading-relaxed text-sm">{personalInfo.bio2}</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass p-5 rounded-xl text-center group hover:border-primary-500/30 transition-colors"
                >
                  <div className="text-3xl font-display font-bold gradient-text">
                    {isVisible ? (
                      <CountUp end={stat.value} duration={2} delay={0.5 + i * 0.1} />
                    ) : '0'}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Java', 'Spring Boot', 'MongoDB', 'Next.js', 'TypeScript'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-primary-900/30 border border-primary-500/20 text-primary-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/30 to-transparent" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative pl-16 group"
                >
                  {/* Icon */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-xl group-hover:border-primary-500/40 group-hover:shadow-lg group-hover:shadow-primary-900/30 transition-all">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="glass p-4 rounded-xl group-hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-primary-400 text-xs bg-primary-900/30 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                      <span className="font-semibold text-white text-sm">{item.label}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
