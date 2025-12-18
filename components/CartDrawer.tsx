
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, onClose, items, onRemove, onUpdateQuantity, onCheckout 
}) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <h2 className="text-xl font-serif italic tracking-tight">Shopping Bag</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-sm uppercase tracking-widest italic">Your bag is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4 pb-6 border-b border-stone-50 last:border-0">
                <div className="w-24 h-32 bg-stone-100 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-sm font-medium text-stone-900">{item.name}</h3>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">€{item.price}.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-stone-200">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-1 text-stone-400 hover:text-stone-900 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-medium text-stone-700">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-1 text-stone-400 hover:text-stone-900 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 space-y-4 bg-stone-50/50">
            <div className="flex justify-between items-center text-stone-900 font-serif italic text-lg">
              <span>Subtotal</span>
              <span>€{total}.00</span>
            </div>
            <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] text-center">
              Taxes and shipping calculated at checkout
            </p>
            <button 
              onClick={onCheckout}
              className="w-full bg-stone-900 text-white py-4 uppercase text-xs font-bold tracking-[0.3em] hover:bg-stone-800 transition-all duration-300 shadow-xl"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
