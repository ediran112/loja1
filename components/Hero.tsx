import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-stone-200">
      <img 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover grayscale-[0.3]"
        alt="Main Fashion"
      />
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="text-white text-[12px] uppercase tracking-[0.5em] mb-6 opacity-90 font-medium">2025 Statement Pieces</span>
        <h2 className="text-6xl md:text-8xl font-medium text-white mb-10 tracking-tight leading-none">
          Bold by design
        </h2>
        <button className="bg-white text-black px-10 py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 rounded-sm">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Hero;