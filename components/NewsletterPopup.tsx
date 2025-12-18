
import React, { useState, useEffect } from 'react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenMaisonPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenMaisonPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white max-w-2xl w-full grid md:grid-cols-2 overflow-hidden shadow-2xl animate-scale-up">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800" 
            alt="Newsletter" 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="p-10 flex flex-col justify-center items-center text-center space-y-6">
          <h2 className="text-sm uppercase tracking-[0.4em] text-stone-400">Join the Maison</h2>
          <h3 className="text-3xl font-serif italic">Privileged Access</h3>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            Subscribe to receive private collection previews, atelier news, and complimentary shipping on your first order.
          </p>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full border-b border-stone-200 py-2 text-center text-sm focus:outline-none focus:border-stone-900 transition-colors"
          />
          <button 
            onClick={handleClose}
            className="w-full bg-stone-900 text-white py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-stone-800 transition-colors"
          >
            Subscribe
          </button>
          <button 
            onClick={handleClose}
            className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 underline underline-offset-4"
          >
            No, thank you
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
