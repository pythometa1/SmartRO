import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    num: '01',
    title: 'Choose Your Product',
    desc: 'Browse our range of smart water purifiers — RO, Copper, Alkaline, or Mineral+ — and pick what suits your family.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2C14 2 6 10 6 16C6 20.418 9.582 24 14 24C18.418 24 22 20.418 22 16C22 10 14 2 14 2Z" fill="white" opacity="0.9"/>
        <path d="M10 15C10 15 12 12 14 11.5" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#0891B2',
  },
  {
    num: '02',
    title: 'Select a Plan',
    desc: 'Pick from flexible short-term (28/90/180 days) or long-term value plans that fit your budget.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="5" width="20" height="18" rx="3" fill="white" opacity="0.9"/>
        <path d="M9 12H19M9 16H15" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#0E7490',
  },
  {
    num: '03',
    title: 'Submit Details',
    desc: 'Fill in your name, address, and contact info. Our team will verify and confirm your order quickly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" fill="white" opacity="0.9"/>
        <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
      </svg>
    ),
    color: '#22D3EE',
  },
  {
    num: '04',
    title: 'Make Payment',
    desc: 'Pay securely through UPI, cards, or net banking. Your first month\'s subscription gets you started.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="14" rx="3" fill="white" opacity="0.9"/>
        <path d="M3 12H25" stroke="#0891B2" strokeWidth="2"/>
        <rect x="6" y="16" width="6" height="2" rx="1" fill="#0891B2" opacity="0.5"/>
      </svg>
    ),
    color: '#0891B2',
  },
  {
    num: '05',
    title: 'Installation in 48hrs',
    desc: 'Our certified engineer visits your home and installs the purifier professionally — completely free of charge.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M9 20L7 22L9 24L21 12L19 10L9 20Z" fill="white" opacity="0.9"/>
        <circle cx="21" cy="8" r="4" fill="white" opacity="0.7"/>
      </svg>
    ),
    color: '#0E7490',
  },
  {
    num: '06',
    title: 'Connect & Enjoy',
    desc: 'Connect your purifier to the Aqua Imperial app. Track water quality, filter health, and recharge — all from your phone.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" fill="white" opacity="0.2" stroke="white" strokeWidth="1.5"/>
        <path d="M10 14L12.5 16.5L18 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#22D3EE',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="how-it-works"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #0F172A 0%, #164E63 50%, #0F172A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.08 }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ width: '200%', animation: 'waveAnim 12s linear infinite' }}>
          <path d="M0,100 C360,180 720,20 1080,100 C1260,140 1380,60 1440,100 L1440,200 L0,200 Z" fill="#22D3EE" />
        </svg>
      </div>

      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)',
            borderRadius: '25px', padding: '6px 16px', marginBottom: '16px',
          }}>
            <span style={{ color: '#67E8F9', fontSize: '13px', fontWeight: 600 }}>How It Works</span>
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '16px',
          }}>
            Get Started in 6 Simple Steps
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From choosing your purifier to enjoying pure water — our process is quick, easy, and hassle-free.
          </p>
        </motion.div>

        {/* Steps row — single line on desktop, horizontal scroll on mobile */}
        <div className="hiw-row">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="hiw-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {i < steps.length - 1 && (
                <div className="hiw-connector" aria-hidden="true">
                  <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                    <line x1="0" y1="1" x2="100" y2="1" stroke={`${step.color}55`} strokeWidth="2" strokeDasharray="3 3" />
                  </svg>
                </div>
              )}

              {/* Step circle */}
              <div style={{
                width: '56px', height: '56px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${step.color}, #0F172A)`,
                border: `1.5px solid ${step.color}60`,
                boxShadow: `0 0 22px ${step.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                position: 'relative',
              }}>
                {step.icon}
                <div style={{
                  position: 'absolute',
                  top: '-6px', right: '-6px',
                  width: '20px', height: '20px',
                  borderRadius: '7px',
                  background: step.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: 800, color: 'white',
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {i + 1}
                </div>
              </div>

              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13.5px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px',
                lineHeight: 1.25,
              }}>
                {step.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '11.5px',
                lineHeight: 1.55,
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <style>{`
          .hiw-row {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 16px;
            position: relative;
          }
          .hiw-card {
            position: relative;
            text-align: center;
            padding: 22px 12px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(34, 211, 238, 0.1);
            border-radius: 18px;
            transition: background 0.3s, border-color 0.3s, transform 0.3s;
          }
          .hiw-card:hover {
            background: rgba(34, 211, 238, 0.06);
            border-color: rgba(34, 211, 238, 0.25);
            transform: translateY(-4px);
          }
          .hiw-connector {
            position: absolute;
            top: 50px;
            right: -16px;
            width: 16px;
            height: 2px;
            opacity: 0.7;
            pointer-events: none;
          }

          /* Tablet — 3 columns x 2 rows */
          @media (max-width: 900px) {
            .hiw-row { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            .hiw-connector { display: none; }
          }

          /* Mobile — single column, stacked vertically (page scroll) */
          @media (max-width: 600px) {
            .hiw-row {
              display: grid;
              grid-template-columns: 1fr;
              gap: 14px;
            }
          }
        `}</style>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 8px 36px rgba(34,197,94,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #22C55E, #16A34A)',
              color: 'white',
              border: 'none',
              padding: '16px 44px',
              borderRadius: '12px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 8px 28px rgba(34,197,94,0.35)',
            }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
