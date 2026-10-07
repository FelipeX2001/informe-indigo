import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, User } from 'lucide-react';
import { INTRO_TEXT, LOGO_MAIN } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="intro" className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-indigo-gradient">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-light rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center text-white">
        
        {/* Logo - Significantly Smaller */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
           <img 
             src={LOGO_MAIN} 
             alt="ÍNDIGO PH" 
             className="w-24 md:w-32 h-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
           />
        </motion.div>

        {/* Small Context Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-indigo-200 mb-4"
        >
          Conjunto Residencial Índigo PH
        </motion.p>
        
        {/* Main Title - Most Relevant */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-2 drop-shadow-xl"
        >
          INFORME DE <br/>
          GESTIÓN ADMINISTRATIVA
        </motion.h1>

        {/* Month - Very Relevant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-3xl md:text-5xl font-bold text-indigo-light drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]">
            AGOSTO 2026
          </span>
        </motion.div>

        {/* Admin Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md mb-10"
        >
           <User size={18} className="text-indigo-light" />
           <div className="text-white/90 text-sm md:text-base">
             Administradora: <span className="text-white font-bold tracking-wide">Marcela González</span>
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-3xl text-sm md:text-lg leading-relaxed font-light text-blue-100/90 mb-8"
        >
          {INTRO_TEXT}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 animate-bounce text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;