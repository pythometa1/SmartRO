import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function WaterDrop({ style }) {
  return (
    <motion.div
      animate={{ y: [0, -25, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        ...style,
      }}
    >
      <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
        <path d="M20 0C20 0 4 18 4 30C4 39.941 11.163 48 20 48C28.837 48 36 39.941 36 30C36 18 20 0 20 0Z"
          fill="url(#dropGrad)" opacity="0.7" />
        <path d="M12 28C12 28 14 24 18 23" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <defs>
          <linearGradient id="dropGrad" x1="20" y1="0" x2="20" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

function Bubble({ size, left, delay, duration }) {
  return (
    <motion.div
      initial={{ y: '110vh', opacity: 0, scale: 0 }}
      animate={{ y: '-10vh', opacity: [0, 0.6, 0.4, 0], scale: [0, 1, 1.1, 0.9] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        left: `${left}%`,
        bottom: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'rgba(14,165,233,0.2)',
        border: '1px solid rgba(56,189,248,0.4)',
        backdropFilter: 'blur(2px)',
      }}
    />
  );
}

const bubbles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: `${10 + Math.random() * 30}px`,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
}));

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEnquiry = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0c1a2e 0%, #0a2540 40%, #0369a1 80%, #0ea5e9 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{
          x: mousePos.x * -30,
          y: mousePos.y * -30,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Wave SVG at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '200%', height: '120px', animation: 'waveAnim 10s linear infinite' }}>
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.05)" />
        </svg>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '200%', height: '90px', animation: 'waveAnim 14s linear infinite reverse' }}>
          <path d="M0,40 C360,100 720,0 1080,60 C1200,80 1320,20 1440,40 L1440,120 L0,120 Z" fill="rgba(14,165,233,0.08)" />
        </svg>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '100%', height: '80px' }}>
          <path d="M0,40 C360,80 720,0 1080,40 C1200,60 1320,20 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Bubbles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {bubbles.map(b => <Bubble key={b.id} {...b} />)}
      </div>

      {/* Floating drops */}
      <WaterDrop style={{ top: '15%', left: '8%', opacity: 0.6 }} />
      <WaterDrop style={{ top: '30%', right: '12%', opacity: 0.5, transform: 'scale(0.7)' }} />
      <WaterDrop style={{ bottom: '25%', left: '15%', opacity: 0.4, transform: 'scale(0.5)' }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Main content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '120px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(14,165,233,0.15)',
              border: '1px solid rgba(14,165,233,0.4)',
              borderRadius: '25px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', animation: 'pulse-glow 2s infinite' }} />
            <span style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 500 }}>India's #1 Smart Water Purifier</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(36px, 5vw, 62px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-1px',
            }}
          >
            Pure Water,<br />
            <span style={{ background: 'linear-gradient(90deg, #38bdf8, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Smart Living
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '500px',
            }}
          >
            Experience next-generation RO water purification with real-time TDS monitoring, AI-powered filtration, and smart connectivity. Safe, clean water for your family — always.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: 'flex', gap: '32px', marginBottom: '36px', flexWrap: 'wrap' }}
          >
            {[
              { value: '50K+', label: 'Happy Customers' },
              { value: '7-Stage', label: 'Purification' },
              { value: '99.9%', label: 'Pure Water' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>{stat.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(14,165,233,0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnquiry}
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                color: 'white',
                border: 'none',
                padding: '16px 36px',
                borderRadius: '50px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(14,165,233,0.4)',
                animation: 'pulse-glow 3s infinite',
              }}
            >
              Get Free Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, background: 'rgba(14,165,233,0.15)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                border: '1.5px solid rgba(56,189,248,0.4)',
                padding: '16px 36px',
                borderRadius: '50px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
              }}
            >
              View Products
            </motion.button>
          </motion.div>
        </div>

        {/* Right: 3D Purifier Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          {/* Outer glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '360px', height: '360px',
              borderRadius: '50%',
              border: '2px solid transparent',
              background: 'linear-gradient(90deg, rgba(14,165,233,0.4), transparent, rgba(6,182,212,0.4), transparent) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '300px', height: '300px',
              borderRadius: '50%',
              border: '1px dashed rgba(56,189,248,0.3)',
            }}
          />

          {/* Purifier body */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            {/* Main unit */}
            <div style={{
              width: '200px',
              background: 'linear-gradient(160deg, #e8f4f8 0%, #c8e6f0 40%, #a8d8ea 100%)',
              borderRadius: '30px 30px 20px 20px',
              padding: '30px 20px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 40px rgba(14,165,233,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Shimmer */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s infinite',
              }} />

              {/* Screen */}
              <div style={{
                background: '#0c1a2e',
                borderRadius: '12px',
                padding: '12px',
                marginBottom: '20px',
                border: '2px solid rgba(14,165,233,0.5)',
                boxShadow: '0 0 20px rgba(14,165,233,0.3)',
              }}>
                <div style={{ color: '#38bdf8', fontSize: '10px', fontWeight: 600, marginBottom: '4px' }}>TDS LEVEL</div>
                <div style={{ color: '#ffffff', fontSize: '28px', fontWeight: 800, fontFamily: 'monospace' }}>
                  <CounterDisplay target={28} />
                </div>
                <div style={{ color: '#4ade80', fontSize: '9px', fontWeight: 500 }}>EXCELLENT QUALITY</div>
                <div style={{
                  marginTop: '8px', height: '4px', borderRadius: '2px',
                  background: 'rgba(255,255,255,0.1)', overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '28%' }}
                    transition={{ duration: 2, delay: 1 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, #4ade80, #38bdf8)', borderRadius: '2px' }}
                  />
                </div>
              </div>

              {/* Filter stages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Sediment', 'Carbon', 'RO Membrane', 'UV', 'Mineral'].map((stage, i) => (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      background: 'rgba(14,165,233,0.1)',
                      borderRadius: '6px', padding: '5px 8px',
                    }}
                  >
                    <div style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: `hsl(${190 + i * 15}, 80%, 55%)`,
                      boxShadow: `0 0 6px hsl(${190 + i * 15}, 80%, 55%)`,
                    }} />
                    <span style={{ color: '#1e293b', fontSize: '10px', fontWeight: 600 }}>{stage}</span>
                    <div style={{ marginLeft: 'auto' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="6" r="5" fill="#4ade80" opacity="0.2" />
                        <path d="M3.5 6L5 7.5L8.5 4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* SmartRO badge */}
              <div style={{
                marginTop: '16px', textAlign: 'center',
                fontFamily: 'Poppins, sans-serif', fontWeight: 700,
                fontSize: '16px', color: '#0369a1', letterSpacing: '1px',
              }}>
                Smart<span style={{ color: '#0ea5e9' }}>RO</span>
              </div>

              {/* Water tap */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <div style={{
                  width: '30px', height: '20px',
                  background: 'linear-gradient(180deg, #94a3b8, #64748b)',
                  borderRadius: '4px 4px 2px 2px',
                  position: 'relative',
                }}>
                  <motion.div
                    animate={{ height: ['0px', '25px', '0px'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    style={{
                      position: 'absolute',
                      bottom: '-25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      background: 'linear-gradient(180deg, #7dd3fc, #0284c7)',
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Water pool */}
            <motion.div
              animate={{ scaleX: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '180px',
                height: '20px',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.6) 0%, transparent 70%)',
                borderRadius: '50%',
                margin: '0 auto',
                filter: 'blur(8px)',
              }}
            />
          </motion.div>

          {/* Floating mini badges */}
          {[
            { text: 'WiFi Connected', icon: '📶', top: '5%', right: '-10%' },
            { text: '99.9% Pure', icon: '✓', bottom: '20%', left: '-15%' },
            { text: 'BIS Certified', icon: '🛡', top: '40%', right: '-20%' },
          ].map((badge) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
              style={{
                position: 'absolute',
                ...Object.fromEntries(['top','bottom','left','right'].filter(k => badge[k]).map(k => [k, badge[k]])),
                background: 'rgba(12,26,46,0.9)',
                border: '1px solid rgba(56,189,248,0.4)',
                borderRadius: '20px',
                padding: '8px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
                backdropFilter: 'blur(10px)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '14px' }}>{badge.icon}</span>
              <span style={{ color: 'white', fontSize: '11px', fontWeight: 600 }}>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 8px 30px rgba(14,165,233,0.4); }
          50% { box-shadow: 0 8px 50px rgba(14,165,233,0.8), 0 0 80px rgba(14,165,233,0.2); }
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}

function CounterDisplay({ target }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 60);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}</>;
}
