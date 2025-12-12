import React from 'react';
import { motion } from 'framer-motion';

const LeafSVG = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.2 20.2c-2.8 2.8-7.2 3.1-10.8 1.5C6.9 20.6 3.4 15.6 2 12c3.6-1.4 8.6-4.9 12.3-2.9 1.6 3.6 1.3 8-1.5 10.8z" />
    <path d="M2 12c.5-1.5 1.5-3 3-4" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

export const BackgroundEffects: React.FC = () => {
  // Fireflies (Yellow/Green light)
  const fireflies = Array.from({ length: 20 }).map((_, i) => ({
    id: `firefly-${i}`,
    size: Math.random() * 3 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  // Falling Leaves
  const leaves = Array.from({ length: 12 }).map((_, i) => ({
    id: `leaf-${i}`,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 15,
    size: Math.random() * 10 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Texture & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbf8] to-[#f0fdf4]"></div>
      
      {/* Organic Blobs - More vibrant but soft */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-nature-200/60 rounded-full mix-blend-multiply filter blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-nature-300/50 rounded-full mix-blend-multiply filter blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-emerald-100/70 rounded-full mix-blend-multiply filter blur-[100px]" 
        />
      </div>

      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-nature-300/40"
          initial={{ y: -50, x: `${leaf.left}%`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: ['0vh', '100vh'], 
            x: [`${leaf.left}%`, `${leaf.left + (Math.random() * 20 - 10)}%`],
            opacity: [0, 0.8, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: leaf.duration, 
            repeat: Infinity, 
            delay: leaf.delay, 
            ease: "linear"
          }}
          style={{ width: leaf.size, height: leaf.size }}
        >
          <LeafSVG className="w-full h-full" />
        </motion.div>
      ))}

      {/* Fireflies */}
      {fireflies.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#bef264] rounded-full shadow-[0_0_8px_2px_rgba(190,242,100,0.4)]"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: p.delay
          }}
          style={{ 
            width: p.size, 
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`
          }}
        />
      ))}
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-overlay"></div>
    </div>
  );
};