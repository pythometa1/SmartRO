import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PHONE = '+919876543210';
const WHATSAPP = '+919876543210';
const EMAIL = 'info@smartro.in';

const cities = ['Pune', 'Mumbai', 'Nashik', 'Aurangabad', 'Nagpur', 'Kolhapur', 'Solapur', 'Satara', 'Other'];
const products = ['SmartRO Lite', 'SmartRO Pro', 'SmartRO Ultra', 'Not Sure (Need Guidance)'];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '', product: '', message: '', source: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone)) e.phone = 'Valid 10-digit phone required';
    if (!formData.city) e.city = 'Please select your city';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field) => (e) => {
    setFormData(p => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }));
  };

  const handleWhatsApp = () => {
    const msg = `Hi SmartRO! I'm interested in a free demo. Name: ${formData.name || 'Customer'}, City: ${formData.city || 'N/A'}`;
    window.open(`https://wa.me/${WHATSAPP.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleCall = () => window.open(`tel:${PHONE}`, '_self');
  const handleEmail = () => window.open(`mailto:${EMAIL}?subject=SmartRO Enquiry&body=Hi, I am interested in SmartRO purifier. Please contact me.`, '_self');

  return (
    <section
      id="contact"
      style={{ padding: '100px 0', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Floating drops BG */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
            style={{
              position: 'absolute',
              left: `${10 + i * 16}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: '12px', height: '16px',
              background: 'linear-gradient(180deg, #7dd3fc, #0284c7)',
              borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
            borderRadius: '25px', padding: '6px 16px', marginBottom: '16px',
          }}>
            <span style={{ color: '#0ea5e9', fontSize: '13px', fontWeight: 600 }}>Get In Touch</span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, color: '#0c1a2e', marginBottom: '16px',
          }}>
            Book Your Free Demo Today
          </h2>
          <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Leave your details and our expert will visit your home at your convenience — free of charge, no obligations.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '48px',
          alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '24px', fontWeight: 700,
              color: '#0c1a2e', marginBottom: '8px',
            }}>
              Contact Us Instantly
            </h3>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, marginBottom: '36px' }}>
              Choose how you'd like to reach us — WhatsApp, phone call, or email. We're available 7 days a week.
            </p>

            {/* Quick contact buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <motion.button
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsApp}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white', border: 'none',
                  padding: '16px 24px', borderRadius: '16px',
                  cursor: 'pointer', width: '100%',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: '12px', opacity: 0.85 }}>Quick response · Available 24/7</div>
                </div>
                <svg style={{ marginLeft: 'auto' }} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M10 4L16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCall}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                  color: 'white', border: 'none',
                  padding: '16px 24px', borderRadius: '16px',
                  cursor: 'pointer', width: '100%',
                  boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>Call Us Now</div>
                  <div style={{ fontSize: '12px', opacity: 0.85 }}>+91 98765 43210 · 9AM–8PM</div>
                </div>
                <svg style={{ marginLeft: 'auto' }} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M10 4L16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleEmail}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                  color: 'white', border: 'none',
                  padding: '16px 24px', borderRadius: '16px',
                  cursor: 'pointer', width: '100%',
                  boxShadow: '0 8px 24px rgba(99,102,241,0.3)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.8" />
                    <path d="M2 7L11 13L20 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px' }}>Send Email</div>
                  <div style={{ fontSize: '12px', opacity: 0.85 }}>info@smartro.in · Reply in 2hrs</div>
                </div>
                <svg style={{ marginLeft: 'auto' }} width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M10 4L16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.button>
            </div>

            {/* Trust badges */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(14,165,233,0.15)',
              boxShadow: '0 4px 20px rgba(14,165,233,0.08)',
            }}>
              <div style={{ fontWeight: 700, color: '#0c1a2e', fontSize: '14px', marginBottom: '16px', fontFamily: 'Poppins, sans-serif' }}>
                Why Trust SmartRO?
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: '✓', text: 'Free home demo & water testing' },
                  { icon: '✓', text: 'Professional installation by certified engineers' },
                  { icon: '✓', text: 'No hidden charges, transparent pricing' },
                  { icon: '✓', text: 'Annual maintenance & filter service' },
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: 'rgba(14,165,233,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      color: '#0ea5e9', fontWeight: 700, fontSize: '12px',
                    }}>
                      {item.icon}
                    </div>
                    <span style={{ color: '#475569', fontSize: '14px', lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(14,165,233,0.15)',
              boxShadow: '0 20px 60px rgba(14,165,233,0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top gradient bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, #0369a1, #0ea5e9, #06b6d4, #38bdf8)',
              }} />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '22px', fontWeight: 700,
                      color: '#0c1a2e', marginBottom: '8px',
                    }}>
                      Request a Free Demo
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '28px', lineHeight: 1.5 }}>
                      Fill in your details and our team will contact you within 30 minutes.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}
                        className="form-grid">
                        <InputField
                          label="Full Name *"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange('name')}
                          error={errors.name}
                          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#94a3b8" strokeWidth="1.5"/><path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                        />
                        <InputField
                          label="Phone Number *"
                          placeholder="10-digit mobile"
                          value={formData.phone}
                          onChange={handleChange('phone')}
                          error={errors.phone}
                          type="tel"
                          icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.41 7.19c.98 1.93 2.56 3.5 4.49 4.49l1.5-1.5c.18-.18.45-.24.69-.16.76.25 1.59.39 2.43.39.37 0 .67.3.67.67v2.38c0 .37-.3.67-.67.67C6.35 14.13 1.87 9.65 1.87 4.09c0-.37.3-.67.67-.67h2.39c.37 0 .67.3.67.67 0 .85.14 1.67.39 2.43.07.24.01.5-.16.68L4.41 7.19z" stroke="#94a3b8" strokeWidth="1.2"/></svg>}
                        />
                      </div>

                      <InputField
                        label="Email Address"
                        placeholder="your@email.com (optional)"
                        value={formData.email}
                        onChange={handleChange('email')}
                        error={errors.email}
                        type="email"
                        style={{ marginBottom: '16px' }}
                        icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#94a3b8" strokeWidth="1.5"/><path d="M2 6l6 4 6-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                      />

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}
                        className="form-grid">
                        <SelectField
                          label="Select City *"
                          value={formData.city}
                          onChange={handleChange('city')}
                          error={errors.city}
                          options={cities}
                          placeholder="Your city"
                        />
                        <SelectField
                          label="Interested Model"
                          value={formData.product}
                          onChange={handleChange('product')}
                          options={products}
                          placeholder="Select model"
                        />
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
                          How did you hear about us?
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {['WhatsApp', 'Google', 'Facebook', 'Friend', 'Other'].map((src) => (
                            <button
                              key={src}
                              type="button"
                              onClick={() => setFormData(p => ({ ...p, source: src }))}
                              style={{
                                padding: '6px 16px',
                                borderRadius: '20px',
                                border: `1.5px solid ${formData.source === src ? '#0ea5e9' : 'rgba(14,165,233,0.2)'}`,
                                background: formData.source === src ? 'rgba(14,165,233,0.1)' : 'transparent',
                                color: formData.source === src ? '#0ea5e9' : '#64748b',
                                fontSize: '13px',
                                fontWeight: formData.source === src ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontFamily: 'Poppins, sans-serif',
                              }}
                            >
                              {src}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
                          Additional Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={handleChange('message')}
                          placeholder="Any specific requirements or questions..."
                          rows={3}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '1.5px solid rgba(14,165,233,0.2)',
                            borderRadius: '12px',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            color: '#1e293b',
                            resize: 'vertical',
                            outline: 'none',
                            background: '#f8faff',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box',
                          }}
                          onFocus={e => e.target.style.borderColor = '#0ea5e9'}
                          onBlur={e => e.target.style.borderColor = 'rgba(14,165,233,0.2)'}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(14,165,233,0.5)' }}
                        whileTap={{ scale: 0.98 }}
                        disabled={loading}
                        style={{
                          width: '100%',
                          background: loading ? '#94a3b8' : 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                          color: 'white', border: 'none',
                          padding: '16px',
                          borderRadius: '14px',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 700, fontSize: '16px',
                          cursor: loading ? 'not-allowed' : 'pointer',
                          boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                          transition: 'background 0.3s',
                        }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                            />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M10 2C10 2 5 8 5 12C5 14.761 7.239 17 10 17C12.761 17 15 14.761 15 12C15 8 10 2 10 2Z" fill="white" opacity="0.8" />
                            </svg>
                            Book Free Demo Now
                          </>
                        )}
                      </motion.button>

                      <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '12px', marginTop: '12px' }}>
                        By submitting, you agree to be contacted by SmartRO team. No spam ever.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '40px 0' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      style={{
                        width: '80px', height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 24px',
                        boxShadow: '0 0 40px rgba(14,165,233,0.4)',
                      }}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M10 20L16 26L30 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', fontWeight: 800, color: '#0c1a2e', marginBottom: '12px' }}>
                      Thank You, {formData.name || 'Friend'}!
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
                      Your demo request has been received. Our team will call you within <strong>30 minutes</strong> to schedule your free home visit.
                    </p>
                    <div style={{
                      background: 'rgba(14,165,233,0.06)',
                      border: '1px solid rgba(14,165,233,0.2)',
                      borderRadius: '12px', padding: '16px',
                      color: '#0369a1', fontSize: '14px', fontWeight: 600,
                      marginBottom: '24px',
                    }}>
                      In a hurry? Call us now at {PHONE}
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        background: 'transparent', border: '1.5px solid rgba(14,165,233,0.3)',
                        color: '#0ea5e9', padding: '10px 28px', borderRadius: '25px',
                        fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '14px',
                        cursor: 'pointer',
                      }}
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InputField({ label, placeholder, value, onChange, error, type = 'text', icon, style: extraStyle }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ ...extraStyle }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        {icon && (
          <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: icon ? '12px 16px 12px 36px' : '12px 16px',
            border: `1.5px solid ${error ? '#ef4444' : focused ? '#0ea5e9' : 'rgba(14,165,233,0.2)'}`,
            borderRadius: '12px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: '#1e293b',
            outline: 'none',
            background: '#f8faff',
            transition: 'border-color 0.2s',
            boxSizing: 'border-box',
          }}
        />
      </div>
      {error && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{error}</div>}
    </div>
  );
}

function SelectField({ label, value, onChange, options, placeholder, error }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '12px 16px',
          border: `1.5px solid ${error ? '#ef4444' : focused ? '#0ea5e9' : 'rgba(14,165,233,0.2)'}`,
          borderRadius: '12px',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          color: value ? '#1e293b' : '#94a3b8',
          outline: 'none',
          background: '#f8faff',
          cursor: 'pointer',
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 14px center',
          paddingRight: '36px',
          boxSizing: 'border-box',
        }}
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{error}</div>}
    </div>
  );
}
