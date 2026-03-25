import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 2C18 2 6 14 6 22C6 28.627 11.373 34 18 34C24.627 34 30 28.627 30 22C30 14 18 2 18 2Z" fill="url(#f1)" />
        <path d="M12 20C12 20 14 17 18 16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <defs><linearGradient id="f1" x1="18" y1="2" x2="18" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#0284c7"/></linearGradient></defs>
      </svg>
    ),
    title: '7-Stage Purification',
    desc: 'Sediment, carbon, RO membrane, UV sterilization, UF, and mineral boost — every sip is medically pure.',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="4" fill="url(#f2)" />
        <rect x="8" y="12" width="8" height="12" rx="2" fill="white" opacity="0.9" />
        <circle cx="24" cy="18" r="4" fill="white" opacity="0.9" />
        <path d="M22 18L24 20L26 16" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
        <defs><linearGradient id="f2" x1="4" y1="8" x2="32" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#0369a1"/><stop offset="1" stopColor="#0ea5e9"/></linearGradient></defs>
      </svg>
    ),
    title: 'Smart TDS Monitor',
    desc: 'Real-time digital display shows live TDS, pH levels, and water quality score. Know what you drink.',
    color: '#06b6d4',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" fill="url(#f3)" />
        <path d="M12 18C12 18 15 12 18 18C21 24 24 18 24 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <defs><linearGradient id="f3" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#06b6d4"/><stop offset="1" stopColor="#0369a1"/></linearGradient></defs>
      </svg>
    ),
    title: 'WiFi & App Control',
    desc: 'Monitor filter life, water usage, and quality from your smartphone via SmartRO app. Alerts & reminders.',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4L4 12V24L18 32L32 24V12L18 4Z" fill="url(#f4)" />
        <path d="M14 18L16.5 20.5L22 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs><linearGradient id="f4" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#0ea5e9"/><stop offset="1" stopColor="#0369a1"/></linearGradient></defs>
      </svg>
    ),
    title: 'BIS & WHO Certified',
    desc: 'Fully certified by Bureau of Indian Standards and WHO water quality standards. Safe for infants.',
    color: '#38bdf8',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="6" width="24" height="24" rx="12" fill="url(#f5)" />
        <path d="M18 12V18L22 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <defs><linearGradient id="f5" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#0284c7"/></linearGradient></defs>
      </svg>
    ),
    title: 'Auto Filter Alerts',
    desc: 'Smart sensor tracks filter usage and sends timely replacement reminders — no guesswork needed.',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 28L18 8L30 28H6Z" fill="url(#f6)" />
        <path d="M16 22H20M18 16V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <defs><linearGradient id="f6" x1="6" y1="8" x2="30" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#0ea5e9"/><stop offset="1" stopColor="#06b6d4"/></linearGradient></defs>
      </svg>
    ),
    title: '24×7 Support',
    desc: 'Dedicated service engineers, free installation, and annual maintenance. We\'re always just a call away.',
    color: '#06b6d4',
  },
];

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #0c1a2e, #0a2540)'
          : 'linear-gradient(135deg, #f8faff, #eef6ff)',
        borderRadius: '20px',
        padding: '32px 28px',
        border: `1px solid ${hovered ? 'rgba(14,165,233,0.4)' : 'rgba(14,165,233,0.12)'}`,
        cursor: 'default',
        transition: 'all 0.35s ease',
        boxShadow: hovered
          ? '0 20px 60px rgba(14,165,233,0.2), 0 0 0 1px rgba(14,165,233,0.3)'
          : '0 4px 20px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 0%, rgba(14,165,233,0.15) 0%, transparent 60%)',
        }} />
      )}
      <div style={{
        width: '64px', height: '64px',
        borderRadius: '16px',
        background: hovered ? 'rgba(14,165,233,0.15)' : 'rgba(14,165,233,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
        border: `1px solid ${hovered ? 'rgba(56,189,248,0.4)' : 'rgba(14,165,233,0.15)'}`,
        transition: 'all 0.3s',
      }}>
        {feature.icon}
      </div>
      <h3 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '18px',
        fontWeight: 700,
        color: hovered ? '#ffffff' : '#0c1a2e',
        marginBottom: '12px',
        transition: 'color 0.3s',
      }}>
        {feature.title}
      </h3>
      <p style={{
        color: hovered ? 'rgba(255,255,255,0.7)' : '#64748b',
        fontSize: '14px',
        lineHeight: 1.7,
        transition: 'color 0.3s',
      }}>
        {feature.desc}
      </p>
    </motion.div>
  );
}

import { useState } from 'react';

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="features" style={{ padding: '100px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
            borderRadius: '25px', padding: '6px 16px', marginBottom: '16px',
          }}>
            <span style={{ color: '#0ea5e9', fontSize: '13px', fontWeight: 600 }}>Why SmartRO</span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#0c1a2e',
            marginBottom: '16px',
            letterSpacing: '-0.5px',
          }}>
            Technology That Cares for Your Health
          </h2>
          <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            SmartRO combines cutting-edge filtration with intelligent monitoring — giving your family the purest water possible.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  );
}
