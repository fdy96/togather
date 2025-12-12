import React, { useState } from 'react';
import { Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const MusicFab: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.button
      onClick={() => setIsPlaying(!isPlaying)}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 ${
        isPlaying ? 'bg-white/80 border-nature-300 text-nature-600' : 'bg-white/50 border-slate-200 text-slate-400'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <Music2 className="w-5 h-5" />
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nature-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-nature-500"></span>
          </span>
        )}
      </div>
    </motion.button>
  );
};