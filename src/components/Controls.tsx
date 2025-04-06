
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Character } from "@/data/characters";
import { variants } from "@/lib/animations";

interface ControlsProps {
  character: Character;
  onViewLore: () => void;
}

const Controls: React.FC<ControlsProps> = ({ character, onViewLore }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleSelect = () => {
    toast({
      title: `Selected ${character.name}`,
      description: "Character selected successfully",
      variant: "default",
    });
    
    // This would trigger sound effects in a real implementation
    console.log("Character selected:", character.name);
  };
  
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    
    toast({
      title: `Sound ${soundEnabled ? "Disabled" : "Enabled"}`,
      description: `Sound effects are now ${soundEnabled ? "off" : "on"}`,
      variant: "default",
    });
  };

  return (
    <motion.div 
      className="w-full flex items-center justify-between gap-4 p-3 rounded-md bg-cyber-black/60 border border-cyber-neon-blue/30 backdrop-blur-sm"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-cyber-black border border-cyber-neon-blue/30 hover:border-cyber-neon-blue/60 transition-colors duration-300"
      >
        {soundEnabled ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-cyber-neon-blue">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white/60">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
      
      <div className="flex items-center gap-3">
        {/* View Lore button */}
        <motion.button
          onClick={onViewLore}
          className="px-5 py-2 rounded-md bg-cyber-neon-purple/20 border border-cyber-neon-purple/50 text-white hover:bg-cyber-neon-purple/30 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW LORE
        </motion.button>
        
        {/* Select button */}
        <motion.button
          onClick={handleSelect}
          className="px-5 py-2 rounded-md relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple" />
          <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-70" />
          <span className="relative z-10 font-medium tracking-wider">SELECT</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Controls;
