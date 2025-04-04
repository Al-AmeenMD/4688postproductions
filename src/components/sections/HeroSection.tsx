import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <header className={`relative h-screen ${className}`}>
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="https://player.vimeo.com/external/403155936.sd.mp4?s=86cdad3d7d23f68fdcb62293a3e2fc2d1d4a6947&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Post-Production
            <span className="block text-gradient mt-2">Excellence</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto tracking-wide">
            Transforming raw footage into cinematic masterpieces through expert editing and storytelling
          </p>
          <button className="bg-rose-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold 
            hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 
            tracking-wider shadow-lg hover:shadow-rose-500/25">
            VIEW OUR WORK
          </button>
        </div>
        
        <a href="#services" className="absolute bottom-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-rose-500" />
        </a>
      </div>
    </header>
  );
};
