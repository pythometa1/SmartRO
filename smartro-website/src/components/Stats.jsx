import { useEffect, useRef, useState } from 'react';
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
  { value: 50000, suffix: '+', label: 'Happy Families', icon: '👨‍👩‍👧‍👦', color: '#38bdf8' },
  { value: 99.9, suffix: '%', label: 'Purity Guarantee', icon: '💧', color: '#06b6d4', decimal: true },
  { value: 15, suffix: '+', label: 'Cities Served', icon: '🏙', color: '#0ea5e9' },
  { value: 24, suffix: '/7', label: 'Customer Support', icon: '🛡', color: '#38bdf8' },
];

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(90deg, #0284c7, #0369a1, #0284c7)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated particle dots */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
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
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '8px',
                textShadow: `0 0 30px ${stat.color}`,
              }}>
                {stat.decimal ? (
                  <>{stat.value}{stat.suffix}</>
                ) : (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.5px',
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
