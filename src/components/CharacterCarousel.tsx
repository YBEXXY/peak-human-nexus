
import React from "react";
import { motion } from "framer-motion";
import { Character } from "@/data/characters";
import { variants } from "@/lib/animations";

interface CharacterCarouselProps {
  characters: Character[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

const CharacterCarousel: React.FC<CharacterCarouselProps> = ({
  characters,
  currentIndex,
  onSelect,
}) => {
  // Function to determine which variant to use based on position relative to current
  const getVariant = (index: number) => {
    const diff = index - currentIndex;
    
    if (diff === 0) return "center";
    if (diff === 1 || diff === -characters.length + 1) return "right";
    if (diff === -1 || diff === characters.length - 1) return "left";
    
    // For all other positions, use "far" variant
    return "far";
  };
  
  // Function to determine the position for each character (for arc effect)
  const getPosition = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + characters.length) % characters.length);
    
    // Calculate angle based on position - creates arc effect
    const angle = (normalizedDiff - characters.length / 2) * 15;
    const radius = 100; // Radius of our arc
    
    // Convert angle to radians and calculate position
    const radians = (angle * Math.PI) / 180;
    const x = Math.sin(radians) * radius;
    const z = Math.cos(radians) * radius - radius; // Subtract radius to move forward
    
    return { x, z };
  };

  return (
    <div className="relative w-full h-[300px] overflow-visible flex items-center justify-center perspective-[1200px]">
      {/* Navigation arrows */}
      <button 
        onClick={() => onSelect((currentIndex - 1 + characters.length) % characters.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors duration-300 bg-cyber-neon-blue/20 hover:bg-cyber-neon-blue/30 rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => onSelect((currentIndex + 1) % characters.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors duration-300 bg-cyber-neon-blue/20 hover:bg-cyber-neon-blue/30 rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Character cards */}
      <div className="relative w-full h-full flex items-center justify-center">
        {characters.map((character, index) => {
          const position = getPosition(index);
          const variant = getVariant(index);
          
          return (
            <motion.div
              key={character.id}
              className="absolute cursor-pointer w-[200px] h-[280px] rounded-xl overflow-hidden"
              variants={variants.carousel}
              initial="far"
              animate={variant}
              style={{
                x: position.x,
                z: position.z,
                transformStyle: "preserve-3d",
              }}
              onClick={() => onSelect(index)}
              whileHover={{ scale: variant === "center" ? 1.05 : 1.03 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/80 to-cyber-purple/80 rounded-xl" />
              
              {/* Character image/placeholder */}
              <div className="relative h-full w-full flex flex-col items-center justify-center">
                <div className="w-full h-3/4 relative overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-neon-blue/20 to-transparent" />
                </div>
                
                {/* Character name */}
                <div className="w-full h-1/4 flex items-center justify-center bg-cyber-black/70 px-4">
                  <h3 className={`font-bold text-xl ${variant === "center" ? "text-glow-blue" : "text-white/90"}`}>
                    {character.name}
                  </h3>
                </div>
                
                {/* Selection indicator for current character */}
                {variant === "center" && (
                  <motion.div 
                    className="absolute bottom-0 w-full h-1 bg-cyber-neon-blue"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterCarousel;
