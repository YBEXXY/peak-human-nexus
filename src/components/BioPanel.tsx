
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Character } from "@/data/characters";
import { variants } from "@/lib/animations";

interface BioPanelProps {
  character: Character;
}

const BioPanel: React.FC<BioPanelProps> = ({ character }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      className="cyber-panel h-full"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-glow-purple">Bio</h2>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-cyber-neon-purple hover:text-cyber-neon-blue transition-colors duration-300 text-sm font-medium"
        >
          {expanded ? "Collapse" : "Read More"}
        </button>
      </div>
      
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/90 leading-relaxed"
            >
              <p className="mb-4">{character.longBio}</p>
              
              {/* Additional lore elements could be added here */}
              <div className="mt-4 p-3 bg-cyber-neon-blue/10 border border-cyber-neon-blue/20 rounded-md">
                <h3 className="text-sm font-medium text-cyber-neon-blue mb-2">Theme: {character.theme}</h3>
                <p className="text-sm text-white/80">
                  This character embodies the fusion of {character.theme.split("+").join(" and ")} aesthetics,
                  creating a unique visual and narrative identity.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white/90">{character.bio}</p>
              
              {/* Gradient fade effect at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-cyber-purple/40 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-3 right-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="rgba(153, 51, 255, 0.5)" strokeWidth="1" />
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="rgba(153, 51, 255, 0.5)" strokeWidth="1" />
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="rgba(153, 51, 255, 0.5)" />
        </svg>
      </div>
    </motion.div>
  );
};

export default BioPanel;
