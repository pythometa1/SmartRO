import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    num: '01',
    title: 'Book a Free Demo',
    desc: 'Fill the enquiry form or call us. Our expert visits your home at a convenient time — absolutely free.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="3" fill="white" opacity="0.2" stroke="white" strokeWidth="1.5" />
        <path d="M10 11H22M10 15H18M10 19H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="20" r="4" fill="white" opacity="0.3" />
        <path d="M20.5 20H21.5L23 21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#0369a1',
  },
  {
    num: '02',
    title: 'Water Quality Testing',
    desc: 'Our engineer tests your water TDS, hardness, and contaminants on-site using professional equipment.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C16 4 8 13 8 19C8 23.418 11.582 27 16 27C20.418 27 24 23.418 24 19C24 13 16 4 16 4Z" fill="white" opacity="0.3" stroke="white" strokeWidth="1.5" />
        <path d="M12 18C12 18 13.5 16 16 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#0ea5e9',
  },
  {
    num: '03',
    title: 'Custom Installation',
    desc: 'We recommend the perfect SmartRO model and install it with precision — clean, professional, and fast.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 22L8 24L10 26L22 14L20 12L10 22Z" fill="white" opacity="0.3" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="22" cy="10" r="4" fill="white" opacity="0.3" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    color: '#06b6d4',
  },
  {
    num: '04',
    title: 'Enjoy Pure Water',
    desc: 'Monitor everything via app, get filter alerts, and enjoy crystal-clear water 24/7. Service is on us.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" fill="white" opacity="0.2" stroke="white" strokeWidth="1.5" />
        <path d="M11 16L14 19L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#38bdf8',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="how-it-works"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #0c1a2e 0%, #0a2540 50%, #073763 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background waves */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.1 }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ width: '200%', animation: 'waveAnim 12s linear infinite' }}>
          <path d="M0,100 C360,180 720,20 1080,100 C1260,140 1380,60 1440,100 L1440,200 L0,200 Z" fill="#0ea5e9" />
        </svg>
      </div>

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)',
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
            background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)',
            borderRadius: '25px', padding: '6px 16px', marginBottom: '16px',
          }}>
            <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 600 }}>Simple Process</span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '16px',
          }}>
            How SmartRO Works
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            From booking to enjoying pure water — our process is simple, fast, and hassle-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '12%',
            right: '12%',
            height: '2px',
            background: 'linear-gradient(90deg, #0369a1, #0ea5e9, #06b6d4, #38bdf8)',
            zIndex: 0,
          }}
            className="step-connector"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 1 }}
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '80px', height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${step.color}, #0c1a2e)`,
                  border: `2px solid ${step.color}`,
                  boxShadow: `0 0 30px ${step.color}66, 0 0 60px ${step.color}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 28px',
                  cursor: 'default',
                  position: 'relative',
                }}
              >
                {step.icon}
                <div style={{
                  position: 'absolute',
                  top: '-8px', right: '-8px',
                  width: '26px', height: '26px',
                  borderRadius: '50%',
                  background: step.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: `0 0 10px ${step.color}`,
                }}>
                  {i + 1}
                </div>
              </motion.div>

              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                color: '#38bdf8',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                STEP {step.num}
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px',
              }}>
                {step.title}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '14px',
                lineHeight: 1.7,
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(14,165,233,0.7)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
              color: 'white',
              border: 'none',
              padding: '16px 48px',
              borderRadius: '50px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(14,165,233,0.4)',
            }}
          >
            Book Free Home Demo
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-connector { display: none; }
        }
      `}</style>
    </section>
  );
}
