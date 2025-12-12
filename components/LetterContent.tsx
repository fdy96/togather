import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Heart, Sprout, Home, MapPin, Feather, Check, Sun, Moon, Mountain, Cat, Sparkles, Gamepad2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// Simple Pixel Art Components (SVG)
const PixelHouseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} shapeRendering="crispEdges">
    <path d="M10 2h4v2h-4zM8 4h2v2H8zM14 4h2v2h-2zM6 6h2v2H6zM16 6h2v2h-2zM4 8h2v2H4zM18 8h2v2h-2zM2 10h2v12h2v-4h2v4h8v-4h2v4h2v-4h2V10h-2v-2h-2z" />
    <rect x="10" y="14" width="4" height="8" fillOpacity="0.3"/>
  </svg>
);

const PixelHeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 13" fill="currentColor" className={className} shapeRendering="crispEdges">
    <path d="M1 2h1v1h-1v-1zM2 1h2v1h-2v-1zM4 2h1v3h-1v-3zM5 5h4v1h-4v-1zM9 2h1v3h-1v-3zM10 1h2v1h-2v-1zM12 2h1v1h-1v-1zM1 3h1v3h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-3h-1v1h-1v-1h-2v1h-1v-1h-1v-1h-2v1h-1v-1h-2v1h-1v-1z" />
  </svg>
);

export const LetterContent: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    const end = Date.now() + 3000;
    const colors = ['#22c55e', '#86efac', '#f0fdf4'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 relative">
      
      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-16 flex flex-col items-center relative z-10"
      >
        <div className="p-3 bg-nature-100 rounded-full mb-6 shadow-inner">
           <Feather className="w-6 h-6 text-nature-600" />
        </div>
        <h2 className="font-handwriting text-5xl text-nature-800 mb-2 drop-shadow-sm">小陈同学：</h2>
        <div className="w-16 h-1 bg-nature-200 rounded-full mt-4"></div>
      </motion.div>

      {/* Main Text Body - Continuous Flow */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        className="space-y-10 font-serif text-lg leading-loose text-nature-900 md:text-xl text-justify relative z-10"
      >
        <p className="first-letter:text-4xl first-letter:font-handwriting first-letter:mr-2 first-letter:text-nature-600">
          接下来我想非常认真地和你说几句话。你先收起笑容，也别起鸡皮疙瘩，因为我这次是鼓足了所有勇气的。
        </p>
        
        <p>
          很多话本想藏在心里，等到一个最合适的时机。但在与你相处的过程中，总是被你的不经意试探‘骗’出了我所有的大招，内心的想法早已对你毫无保留。那好吧，今天我就把它们好好梳理一遍。
        </p>

        <div className="py-8 px-4">
            <blockquote className="relative p-8 bg-white/60 backdrop-blur-sm rounded-xl border border-nature-100 shadow-sm text-center">
                <span className="absolute top-4 left-4 text-4xl text-nature-200 font-serif">“</span>
                <p className="font-handwriting text-2xl text-nature-700 leading-relaxed">
                   我很早之前就说过，这辈子能遇见你，真好。<br/>这句话，我发自肺腑。
                </p>
                <span className="absolute bottom-4 right-4 text-4xl text-nature-200 font-serif leading-none">”</span>
            </blockquote>
        </div>

        <p>
          因为在遇见你之前，我其实已经对自己能否遇到真爱、能否找到灵魂共鸣的另一半不抱任何希望了，甚至心里已经做好了被岁月推着走的准备。这并非是我想要将就，而是在你出现以前，我根本不敢想象，生命中真的能遇到一个如此契合的灵魂。
        </p>
        
        <p className="font-medium text-nature-800">
           我曾以为，和60分的人磨合一生是大多数人的归宿，直到<span className="inline-block px-2 py-0.5 bg-nature-200/50 rounded mx-1 text-nature-900 shadow-[0_2px_0_rgba(187,247,208,1)]">100分的你</span>赫然出现。
        </p>

        <p>
          你的到来让我确信，命运没有亏待我，所有的等待，都是为了这最好的安排。
        </p>

        {/* Polaroid Style Image */}
        <motion.div 
           whileHover={{ scale: 1.02, rotate: 0 }}
           className="my-16 flex justify-center perspective-1000"
        >
            <div className="bg-white p-3 pb-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] transform -rotate-2 rounded transition-transform duration-500 border border-gray-100 w-full max-w-md">
               <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop" className="w-full h-64 object-cover rounded-sm filter brightness-105 contrast-[1.02]" alt="Nature" />
               <div className="mt-4 text-center font-handwriting text-gray-400 text-xl tracking-wide">
                 遇见你，是最好的安排
               </div>
            </div>
        </motion.div>

        <p>
          和你相处的每一天，每一刻，每一分每一秒都是那样欢愉，善良的你没有辜负我的任何一次期待，屏幕上跳动的消息提醒，曾一次次融化我内心的坚冰，这种彼此靠近的感觉，我无比珍视。
        </p>

        <p>
          我无数次想象我们走到最后的画面，那该有多开心啊。
        </p>
      </motion.div>

      {/* Future Visuals - Redesigned Romantic Cards */}
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={{
           hidden: { opacity: 0 },
           visible: {
             opacity: 1,
             transition: {
               staggerChildren: 0.3
             }
           }
         }}
         className="my-28 space-y-12"
      >
         {/* Card 1: The Lazy Afternoon */}
         <motion.div 
           variants={cardVariant} 
           className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fff7ed] via-[#fffaf5] to-[#ffe4e6] p-8 md:p-10 shadow-[0_10px_30px_-10px_rgba(251,146,60,0.2)] border border-orange-100/50 hover:shadow-[0_20px_40px_-10px_rgba(251,146,60,0.3)] transition-all duration-500 hover:-translate-y-1"
         >
             {/* Watermark Icon */}
             <div className="absolute -right-8 -bottom-8 text-orange-200/20 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                <Cat className="w-64 h-64" />
             </div>
             
             <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm text-orange-400">
                    <Sun className="w-6 h-6" />
                  </div>
                  <h4 className="font-handwriting text-2xl text-orange-800/80">安好</h4>
                </div>
                <p className="text-lg md:text-xl text-orange-900/80 font-serif leading-loose italic pl-2 border-l-2 border-orange-200">
                   “我们可以一起养一只小猫或小狗，在洒满阳光的午后，躺在摇椅上静静地抚摸它，享受时光的安好。”
                </p>
             </div>
         </motion.div>

         {/* Card 2: The Journey */}
         <motion.div 
           variants={cardVariant} 
           className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f0f9ff] via-[#f5fcff] to-[#e0f2fe] p-8 md:p-10 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.2)] border border-sky-100/50 hover:shadow-[0_20px_40px_-10px_rgba(56,189,248,0.3)] transition-all duration-500 hover:-translate-y-1"
         >
             <div className="absolute -left-8 -bottom-8 text-sky-200/30 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                <Mountain className="w-64 h-64" />
             </div>
             
             <div className="relative z-10 flex flex-col gap-6 items-end text-right">
                <div className="flex items-center gap-4 flex-row-reverse">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm text-sky-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-handwriting text-2xl text-sky-800/80">足迹</h4>
                </div>
                <p className="text-lg md:text-xl text-sky-900/80 font-serif leading-loose italic pr-2 border-r-2 border-sky-200">
                   “我们可以一起踏遍世界的每一个角落，在所有美丽的风景留下我们的足迹，世界虽大，但是身边总有你的存在。”
                </p>
             </div>
         </motion.div>

         {/* Card 3: The Quiet Night */}
         <motion.div 
           variants={cardVariant} 
           className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f5f3ff] via-[#faf5ff] to-[#ede9fe] p-8 md:p-10 shadow-[0_10px_30px_-10px_rgba(139,92,246,0.15)] border border-violet-100/50 hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.25)] transition-all duration-500 hover:-translate-y-1"
         >
             <div className="absolute -right-4 -top-8 text-violet-200/30 rotate-45 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Moon className="w-56 h-56" />
             </div>
             
             <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm text-violet-500">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-handwriting text-2xl text-violet-800/80">依靠</h4>
                </div>
                <p className="text-lg md:text-xl text-violet-900/80 font-serif leading-loose italic pl-2 border-l-2 border-violet-200">
                   “我们也可以某个静谧的夜晚，彼此拥抱依靠，忘却生活的烦恼，心脏的振动共鸣盖过了尘世的一切喧嚣。”
                </p>
             </div>
         </motion.div>
      </motion.div>

      {/* Continuation of Text - Pixel Art Style */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="my-24 font-serif text-lg leading-loose text-nature-900 md:text-xl relative"
      >
        {/* Pixel Art Container */}
        <div className="pixel-border bg-nature-800 p-1">
          <div className="bg-[#e0f8cf] min-h-[300px] p-6 md:p-10 relative overflow-hidden scanlines shadow-inner">
             
             {/* Retro Header Bar */}
             <div className="flex justify-between items-center mb-6 border-b-2 border-nature-800 pb-2 font-pixel text-xs md:text-sm text-nature-800 tracking-tighter">
                <div className="flex items-center gap-2">
                   <Gamepad2 className="w-4 h-4" />
                   <span>QUEST: FUTURE_LIFE</span>
                </div>
                <div className="animate-pulse text-red-500">
                   ♥ HP 100/100
                </div>
             </div>

             <div className="flex flex-col md:flex-row gap-8">
                 {/* Left: Pixel Graphics Scene */}
                 <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-[#c6e6b3] border-2 border-nature-800 p-4 rounded-sm shadow-[4px_4px_0_0_rgba(20,83,45,0.2)]">
                     <div className="relative w-24 h-24 flex items-center justify-center">
                        <PixelHouseIcon className="w-20 h-20 text-nature-800 absolute bottom-0" />
                        <PixelHeartIcon className="w-6 h-6 text-red-500 absolute -top-2 right-0 animate-pixel-bounce" />
                        <div className="absolute top-4 left-0 w-2 h-2 bg-white opacity-60"></div>
                     </div>
                     <div className="mt-4 font-pixel text-[10px] text-center text-nature-800 leading-tight">
                        PLAYER 1 & PLAYER 2<br/>
                        READY TO START
                     </div>
                 </div>

                 {/* Right: Text Console */}
                 <div className="flex-1 font-mono text-nature-900 text-sm md:text-base leading-relaxed space-y-4">
                    <p className="flex items-start gap-2">
                       <span className="text-nature-600 mt-1">➤</span>
                       <span>我幻想着的，我们会有属于我们的小屋，温馨而又治愈，屋里会有一个爱我的和我爱的人在等候...</span>
                    </p>
                    <p className="flex items-start gap-2">
                       <span className="text-nature-600 mt-1">➤</span>
                       <span>承载着我一切前进的动力。我会忙乱地为你做一道美食，等待你的品鉴...</span>
                    </p>
                     <p className="flex items-start gap-2">
                       <span className="text-nature-600 mt-1">➤</span>
                       <span>会相拥着看一场电影，感受你的情绪；会打闹着玩一局游戏，凝视你的笑容......</span>
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-nature-800/20 text-xs font-pixel text-nature-600 animate-pulse">
                       _ WAITING FOR PLAYER 2 TO JOIN...
                    </div>
                 </div>
             </div>
          </div>
        </div>

        <p className="text-center font-handwriting text-3xl text-nature-600 py-12 leading-snug">
          这些关于未来的美好画面，就像散落的拼图，<br/>而你，就是最核心的那一块。
        </p>

        <p className="text-justify md:text-center px-4">
          我知道，你是一个需要安全感的女孩。也许你看过太多海誓山盟最终变成一地鸡毛的故事，我知道，承诺在时间的考验面前有时显得脆弱。但请你相信我，对于我认定的人和事，我有着用尽全力去坚守的执着，更何况是如此珍贵的你。
        </p>
      </motion.div>

      {/* The Promise Highlight - Elegant Dark Card */}
      <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={fadeIn}
         className="my-20 p-10 bg-gradient-to-br from-nature-800 to-nature-900 text-nature-50 rounded-[2rem] text-center shadow-2xl relative overflow-hidden group"
      >
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] group-hover:scale-105 transition-transform duration-1000"></div>
         {/* Decorative circles */}
         <div className="absolute -top-10 -left-10 w-32 h-32 bg-nature-600/30 rounded-full blur-2xl"></div>
         <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-nature-600/30 rounded-full blur-2xl"></div>

         <p className="relative z-10 text-lg md:text-xl leading-relaxed text-nature-100">
           我无法用‘永远’来简单定义未来，但我愿意用未来的每一天来证明：
         </p>
         <div className="mt-10 relative z-10 font-handwriting text-3xl md:text-5xl space-y-4 text-white drop-shadow-md">
           <p className="hover:text-nature-200 transition-colors">冯德宇会一直爱着陈美林</p>
           <p className="hover:text-nature-200 transition-colors">会努力让陈美林开心</p>
           <p className="hover:text-nature-200 transition-colors">会始终在你身边</p>
         </div>
      </motion.div>

      {/* The Question */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center pb-20 mt-24"
      >
        <p className="text-3xl font-serif text-nature-800 mb-12 font-medium">
          那么，你是否愿意，<br/><span className="text-xl text-nature-600 font-normal mt-2 block">让我牵起你的手，一起去创造属于我们的未来呢？</span>
        </p>

        {!accepted ? (
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <motion.button
              onClick={handleAccept}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-nature-600 to-nature-500 text-white rounded-full text-xl font-serif shadow-xl shadow-nature-300/50 flex items-center gap-3 group"
            >
              <Heart className="w-6 h-6 fill-current group-hover:animate-ping" /> <span className="tracking-widest">我愿意</span>
            </motion.button>
             <motion.button
              onClick={handleAccept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white/50 backdrop-blur-sm border-2 border-nature-200 text-nature-700 rounded-full text-xl font-serif shadow-sm hover:border-nature-400 hover:bg-white transition-all tracking-widest"
            >
              好呀
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block p-10 bg-white/90 backdrop-blur rounded-[2rem] shadow-2xl border border-nature-100"
          >
            <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-full">
                    <Check className="w-10 h-10 text-green-600" />
                </div>
            </div>
            <h3 className="text-4xl font-handwriting text-nature-800 mb-3">❤️ 我们会一直一直走下去 ❤️</h3>
          </motion.div>
        )}
      </motion.div>

      <footer className="text-center text-nature-400/60 text-[10px] font-english tracking-[0.3em] pb-8">
        WITH LOVE  •  FOREVER AND ALWAYS
      </footer>

    </div>
  );
};