import { motion } from 'framer-motion';
import Chef4 from '../../assets/Chef/Chef4.png';
import { AuthCard } from '../AuthPage/Auth';
import AnimatedFoodBackground from '../../components/AnimatedFoodBackground/AnimatedFoodBackground';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen relative bg-gray-100">
      <AnimatedFoodBackground />

      {/* Wrapper for the grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 max-w-5xl  rounded-lg shadow-lg overflow-hidden relative z-10 ">
        {/* Left Section - Chef Image */}
        <div className="hidden md:flex justify-center items-center p-6">
          <motion.img
            src={Chef4}
            alt="Chef"
            className="max-w-full h-auto rounded-lg shadow-md"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Right Section - Auth Card */}
        <div className="flex justify-center items-center p-6">
          <div className="w-full max-w-md">
            <AuthCard />
          </div>
        </div>
      </div>
    </div>
  );
}
