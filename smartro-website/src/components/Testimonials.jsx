import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'We installed SmartRO Pro 8 months ago. The water quality is absolutely amazing — TDS has dropped from 480 to just 28. The app alerts are super helpful and the after-service is excellent!',
    avatar: 'PS',
    color: '#0ea5e9',
    title: 'Homemaker',
  },
  {
    id: 2,
    name: 'Rajesh Kulkarni',
    location: 'Nashik, Maharashtra',
    rating: 5,
    text: "Best purchase of the year! My daughter's health has improved significantly since we switched to SmartRO. The 7-stage filtration gives us total peace of mind. Highly recommend!",
    avatar: 'RK',
    color: '#06b6d4',
    title: 'Software Engineer',
  },
  {
    id: 3,
    name: 'Sunita Desai',
    location: 'Aurangabad, Maharashtra',
    rating: 5,
    text: 'Installation was done in just 2 hours. The engineer was professional and explained everything clearly. The WiFi connectivity feature is genius — I get alerts on my phone instantly.',
    avatar: 'SD',
    color: '#38bdf8',
    title: 'Teacher',
  },
  {
    id: 4,
    name: 'Amit Joshi',
    location: 'Nagpur, Maharashtra',
    rating: 5,
    text: 'Switched from another brand and I can clearly taste the difference. SmartRO Ultra handles our 5-member family effortlessly. Service team responds within hours. 10/10!',
    avatar: 'AJ',
    color: '#0ea5e9',
    title: 'Business Owner',
  },
  {
    id: 5,
    name: 'Meena Patil',
    location: 'Kolhapur, Maharashtra',
    rating: 5,
    text: 'The free demo really convinced me. Within a week of installation, we noticed the water tastes so much better. Kids love it! Service team is always just a call away.',
    avatar: 'MP',
    color: '#06b6d4',
    title: 'Doctor',
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < rating ? '#fbbf24' : 'rgba(251,191,36,0.2)'}>
          <path d="M8 1l1.854 3.756L14 5.763l-3 2.923.708 4.13L8 10.777l-3.708 2.039L5 8.686 2 5.763l4.146-.007z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      style={{ padding: '100px 0', background: '#ffffff', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', bottom: '-50px', right: '-50px',
        width: '400px', height: '400px', borderRadius: '50%',
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
            <span style={{ color: '#0ea5e9', fontSize: '13px', fontWeight: 600 }}>Customer Stories</span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: '#0c1a2e',
            marginBottom: '16px',
          }}>
            What Our Customers Say
          </h2>
          <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Over 50,000 happy families trust SmartRO for their daily drinking water needs.
          </p>
        </motion.div>

        {/* Featured review */}
        <div style={{ maxWidth: '780px', margin: '0 auto 60px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                borderRadius: '24px',
                padding: '48px 48px',
                border: '1px solid rgba(14,165,233,0.15)',
                boxShadow: '0 20px 60px rgba(14,165,233,0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: '24px', right: '32px',
                fontSize: '120px', color: 'rgba(14,165,233,0.08)',
                fontFamily: 'Georgia, serif', lineHeight: 1, userSelect: 'none',
              }}>
                "
              </div>

              <div style={{ marginBottom: '20px' }}>
                <StarRating rating={testimonials[current].rating} />
              </div>

              <p style={{
                color: '#1e293b',
                fontSize: '18px',
                lineHeight: 1.8,
                fontStyle: 'italic',
                marginBottom: '32px',
                position: 'relative', zIndex: 1,
              }}>
                "{testimonials[current].text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${testimonials[current].color}, #0369a1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 800, fontSize: '18px',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: `0 8px 20px ${testimonials[current].color}40`,
                }}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0c1a2e', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    {testimonials[current].name}
                  </div>
                  <div style={{ color: '#64748b', fontSize: '13px' }}>
                    {testimonials[current].title} · {testimonials[current].location}
                  </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="rgba(14,165,233,0.1)" stroke="rgba(14,165,233,0.3)" />
                    <path d="M16 4C16 4 10 12 10 17C10 20.314 12.686 23 16 23C19.314 23 22 20.314 22 17C22 12 16 4 16 4Z" fill="#0ea5e9" opacity="0.7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: current === i ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: current === i ? '#0ea5e9' : 'rgba(14,165,233,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Mini review grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              onClick={() => setCurrent(i)}
              style={{
                background: current === i ? 'linear-gradient(135deg, #0c1a2e, #0a2540)' : '#f8faff',
                borderRadius: '16px',
                padding: '24px',
                border: `1px solid ${current === i ? 'rgba(14,165,233,0.4)' : 'rgba(14,165,233,0.1)'}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <StarRating rating={t.rating} />
              <p style={{
                color: current === i ? 'rgba(255,255,255,0.75)' : '#475569',
                fontSize: '13px', lineHeight: 1.6,
                marginTop: '10px', marginBottom: '14px',
              }}>
                "{t.text.slice(0, 80)}..."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color}, #0369a1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '13px',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: current === i ? 'white' : '#0c1a2e', fontSize: '13px' }}>{t.name}</div>
                  <div style={{ color: current === i ? 'rgba(255,255,255,0.5)' : '#94a3b8', fontSize: '11px' }}>{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
