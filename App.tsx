import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OpeningScreen } from './components/OpeningScreen';
import { LetterContent } from './components/LetterContent';
import { BackgroundEffects } from './components/BackgroundEffects';
import { FullScreenFab } from './components/FullScreenFab';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-nature-900 font-serif selection:bg-nature-200 selection:text-nature-900">
      <BackgroundEffects />
      
      <FullScreenFab />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <OpeningScreen key="opening" onOpen={() => setIsOpen(true)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-10 w-full"
          >
            <LetterContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}