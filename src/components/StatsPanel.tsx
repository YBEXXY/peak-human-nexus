
import React from "react";
import { motion } from "framer-motion";
import { Character } from "@/data/characters";
import { variants } from "@/lib/animations";

interface StatsPanelProps {
  character: Character;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ character }) => {
  // Stats to display
  const stats = [
    { name: "Strength", value: character.stats.strength.value, color: character.stats.strength.color },
    { name: "Agility", value: character.stats.agility.value, color: character.stats.agility.color },
    { name: "Intelligence", value: character.stats.intelligence.value, color: character.stats.intelligence.color },
    { name: "Mysticism", value: character.stats.mysticism.value, color: character.stats.mysticism.color },
    { name: "Endurance", value: character.stats.endurance.value, color: character.stats.endurance.color },
  ];

  return (
    <motion.div 
      className="cyber-panel h-full"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="text-xl font-semibold mb-4 text-glow-blue">Stats</h2>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.name}
            className="space-y-1"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            <div className="flex justify-between text-sm">
              <span>{stat.name}</span>
              <span className="font-mono">{stat.value}</span>
            </div>
            
            <div className="h-2 bg-gray-800/60 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full bg-${stat.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${stat.value}%` }}
                transition={{ 
                  duration: 1, 
                  delay: 0.2 + 0.1 * index,
                  ease: "easeOut"
                }}
              />
            </div>
            
            {/* Stat highlights - visual indicators of exceptional stats */}
            {stat.value > 90 && (
              <div className="flex justify-end">
                <span className="text-xs text-cyber-neon-blue animate-pulse">
                  Peak Potential
                </span>
              </div>
            )}
            
            {stat.value > 80 && stat.value <= 90 && (
              <div className="flex justify-end">
                <span className="text-xs text-cyber-neon-purple">
                  Advanced
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Decorative element */}
      <div className="mt-4 flex justify-end">
        <motion.div 
          className="h-10 w-10 rounded-full border border-cyber-neon-blue/50 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="h-6 w-6 rounded-full border border-cyber-neon-blue/80" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsPanel;
