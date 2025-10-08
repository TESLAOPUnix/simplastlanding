import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStage(1), 500),   // show S & P
      setTimeout(() => setAnimationStage(2), 1500),  // move apart
      setTimeout(() => setAnimationStage(3), 2500),  // show text
      setTimeout(() => setAnimationStage(4), 4500),  // fade out
      setTimeout(() => onComplete(), 5300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: animationStage === 4 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-[#3B0E03] flex items-center justify-center overflow-hidden"
    >
      <div className="text-center relative">
        {/* S and P Animation */}
        <div className="relative h-32 flex items-center justify-center mb-8">
          {/* S */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: animationStage >= 2 ? -50 : 0,
              opacity: animationStage >= 1 ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute"
          >
            <span className="text-8xl font-serif text-[#D6AD60]">S</span>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animationStage >= 1 ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute"
          >
            <span className="text-6xl font-light text-[#D6AD60]">|</span>
          </motion.div>

          {/* P */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: animationStage >= 2 ? 50 : 0,
              opacity: animationStage >= 1 ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute"
          >
            <span className="text-8xl font-serif text-[#D6AD60]">P</span>
          </motion.div>
        </div>

        {/* Simplast Polypacks – Closer Together */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: animationStage >= 3 ? 1 : 0,
            y: animationStage >= 3 ? 0 : 15,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-5xl font-serif text-[#D6AD60] tracking-tight">
            <span className="text-[#D6AD60]">S</span>
            <span className="text-[#F5D89D]">implast</span>{' '}
            <span className="text-[#D6AD60]">P</span>
            <span className="text-[#F5D89D]">olypacks</span>
          </p>
        </motion.div>

        {/* Private Limited */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: animationStage >= 3 ? 1 : 0,
            y: animationStage >= 3 ? 0 : 15,
          }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center mt-2"
        >
          <p className="text-2xl text-[#E4C074] font-light tracking-widest">
            PVT. LTD.
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: animationStage >= 3 ? 1 : 0,
            y: animationStage >= 3 ? 0 : 20,
          }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-4"
        >
          <p className="text-lg text-[#E4C074] font-medium tracking-wide uppercase">
            Manufacturers of Plain and Polythene Printed Films
          </p>
        </motion.div>

        {/* Gold Fade Transition */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: animationStage === 4 ? 50 : 0,
            opacity: animationStage === 4 ? 0.6 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D6AD60] via-[#B88A44] to-[#D6AD60]"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
          }}
        />
      </div>
    </motion.div>
  );
};

export default IntroAnimation;
