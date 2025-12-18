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
    <div className="w-full">
      <div className="bg-[#1a1a1a] text-white py-2 text-[10px] tracking-[0.3em] uppercase text-center font-light">
        Free Shipping on orders over €250 • Limited Edition Pieces
      </div>
      <header className="bg-white border-b border-stone-100">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <nav className="flex-1 flex space-x-8 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#" className="hover:text-black transition-colors">Catalog</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </nav>
          
          <div className="flex-shrink-0 cursor-pointer text-center" onClick={onLogoClick}>
            <h1 className="text-2xl font-serif tracking-tighter text-black uppercase">My Store</h1>
          </div>

          <div className="flex-1 flex justify-end items-center space-x-6">
            <button onClick={onAuthClick} className="text-stone-500 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button onClick={onAuthClick} className="text-stone-500 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button onClick={onCartClick} className="relative group flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-500 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="ml-1 text-[10px] font-bold">({cartCount})</span>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;