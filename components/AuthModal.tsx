
import React, { useState } from 'react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email, firstName: email.split('@')[0] });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white max-w-md w-full p-10 shadow-2xl animate-scale-up">
        <h2 className="text-2xl font-serif italic text-center mb-8">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900"
            />
          )}
          <input 
            required
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900"
          />
          <input 
            required
            type="password" 
            placeholder="Password" 
            className="w-full border-b border-stone-200 py-3 text-sm focus:outline-none focus:border-stone-900"
          />
          <button className="w-full bg-stone-900 text-white py-4 uppercase text-[10px] font-bold tracking-[0.3em] hover:bg-stone-800 transition-colors">
            {isLogin ? 'Sign In' : 'Join the Maison'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already a member? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
