
import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-stone-900">
      {HERO_IMAGES.map((img, idx) => (
        <div 
          key={img}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img 
            src={img} 
            alt={`Fashion Slide ${idx + 1}`} 
            className={`w-full h-full object-cover object-center transform transition-transform duration-[10000ms] ease-linear ${idx === currentIndex ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-black/40 luxury-gradient" />
        </div>
      ))}
      
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <div className="overflow-hidden mb-6">
          <span className="block text-white text-xs uppercase tracking-[0.6em] animate-slide-up opacity-0 [animation-fill-mode:forwards]">Collection Nouvelle</span>
        </div>
        <h2 className="text-5xl md:text-9xl font-serif text-white mb-8 italic leading-none animate-fade-in-long opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s]">
          L'Héritage
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 font-light tracking-[0.1em] animate-fade-in-delayed opacity-0 [animation-fill-mode:forwards] [animation-delay:1.2s]">
          Masterfully crafted silhouettes that transcend time. 
          Discover the intersection of artisanal tradition and contemporary elegance.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-delayed opacity-0 [animation-fill-mode:forwards] [animation-delay:1.5s]">
          <button className="bg-white text-stone-900 px-12 py-4 uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-stone-100 transition-all duration-500 shadow-2xl">
            Explore Collection
          </button>
          <button className="border border-white/40 backdrop-blur-sm text-white px-12 py-4 uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-white hover:text-stone-900 transition-all duration-500">
            View Lookbook
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
        {HERO_IMAGES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`group relative h-10 w-1 flex items-center justify-center transition-all duration-500`}
          >
             <span className={`w-full h-[2px] transition-all duration-500 ${idx === currentIndex ? 'bg-white h-8' : 'bg-white/30 h-4 group-hover:bg-white/60'}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
