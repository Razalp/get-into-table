import React from 'react';
import { motion } from 'framer-motion';
import {
  Apple,
  Beer,
  Coffee,
  Cookie,
  Cake,
  Pizza,
  Sandwich,
  IceCream,
  Cherry,
  Croissant,
} from 'lucide-react';

const FoodIcon = ({ icon: Icon, size, initialX, initialY, opacity }) => {
  // Create more varied and interesting motion paths
  const randomPath = () => {
    const radius = 100 + Math.random() * 200; // Larger movement radius
    const points = [];
    const steps = 4 + Math.floor(Math.random() * 3); // 4-6 points in path
    
    for (let i = 0; i < steps; i++) {
      const angle = (i * 2 * Math.PI) / steps;
      points.push([
        radius * Math.cos(angle),
        radius * Math.sin(angle),
      ]);
    }
    
    return points;
  };

  const path = randomPath();
  const duration = 20 + Math.random() * 20; // Duration between 20-40 seconds
  const delay = Math.random() * -20; // Random delay for staggered start

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity,
        x: path.map(p => p[0]),
        y: path.map(p => p[1]),
        rotate: [0, 360], // Full rotation during movement
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
        scale: {
          duration: 1,
          ease: "backOut",
        },
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Icon 
          size={size} 
          className="text-black"
          style={{ opacity }}
        />
      </motion.div>
    </motion.div>
  );
};

const AnimatedFoodBackground = () => {
  const foodIcons = [Apple, Beer, Coffee, Cookie, Cake, Pizza, Sandwich, IceCream, Cherry, Croissant];
  const iconInstances = [];

  // Generate icons with better distribution
  for (let i = 0; i < 30; i++) {
    // Create a grid-like distribution with some randomness
    const gridX = (i % 5) * 20;
    const gridY = Math.floor(i / 5) * 20;
    
    const RandomIcon = foodIcons[Math.floor(Math.random() * foodIcons.length)];
    const initialX = gridX + (Math.random() * 10 - 5);
    const initialY = gridY + (Math.random() * 10 - 5);
    const size = 24 + Math.random() * 16; // Icon size between 24px and 40px
    const opacity = 0.3 + Math.random() * 0.3; // Opacity between 0.3 and 0.6

    iconInstances.push({
      Icon: RandomIcon,
      x: initialX,
      y: initialY,
      size,
      opacity,
      key: `food-icon-${i}`,
    });
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden  ">
      {iconInstances.map(({ Icon, x, y, size, opacity, key }) => (
        <FoodIcon
          key={key}
          icon={Icon}
          initialX={x}
          initialY={y}
          size={size}
          opacity={opacity}
        />
      ))}
    </div>
  );
};

export default AnimatedFoodBackground;