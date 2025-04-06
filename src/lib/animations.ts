
import { MotionValue, useTransform, useSpring, useScroll, MotionProps } from "framer-motion";
import { useRef } from "react";

export const useSmoothTransform = (
  value: MotionValue<number>,
  inputRange: number[],
  outputRange: number[],
  options?: { clamp?: boolean }
) => {
  const springValue = useSpring(value, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return useTransform(springValue, inputRange, outputRange, options);
};

export const useParallax = (distance: number = 100) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  
  return { ref, y };
};

export const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 230, 246, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  },
  carousel: {
    center: { 
      scale: 1, 
      opacity: 1, 
      zIndex: 10,
      filter: "brightness(1.2) drop-shadow(0 0 20px rgba(0, 230, 246, 0.4))",
      y: 0,
      rotateY: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut", 
        delay: 0.1 
      }
    },
    left: { 
      scale: 0.8, 
      opacity: 0.6, 
      zIndex: 5,
      filter: "brightness(0.8) drop-shadow(0 0 10px rgba(0, 230, 246, 0.2))",
      y: 40,
      rotateY: 15,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    },
    right: { 
      scale: 0.8, 
      opacity: 0.6, 
      zIndex: 5,
      filter: "brightness(0.8) drop-shadow(0 0 10px rgba(0, 230, 246, 0.2))",
      y: 40,
      rotateY: -15,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    },
    far: { 
      scale: 0.6, 
      opacity: 0.3, 
      zIndex: 1,
      filter: "brightness(0.6) drop-shadow(0 0 5px rgba(0, 230, 246, 0.1))",
      y: 60,
      rotateY: 30,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    },
  }
};

export const staggerContainer: MotionProps = {
  initial: "hidden",
  animate: "visible",
  exit: "exit",
  variants: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },
};
