
import React from "react";
import { motion } from "framer-motion";

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-blue opacity-80" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20" />
      
      {/* Animated particles/circles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-cyber-neon-blue/20 blur-xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={`purple-${index}`}
            className="absolute rounded-full bg-cyber-neon-purple/20 blur-xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyber-neon-blue/30 to-transparent"
            style={{
              top: `${15 + index * 20}%`,
            }}
            initial={{ opacity: 0.3, scaleX: 0.8 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-cyber-neon-blue/30 rounded-full">
        <motion.div 
          className="absolute inset-0 border border-cyber-neon-blue/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="absolute bottom-20 right-20 w-40 h-40 border border-cyber-neon-purple/30 rounded-full">
        <motion.div 
          className="absolute inset-0 border border-cyber-neon-purple/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default Background;
