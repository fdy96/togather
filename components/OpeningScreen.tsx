import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

interface OpeningScreenProps {
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  return (
    <motion.div
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#fbfbf8] overflow-hidden"
    >
      {/* Decorative Green Circles */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-nature-100/50 blur-3xl"
      />
      <motion.div 
         animate={{ scale: [1, 1.1, 1] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
         className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-nature-200/40 blur-3xl"
      />

      <div className="z-10 flex flex-col items-center p-8 border border-nature-200 bg-white/50 backdrop-blur-sm rounded-t-[500px] rounded-b-[20px] shadow-xl shadow-nature-100/50 pt-32 pb-16 px-12 md:px-24 max-w-lg mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <Leaf className="w-8 h-8 text-nature-600 mx-auto animate-sway" />
          
          <div className="space-y-2">
            <p className="font-english text-nature-500 tracking-[0.2em] uppercase text-xs">
              A Letter For You
            </p>
            <h1 className="font-handwriting text-6xl text-nature-800">
              给小陈同学
            </h1>
          </div>

          <div className="w-12 h-px bg-nature-300 mx-auto my-6" />

          <p className="font-serif text-nature-700 text-sm leading-relaxed max-w-xs mx-auto">
            有些话，藏在心里很久了。<br/>
            今天，我想借着这绿意盎然的时刻，<br/>
            慢慢讲给你听。
          </p>
        </motion.div>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.02, backgroundColor: '#15803d' }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 px-8 py-3 bg-nature-700 text-white rounded-full font-serif text-sm tracking-widest shadow-lg shadow-nature-200 transition-colors"
        >
          开启信件
        </motion.button>
      </div>
    </motion.div>
  );
};