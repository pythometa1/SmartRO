import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const comparisonData = [
  {
    feature: 'Monthly Cost',
    waterCan: '₹800–1200',
    otherPurifier: '₹1500+ EMI',
    aquaImperial: '₹349/mo',
    highlight: true,
  },
  {
    feature: 'Upfront Cost',
    waterCan: 'None',
    otherPurifier: '₹8,000–25,000',
    aquaImperial: '₹0',
    highlight: true,
  },
  {
    feature: 'Maintenance',
    waterCan: 'N/A',
    otherPurifier: '₹2,000–4,000/yr',
    aquaImperial: 'Free for Life',
    highlight: true,
  },
  {
    feature: 'Water Purity',
    waterCan: 'Inconsistent',
    otherPurifier: 'Good',
    aquaImperial: '99.9% Pure',
    highlight: false,
  },
  {
    feature: 'Installation',
    waterCan: 'None needed',
    otherPurifier: '₹500–1500',
    aquaImperial: 'Free',
    highlight: false,
  },
  {
    feature: 'Filter Replacement',
    waterCan: 'N/A',
    otherPurifier: 'Self-arranged',
    aquaImperial: 'Auto-scheduled',
    highlight: false,
  },
  {
    feature: 'Smart Monitoring',
    waterCan: false,
    otherPurifier: false,
    aquaImperial: true,
    isBool: true,
  },
  {
    feature: '24/7 Support',
    waterCan: false,
    otherPurifier: false,
    aquaImperial: true,
    isBool: true,
  },
];

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 2C16 2 6 12 6 19C6 24.523 10.477 29 16 29C21.523 29 26 24.523 26 19C26 12 16 2 16 2Z" fill="url(#feat1)"/>
        <path d="M11 17C11 17 13 14 16 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <defs><linearGradient id="feat1" x1="16" y1="2" x2="16" y2="29"><stop stopColor="#22D3EE"/><stop offset="1" stopColor="#0891B2"/></linearGradient></defs>
      </svg>
    ),
    title: '7-Stage Purification',
    desc: 'Sediment, carbon, RO membrane, UV sterilization, UF, and mineral boost — every sip is medically pure.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="7" width="24" height="18" rx="4" fill="url(#feat2)"/>
        <rect x="8" y="11" width="7" height="10" rx="1.5" fill="white" opacity="0.9"/>
        <circle cx="22" cy="16" r="3.5" fill="white" opacity="0.9"/>
        <path d="M20.5 16L22 17.5L24 14.5" stroke="#0891B2" strokeWidth="1.3" strokeLinecap="round"/>
        <defs><linearGradient id="feat2" x1="4" y1="7" x2="28" y2="25"><stop stopColor="#155E75"/><stop offset="1" stopColor="#0891B2"/></linearGradient></defs>
      </svg>
    ),
    title: 'Smart TDS Monitor',
    desc: 'Real-time digital display shows live TDS, pH levels, and water quality score. Know what you drink.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="url(#feat3)"/>
        <path d="M10 16C10 16 13 10 16 16C19 22 22 16 22 16" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <defs><linearGradient id="feat3" x1="4" y1="4" x2="28" y2="28"><stop stopColor="#22D3EE"/><stop offset="1" stopColor="#155E75"/></linearGradient></defs>
      </svg>
    ),
    title: 'IoT & App Control',
    desc: 'Monitor filter life, water usage, and quality from your smartphone. Get alerts & reminders instantly.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L3 10V22L16 29L29 22V10L16 3Z" fill="url(#feat4)"/>
        <path d="M12 16L14.5 18.5L20 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="feat4" x1="3" y1="3" x2="29" y2="29"><stop stopColor="#0891B2"/><stop offset="1" stopColor="#155E75"/></linearGradient></defs>
      </svg>
    ),
    title: 'BIS & WHO Certified',
    desc: 'Fully certified by Bureau of Indian Standards and WHO water quality standards. Safe for infants.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="url(#feat5)"/>
        <path d="M16 10V16L20 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <defs><linearGradient id="feat5" x1="4" y1="4" x2="28" y2="28"><stop stopColor="#67E8F9"/><stop offset="1" stopColor="#0E7490"/></linearGradient></defs>
      </svg>
    ),
    title: 'Auto Filter Alerts',
    desc: 'Smart sensor tracks filter usage and sends timely replacement reminders — no guesswork needed.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="5" width="22" height="22" rx="6" fill="url(#feat6)"/>
        <path d="M12 16H20M16 12V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <defs><linearGradient id="feat6" x1="5" y1="5" x2="27" y2="27"><stop stopColor="#0891B2"/><stop offset="1" stopColor="#22D3EE"/></linearGradient></defs>
      </svg>
    ),
    title: '24×7 Support',
    desc: 'Dedicated service engineers, free installation, and annual maintenance. We\'re always just a call away.',
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
          ? 'linear-gradient(135deg, #0F172A, #164E63)'
          : '#ffffff',
        borderRadius: '20px',
        padding: '32px 28px',
        border: `1px solid ${hovered ? 'rgba(8,145,178,0.4)' : 'rgba(8,145,178,0.1)'}`,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: hovered
          ? '0 20px 50px rgba(8,145,178,0.2), 0 0 0 1px rgba(8,145,178,0.3)'
          : '0 2px 16px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.12) 0%, transparent 60%)',
        }} />
      )}
      <div style={{
        width: '56px', height: '56px',
        borderRadius: '14px',
        background: hovered ? 'rgba(34,211,238,0.15)' : 'rgba(8,145,178,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '18px',
        border: `1px solid ${hovered ? 'rgba(34,211,238,0.3)' : 'rgba(8,145,178,0.1)'}`,
        transition: 'all 0.3s',
      }}>
        {feature.icon}
      </div>
      <h3 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '17px',
        fontWeight: 700,
        color: hovered ? '#ffffff' : '#0F172A',
        marginBottom: '10px',
        transition: 'color 0.3s',
      }}>
        {feature.title}
      </h3>
      <p style={{
        color: hovered ? 'rgba(255,255,255,0.7)' : '#64748B',
        fontSize: '14px',
        lineHeight: 1.7,
        transition: 'color 0.3s',
      }}>
        {feature.desc}
      </p>
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill="#22C55E" opacity="0.15"/>
      <path d="M5.5 9L7.5 11L12.5 6" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill="#EF4444" opacity="0.1"/>
      <path d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Features() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [compRef, compInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="features" style={{ padding: '100px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,145,178,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(8,145,178,0.06)', border: '1px solid rgba(8,145,178,0.15)',
            borderRadius: '25px', padding: '6px 16px', marginBottom: '16px',
          }}>
            <span style={{ color: '#0891B2', fontSize: '13px', fontWeight: 600 }}>The Aqua Imperial Advantage</span>
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '16px',
            letterSpacing: '-0.5px',
          }}>
            Next-Gen Water Purification at Best Costs
          </h2>
          <p style={{ color: '#64748B', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Experience the smartest water purification solutions with Aqua Imperial. 
            See how we compare against traditional options.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          ref={compRef}
          initial={{ opacity: 0, y: 40 }}
          animate={compInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid rgba(8,145,178,0.12)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            marginBottom: '80px',
          }}
        >
          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '0',
            background: '#F8FFFE',
            borderBottom: '1px solid rgba(8,145,178,0.1)',
          }}
            className="comparison-grid"
          >
            <div style={{ padding: '20px 28px', fontWeight: 700, color: '#334155', fontSize: '14px' }}>Feature</div>
            <div style={{ padding: '20px 20px', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, color: '#94A3B8', fontSize: '13px' }}>Water Can</div>
            </div>
            <div style={{ padding: '20px 20px', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, color: '#94A3B8', fontSize: '13px' }}>Other Purifiers</div>
            </div>
            <div style={{ padding: '20px 20px', textAlign: 'center', background: 'rgba(8,145,178,0.06)' }}>
              <div style={{ fontWeight: 800, color: '#0891B2', fontSize: '13px' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                  <path d="M7 1C7 1 3 6 3 9C3 11.761 4.791 14 7 14C9.209 14 11 11.761 11 9C11 6 7 1 7 1Z" fill="#0891B2"/>
                </svg>
                Aqua Imperial
              </div>
            </div>
          </div>

          {/* Table rows */}
          {comparisonData.map((row, i) => (
            <div key={row.feature} style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
              gap: '0',
              borderBottom: i < comparisonData.length - 1 ? '1px solid rgba(0,0,0,0.04)' : 'none',
              transition: 'background 0.2s',
            }}
              className="comparison-grid"
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(8,145,178,0.02)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ padding: '16px 28px', fontWeight: 600, color: '#334155', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                {row.feature}
              </div>
              <div style={{ padding: '16px 20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {row.isBool ? (row.waterCan ? <CheckIcon /> : <CrossIcon />) : row.waterCan}
              </div>
              <div style={{ padding: '16px 20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {row.isBool ? (row.otherPurifier ? <CheckIcon /> : <CrossIcon />) : row.otherPurifier}
              </div>
              <div style={{
                padding: '16px 20px', textAlign: 'center',
                background: 'rgba(8,145,178,0.03)',
                color: row.highlight ? '#0891B2' : '#164E63',
                fontWeight: row.highlight ? 700 : 600,
                fontSize: '13px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {row.isBool ? (row.aquaImperial ? <CheckIcon /> : <CrossIcon />) : row.aquaImperial}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Feature cards header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '12px',
          }}>
            Technology That Cares for Your Health
          </h3>
          <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Aqua Imperial combines cutting-edge filtration with intelligent monitoring.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .comparison-grid { grid-template-columns: 1.2fr 0.8fr 0.8fr 1fr !important; font-size: 12px !important; }
        }
        @media (max-width: 480px) {
          .comparison-grid { grid-template-columns: 1fr 1fr !important; }
          .comparison-grid > div:nth-child(4n+2),
          .comparison-grid > div:nth-child(4n+3) { display: none !important; }
        }
      `}</style>
    </section>
  );
}
