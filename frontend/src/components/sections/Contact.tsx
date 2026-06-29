import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '../../hooks';
import { personalInfo, socialLinks } from '../../data/portfolio';

const API_URL = (import.meta as ImportMeta & { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL || 'http://localhost:5001';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'sinhaayush20010310@gmail.com', href: 'mailto:sinhaayush20010310@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Pune, Maharashtra, India', href: '#' },
  { icon: '🐙', label: 'GitHub', value: 'https://github.com/Ayu781', href: socialLinks.github },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/ayushsinha', href: socialLinks.linkedin },
];

export default function Contact() {
  const { ref, isVisible } = useReveal(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-rose/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary-900/20 blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            // Get In Touch
          </span>
          <h2 className="section-title">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open for full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability card */}
            <div className="glass p-6 rounded-2xl neon-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-emerald" />
                </span>
                <span className="text-accent-emerald font-semibold">Available for work</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently seeking full-time opportunities as a Full-Stack Developer. Open to relocation and remote work.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {['Full-time', 'Remote', 'Hybrid', 'Relocation'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-xs rounded-lg bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl group hover:border-primary-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-900/30 border border-primary-500/20 flex items-center justify-center text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{info.label}</p>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                  {info.href !== '#' && (
                    <svg className="w-4 h-4 text-gray-600 ml-auto group-hover:text-primary-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 rounded-2xl neon-border">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-6xl mb-6"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full bg-white/3 border rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-accent-rose/50 focus:border-accent-rose' : 'border-white/8 focus:border-primary-500/50'
                        }`}
                      />
                      {errors.name && <p className="text-accent-rose text-xs mt-1">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`w-full bg-white/3 border rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-accent-rose/50 focus:border-accent-rose' : 'border-white/8 focus:border-primary-500/50'
                        }`}
                      />
                      {errors.email && <p className="text-accent-rose text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:outline-none focus:border-primary-500/50 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`w-full bg-white/3 border rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-600 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-accent-rose/50 focus:border-accent-rose' : 'border-white/8 focus:border-primary-500/50'
                      }`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-accent-rose text-xs">{errors.message}</p>
                      ) : <span />}
                      <span className={`text-xs ${formData.message.length < 10 ? 'text-gray-600' : 'text-accent-emerald'}`}>
                        {formData.message.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                    className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
