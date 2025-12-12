import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import { motion } from 'framer-motion';

export const FullScreenFab: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // Listener to update state if user uses Esc key or browser UI
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  const toggleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.error("Error toggling full screen:", err);
    }
  };

  return (
    <motion.button
      onClick={toggleFullScreen}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 
        ${isFullScreen ? 'bg-nature-100/80 border-nature-300 text-nature-700' : 'bg-white/50 border-white/50 text-nature-600 hover:bg-white/80'}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Fullscreen"
      title={isFullScreen ? "退出全屏" : "全屏浏览"}
    >
      <div className="relative">
        {isFullScreen ? (
          <Minimize className="w-5 h-5" />
        ) : (
          <Maximize className="w-5 h-5" />
        )}
      </div>
    </motion.button>
  );
};