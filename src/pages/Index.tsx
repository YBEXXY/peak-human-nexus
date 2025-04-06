
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { characters } from "@/data/characters";
import Background from "@/components/Background";
import CharacterCarousel from "@/components/CharacterCarousel";
import CharacterDisplay from "@/components/CharacterDisplay";
import StatsPanel from "@/components/StatsPanel";
import BioPanel from "@/components/BioPanel";
import Controls from "@/components/Controls";

const Index = () => {
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);
  const selectedCharacter = characters[selectedCharacterIndex];
  
  // For "View Lore" functionality
  const [showingLore, setShowingLore] = useState(false);
  
  const handleViewLore = () => {
    setShowingLore(!showingLore);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <Background />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 text-center">
          <motion.h1 
            className="text-6xl boldini-gradient mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PEAK HUMAN NEXUS
          </motion.h1>
          <motion.p 
            className="text-xl marine-corps-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Browse the extraordinary characters of tomorrow
          </motion.p>
        </div>
        
        <div className="mb-8">
          <CharacterCarousel 
            characters={characters}
            currentIndex={selectedCharacterIndex}
            onSelect={setSelectedCharacterIndex}
          />
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCharacter.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <CharacterDisplay character={selectedCharacter} />
              </div>
              
              <div className="lg:col-span-1 grid grid-rows-2 gap-6">
                <StatsPanel character={selectedCharacter} />
                <BioPanel character={selectedCharacter} />
              </div>
            </div>
            
            <div className="mt-4">
              <Controls 
                character={selectedCharacter} 
                onViewLore={handleViewLore}
              />
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* View Lore Modal */}
        <AnimatePresence>
          {showingLore && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowingLore(false)}
            >
              <motion.div 
                className="cyber-panel max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-glow-purple">{selectedCharacter.name} | Lore</h2>
                  <button 
                    onClick={() => setShowingLore(false)}
                    className="text-white/80 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-lg mb-4">{selectedCharacter.longBio}</p>
                  
                  <div className="mt-6 p-4 bg-cyber-neon-blue/10 border border-cyber-neon-blue/20 rounded-md">
                    <h3 className="text-lg font-medium text-cyber-neon-blue mb-2">Theme Analysis: {selectedCharacter.theme}</h3>
                    <p className="text-white/80">
                      This character represents the junction between {selectedCharacter.theme.split("+")[0].trim()} aesthetics and {selectedCharacter.theme.split("+")[1].trim()} influences.
                      The visual language draws from both worlds to create a unique identity that challenges conventional design boundaries.
                    </p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-cyber-neon-purple/10 border border-cyber-neon-purple/20 rounded-md">
                      <h4 className="text-cyber-neon-purple font-medium mb-2">Notable Abilities</h4>
                      <ul className="list-disc list-inside text-white/80 space-y-1">
                        <li>Enhanced physical capabilities</li>
                        <li>Specialized tactical training</li>
                        <li>Unique genetic modifications</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-cyber-neon-green/10 border border-cyber-neon-green/20 rounded-md">
                      <h4 className="text-cyber-neon-green font-medium mb-2">Peak Metrics</h4>
                      <div className="space-y-2">
                        {Object.entries(selectedCharacter.stats).map(([key, value]) => (
                          value.value > 85 ? (
                            <div key={key} className="flex justify-between text-white/80">
                              <span className="capitalize">{key}</span>
                              <span>{value.value}</span>
                            </div>
                          ) : null
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={() => setShowingLore(false)}
                    className="cyber-button"
                  >
                    Return to Nexus
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
