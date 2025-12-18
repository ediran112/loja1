
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutViewProps {
  items: CartItem[];
  onComplete: () => void;
  onBack: () => void;
}

const CheckoutView: React.FC<CheckoutViewProps> = ({ items, onComplete, onBack }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-stone-400 hover:text-stone-900 mb-12 uppercase text-[10px] tracking-widest transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Shopping
      </button>

      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-serif italic mb-8">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input 
                required
                type="text" 
                placeholder="First Name" 
                className="bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" 
              />
              <input 
                required
                type="text" 
                placeholder="Last Name" 
                className="bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" 
              />
            </div>
            <input 
              required
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" 
            />
            <input 
              required
              type="text" 
              placeholder="Address" 
              className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" 
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                required
                type="text" 
                placeholder="City" 
                className="bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" 
              />
              <input 
                required
                type="text" 
                placeholder="Postal Code" 
                className="bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-colors text-sm" 
              />
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-serif italic mb-6">Payment</h3>
              <div className="p-4 border border-stone-200 bg-white space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder="Card Number" 
                  className="w-full bg-transparent border-b border-stone-100 py-2 focus:outline-none focus:border-stone-900 transition-colors text-sm font-mono" 
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    required
                    type="text" 
                    placeholder="MM/YY" 
                    className="bg-transparent border-b border-stone-100 py-2 focus:outline-none focus:border-stone-900 transition-colors text-sm font-mono" 
                  />
                  <input 
                    required
                    type="text" 
                    placeholder="CVC" 
                    className="bg-transparent border-b border-stone-100 py-2 focus:outline-none focus:border-stone-900 transition-colors text-sm font-mono" 
                  />
                </div>
              </div>
            </div>

            <button 
              disabled={isProcessing}
              className="w-full bg-stone-900 text-white py-4 uppercase text-xs font-bold tracking-[0.3em] hover:bg-stone-800 transition-all duration-300 disabled:opacity-50"
            >
              {isProcessing ? 'Processing Securely...' : `Pay €${total}.00`}
            </button>
          </form>
        </div>

        <div className="bg-white p-10 h-fit border border-stone-100">
          <h2 className="text-2xl font-serif italic mb-8">Order Summary</h2>
          <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-20 bg-stone-100 overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{item.name}</p>
                    <p className="text-stone-400">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium text-stone-900">€{item.price * item.quantity}.00</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-stone-100 pt-6 space-y-4">
            <div className="flex justify-between text-stone-500 text-sm">
              <span>Shipping</span>
              <span className="uppercase tracking-widest text-[10px] pt-1">Complimentary</span>
            </div>
            <div className="flex justify-between text-stone-900 font-serif text-xl italic pt-4">
              <span>Total</span>
              <span>€{total}.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
