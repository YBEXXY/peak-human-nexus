
import React from "react";
import { motion } from "framer-motion";
import { Character } from "@/data/characters";
import { variants } from "@/lib/animations";

interface CharacterDisplayProps {
  character: Character;
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ character }) => {
  return (
    <motion.div 
      className="relative h-[450px] w-full flex items-center justify-center overflow-hidden rounded-xl"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/30 to-cyber-purple/30 backdrop-blur-sm" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:20px_20px] opacity-10" />
      
      {/* Character stance/image */}
      <motion.div 
        className="relative h-full w-[300px] z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img 
          src={character.stance} 
          alt={`${character.name} stance`}
          className="h-full w-full object-contain animate-float"
        />
        
        {/* Glow effect under character */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-10 bg-cyber-neon-blue/30 rounded-full blur-xl" />
      </motion.div>
      
      {/* Character name with glow effect */}
      <motion.div 
        className="absolute top-6 left-0 right-0 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-wider text-glow-blue">
          {character.name}
        </h1>
        <div className="mt-2 text-sm text-white/80">
          {character.theme}
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-5 left-5 w-20 h-20 border border-cyber-neon-blue/30 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div 
          className="absolute inset-2 border border-cyber-neon-blue/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-5 right-5 w-24 h-24 border border-cyber-neon-purple/30 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: -45 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div 
          className="absolute inset-3 border border-cyber-neon-purple/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Theme indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyber-black/70 rounded-full border border-cyber-neon-blue/30 text-xs text-white/70">
        {character.theme}
      </div>
    </motion.div>
  );
};

export default CharacterDisplay;
