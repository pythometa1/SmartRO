import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  {
    value: 10000, suffix: '+', label: 'Happy Families',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="10" r="4" fill="white" opacity="0.9"/>
        <circle cx="21" cy="10" r="4" fill="white" opacity="0.7"/>
        <path d="M3 26c0-4.418 3.582-8 8-8 1.5 0 2.9.4 4.1 1.1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M29 26c0-4.418-3.582-8-8-8-1.5 0-2.9.4-4.1 1.1" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    color: '#22D3EE',
  },
  {
    value: 99.9, suffix: '%', label: 'Purity Guarantee', decimal: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3C16 3 7 12 7 18C7 22.97 11.03 27 16 27C20.97 27 25 22.97 25 18C25 12 16 3 16 3Z" fill="white" opacity="0.9"/>
        <path d="M12 17C12 17 13.5 14.5 16 14" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#67E8F9',
  },
  {
    value: 5, suffix: '+', label: 'Cities Served',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L3 9V24L16 30L29 24V9L16 3Z" stroke="white" strokeWidth="2" fill="none" opacity="0.9"/>
        <circle cx="16" cy="16" r="4" fill="white" opacity="0.8"/>
      </svg>
    ),
    color: '#22D3EE',
  },
  {
    value: 24, suffix: '/7', label: 'Customer Support',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4Z" stroke="white" strokeWidth="2" fill="none" opacity="0.9"/>
        <path d="M16 8V16L21 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#22D3EE',
  },
];

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #0E7490, #0891B2, #0E7490)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34,211,238,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(34,211,238,0.08) 0%, transparent 50%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.5px',
          }}>
            A Thriving Community of Happy Families
          </h2>
        </motion.div>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '16px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {stat.decimal ? (
                  <>{stat.value}{stat.suffix}</>
                ) : (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
