import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const plans = [
  {
    id: 1,
    name: 'Starter Plan',
    tagline: 'Perfect for individuals & couples',
    price: '₹599',
    period: '28 Days',
    water: '900',
    perLitre: '0.67',
    color: '#0ea5e9',
    badge: null,
    popular: false,
    features: [
      '900 Litres of purified water',
      'Valid for 28 days',
      'Free installation',
      '7-Stage RO+UV filtration',
      'Live TDS monitoring',
      'On-call service support',
    ],
    icon: (
      <svg width="52" height="70" viewBox="0 0 52 70" fill="none">
        <path d="M26 2C26 2 8 22 8 38C8 47.941 16.059 56 26 56C35.941 56 44 47.941 44 38C44 22 26 2 26 2Z" fill="url(#planBlue)" />
        <path d="M18 36C18 36 20 31 26 29" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <defs>
          <linearGradient id="planBlue" x1="26" y1="2" x2="26" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7dd3fc" /><stop offset="1" stopColor="#0284c7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Family Plan',
    tagline: 'Most popular — great value for families',
    price: '₹999',
    period: '3 Months',
    water: '1500',
    perLitre: '0.67',
    color: '#0369a1',
    badge: 'MOST POPULAR',
    popular: true,
    features: [
      '1500 Litres of purified water',
      'Valid for 3 months (90 days)',
      'Free installation & setup',
      '7-Stage RO+UV+UF filtration',
      'Smart TDS display',
      'Priority customer support',
      'Free filter health checkup',
    ],
    icon: (
      <svg width="52" height="70" viewBox="0 0 52 70" fill="none">
        <path d="M26 2C26 2 8 22 8 38C8 47.941 16.059 56 26 56C35.941 56 44 47.941 44 38C44 22 26 2 26 2Z" fill="url(#planDeep)" />
        <path d="M18 36C18 36 20 31 26 29" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="26" cy="38" r="6" fill="rgba(255,255,255,0.2)" />
        <path d="M23 38L25 40L29 36" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="planDeep" x1="26" y1="2" x2="26" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" /><stop offset="1" stopColor="#0369a1" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Premium Plan',
    tagline: 'Best savings for large families',
    price: '₹1,899',
    period: '6 Months',
    water: '3000',
    perLitre: '0.63',
    color: '#06b6d4',
    badge: 'BEST VALUE',
    popular: false,
    features: [
      '3000 Litres of purified water',
      'Valid for 6 months (180 days)',
      'Free installation & setup',
      '7-Stage RO+UV+UF+Mineral',
      'Smart TDS & pH monitoring',
      'Dedicated service engineer',
      '2 Free filter replacements',
      'Annual maintenance included',
    ],
    icon: (
      <svg width="52" height="70" viewBox="0 0 52 70" fill="none">
        <path d="M26 2C26 2 8 22 8 38C8 47.941 16.059 56 26 56C35.941 56 44 47.941 44 38C44 22 26 2 26 2Z" fill="url(#planCyan)" />
        <path d="M18 36C18 36 20 31 26 29" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M22 42C22 42 24 45 26 45C28 45 30 42 30 42" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <defs>
          <linearGradient id="planCyan" x1="26" y1="2" x2="26" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#67e8f9" /><stop offset="1" stopColor="#0891b2" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

function WaterFillBar({ litres, maxLitres, color, active }) {
  const pct = Math.round((litres / maxLitres) * 100);
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: active ? 'rgba(255,255,255,0.5)' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Water Volume
        </span>
        <span style={{ fontSize: '12px', fontWeight: 700, color: active ? '#38bdf8' : color }}>
          {litres}L
        </span>
      </div>
      <div style={{
        height: '8px', borderRadius: '4px',
        background: active ? 'rgba(255,255,255,0.1)' : 'rgba(14,165,233,0.1)',
        overflow: 'hidden', position: 'relative',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, #38bdf8)`,
            borderRadius: '4px',
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

export default function Products() {
  const [selected, setSelected] = useState(2);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="products"
      style={{ padding: '100px 0', background: '#f0f9ff', position: 'relative', overflow: 'hidden' }}
    >
      {/* BG orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-80px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
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
            <span style={{ color: '#0ea5e9', fontSize: '13px', fontWeight: 600 }}>Water Plans</span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, color: '#0c1a2e', marginBottom: '16px',
          }}>
            Simple, Affordable Water Plans
          </h2>
          <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Pay only for the pure water you need. No hidden charges, no maintenance headaches — SmartRO takes care of everything.
          </p>

          {/* Value callout */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(14,165,233,0.06)', border: '1px dashed rgba(14,165,233,0.3)',
            borderRadius: '12px', padding: '10px 20px', marginTop: '20px',
            color: '#0369a1', fontSize: '14px', fontWeight: 600,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#0ea5e9">
              <path d="M8 1C8 1 3 7 3 11C3 13.761 5.239 16 8 16C10.761 16 13 13.761 13 11C13 7 8 1 8 1Z"/>
            </svg>
            Pure RO water starting at just ₹0.63 per litre — cheaper than a water bottle!
          </div>
        </motion.div>

        {/* Plan cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => setSelected(plan.id)}
              style={{
                background: selected === plan.id
                  ? 'linear-gradient(155deg, #0c1a2e 0%, #0a2540 60%, #073260 100%)'
                  : '#ffffff',
                borderRadius: '28px',
                padding: '36px 28px',
                border: `2px solid ${selected === plan.id ? plan.color : 'rgba(14,165,233,0.12)'}`,
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                boxShadow: selected === plan.id
                  ? `0 24px 64px ${plan.color}30, 0 0 0 1px ${plan.color}40`
                  : '0 4px 24px rgba(0,0,0,0.06)',
                transform: selected === plan.id ? 'translateY(-10px) scale(1.02)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow bg on selected */}
              {selected === plan.id && (
                <div style={{
                  position: 'absolute', top: '-60px', right: '-60px',
                  width: '200px', height: '200px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${plan.color}25 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
              )}

              {/* Badge */}
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: '18px', right: '18px',
                  background: `linear-gradient(135deg, ${plan.color}, #0c1a2e)`,
                  color: 'white', fontSize: '10px', fontWeight: 700,
                  padding: '5px 14px', borderRadius: '20px',
                  letterSpacing: '1px',
                  boxShadow: `0 4px 14px ${plan.color}50`,
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Water drop icon */}
              <div style={{
                display: 'flex', justifyContent: 'center', marginBottom: '20px',
              }}>
                <motion.div
                  animate={selected === plan.id ? { y: [0, -12, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '90px', height: '90px', borderRadius: '50%',
                    background: selected === plan.id
                      ? `rgba(${plan.color === '#0369a1' ? '3,105,161' : plan.color === '#06b6d4' ? '6,182,212' : '14,165,233'},0.15)`
                      : `rgba(14,165,233,0.06)`,
                    border: `2px solid ${selected === plan.id ? plan.color + '60' : 'rgba(14,165,233,0.1)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: selected === plan.id ? `0 0 30px ${plan.color}30` : 'none',
                  }}
                >
                  {plan.icon}
                </motion.div>
              </div>

              {/* Plan name */}
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '22px', fontWeight: 800, textAlign: 'center',
                color: selected === plan.id ? '#ffffff' : '#0c1a2e',
                marginBottom: '4px',
              }}>
                {plan.name}
              </h3>
              <p style={{
                color: selected === plan.id ? 'rgba(56,189,248,0.85)' : '#64748b',
                fontSize: '13px', fontWeight: 500, textAlign: 'center',
                marginBottom: '28px', lineHeight: 1.4,
              }}>
                {plan.tagline}
              </p>

              {/* Price block */}
              <div style={{
                background: selected === plan.id ? 'rgba(14,165,233,0.12)' : 'rgba(14,165,233,0.05)',
                border: `1px solid ${selected === plan.id ? plan.color + '40' : 'rgba(14,165,233,0.12)'}`,
                borderRadius: '16px', padding: '20px',
                textAlign: 'center', marginBottom: '24px',
              }}>
                <div style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(42px, 6vw, 52px)',
                  fontWeight: 900, lineHeight: 1,
                  color: selected === plan.id ? '#38bdf8' : plan.color,
                }}>
                  {plan.price}
                </div>
                <div style={{
                  color: selected === plan.id ? 'rgba(255,255,255,0.6)' : '#64748b',
                  fontSize: '14px', fontWeight: 500, marginTop: '6px',
                }}>
                  for {plan.period}
                </div>

                {/* Spec row */}
                <div style={{
                  display: 'flex', justifyContent: 'center', gap: '20px',
                  marginTop: '14px', paddingTop: '14px',
                  borderTop: `1px solid ${selected === plan.id ? 'rgba(255,255,255,0.08)' : 'rgba(14,165,233,0.1)'}`,
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: selected === plan.id ? '#38bdf8' : plan.color, fontWeight: 800, fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>
                      {plan.water}L
                    </div>
                    <div style={{ color: selected === plan.id ? 'rgba(255,255,255,0.45)' : '#94a3b8', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' }}>
                      Total Water
                    </div>
                  </div>
                  <div style={{ width: '1px', background: selected === plan.id ? 'rgba(255,255,255,0.1)' : 'rgba(14,165,233,0.1)' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: selected === plan.id ? '#38bdf8' : plan.color, fontWeight: 800, fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>
                      ₹{plan.perLitre}
                    </div>
                    <div style={{ color: selected === plan.id ? 'rgba(255,255,255,0.45)' : '#94a3b8', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' }}>
                      Per Litre
                    </div>
                  </div>
                  <div style={{ width: '1px', background: selected === plan.id ? 'rgba(255,255,255,0.1)' : 'rgba(14,165,233,0.1)' }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: selected === plan.id ? '#38bdf8' : plan.color, fontWeight: 800, fontSize: '18px', fontFamily: 'Poppins, sans-serif' }}>
                      {plan.period}
                    </div>
                    <div style={{ color: selected === plan.id ? 'rgba(255,255,255,0.45)' : '#94a3b8', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' }}>
                      Validity
                    </div>
                  </div>
                </div>
              </div>

              {/* Water fill bar */}
              <WaterFillBar
                litres={parseInt(plan.water)}
                maxLitres={3000}
                color={plan.color}
                active={selected === plan.id}
              />

              {/* Features */}
              <ul style={{ listStyle: 'none', marginBottom: '28px' }}>
                {plan.features.map((f) => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    marginBottom: '10px',
                    color: selected === plan.id ? 'rgba(255,255,255,0.8)' : '#475569',
                    fontSize: '13px', lineHeight: 1.4,
                  }}>
                    <svg style={{ flexShrink: 0, marginTop: '1px' }} width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill={plan.color} opacity="0.2" />
                      <path d="M5 8L7 10L11 6" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 12px 32px ${plan.color}60` }}
                whileTap={{ scale: 0.96 }}
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  width: '100%',
                  background: selected === plan.id
                    ? `linear-gradient(135deg, ${plan.color}, #0369a1)`
                    : 'transparent',
                  color: selected === plan.id ? 'white' : plan.color,
                  border: `2px solid ${plan.color}`,
                  padding: '14px',
                  borderRadius: '14px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700, fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: selected === plan.id ? `0 8px 24px ${plan.color}40` : 'none',
                  transition: 'all 0.3s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C9 1 4 7 4 11C4 13.761 6.239 16 9 16C11.761 16 14 13.761 14 11C14 7 9 1 9 1Z"
                    fill={selected === plan.id ? 'white' : plan.color} opacity="0.8" />
                </svg>
                Get This Plan
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textAlign: 'center', marginTop: '48px',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px',
          }}
        >
          {[
            { icon: '🚚', text: 'Free Installation' },
            { icon: '🔧', text: 'No Maintenance Charges' },
            { icon: '📞', text: '24/7 Support' },
            { icon: '💧', text: '99.9% Pure Water' },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '14px', fontWeight: 500 }}>
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
