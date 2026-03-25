import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHONE = '+919876543210';
const WHATSAPP = '+919876543210';

export default function FloatingButtons() {
  const [expanded, setExpanded] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP.replace('+', '')}?text=Hi SmartRO! I'm interested in getting a free demo for a water purifier.`, '_blank');
  };

  const handleCall = () => window.open(`tel:${PHONE}`, '_self');

  const handleEnquiry = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
      {/* Sub-buttons */}
      <AnimatePresence>
        {expanded && (
          <>
            {/* Call button */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'white', padding: '6px 14px', borderRadius: '20px',
                  fontSize: '12px', fontWeight: 600, color: '#0369a1',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  fontFamily: 'Poppins, sans-serif', whiteSpace: 'nowrap',
                }}
              >
                Call Us
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCall}
                style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(14,165,233,0.4)',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Enquiry form */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: 0.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'white', padding: '6px 14px', borderRadius: '20px',
                  fontSize: '12px', fontWeight: 600, color: '#6366f1',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  fontFamily: 'Poppins, sans-serif', whiteSpace: 'nowrap',
                }}
              >
                Free Demo
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEnquiry}
                style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="4" width="16" height="14" rx="2" stroke="white" strokeWidth="1.8" />
                  <path d="M7 9H15M7 13H11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </motion.button>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'white', padding: '6px 14px', borderRadius: '20px',
                  fontSize: '12px', fontWeight: 600, color: '#128C7E',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  fontFamily: 'Poppins, sans-serif', whiteSpace: 'nowrap',
                }}
              >
                WhatsApp
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleWhatsApp}
                style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '62px', height: '62px', borderRadius: '50%',
          background: expanded
            ? 'linear-gradient(135deg, #ef4444, #dc2626)'
            : 'linear-gradient(135deg, #0ea5e9, #0369a1)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: expanded
            ? '0 8px 30px rgba(239,68,68,0.5)'
            : '0 8px 30px rgba(14,165,233,0.5)',
          transition: 'background 0.3s, box-shadow 0.3s',
          position: 'relative',
        }}
      >
        {/* Pulse ring when collapsed */}
        {!expanded && (
          <motion.div
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              width: '62px', height: '62px',
              borderRadius: '50%',
              background: 'rgba(14,165,233,0.4)',
              pointerEvents: 'none',
            }}
          />
        )}
        <motion.div
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {expanded ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M13 2C13 2 7 10 7 15C7 18.314 9.686 21 13 21C16.314 21 19 18.314 19 15C19 10 13 2 13 2Z" fill="white" />
              <circle cx="13" cy="22" r="2" fill="rgba(255,255,255,0.6)" />
            </svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
