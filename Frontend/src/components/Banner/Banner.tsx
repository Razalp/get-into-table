import React, { useState, useEffect } from 'react';
import Chef1 from '../../assets/Chef/Chef1.png';
import Chef2 from '../../assets/Chef/Chef2.png';
import Chef3 from '../../assets/Chef/Chef3.png';
import Chef4 from '../../assets/Chef/Chef4.png';



const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Simulate image imports since we don't have access to actual images
    const images = [Chef1, Chef2, Chef3, Chef4];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="w-full h-[25vh]  border-b border-gray-300 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-in-out"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                transform: currentIndex === index 
                  ? 'scale(1) translateX(0)' 
                  : index > currentIndex 
                    ? 'scale(0.8) translateX(100%)' 
                    : 'scale(0.8) translateX(-100%)',
                zIndex: currentIndex === index ? 1 : 0
              }}
            >
              <img
                src={image}
                alt={`Chef ${index + 1}`}
                className="h-40 w-40  object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Banner;
