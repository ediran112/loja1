
import React from 'react';
import { User } from '../types';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
  onAuthClick: () => void;
  user: User | null;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onLogoClick, onAuthClick, user }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex-1 hidden md:flex space-x-8 text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400">
          <a href="#" className="hover:text-stone-900 transition-colors">Collection</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Atelier</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Heritage</a>
        </div>
        
        <div className="flex-shrink-0 cursor-pointer" onClick={onLogoClick}>
          <h1 className="text-2xl md:text-3xl font-serif tracking-tighter text-stone-900 italic">Maison de l'Élégance</h1>
        </div>

        <div className="flex-1 flex justify-end items-center lg:space-x-8 space-x-4">
          <button onClick={onAuthClick} className="flex items-center space-x-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-500 group-hover:text-stone-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden lg:block text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">
              {user ? user.firstName : 'Account'}
            </span>
          </button>
          
          <button onClick={onCartClick} className="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-500 group-hover:text-stone-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
