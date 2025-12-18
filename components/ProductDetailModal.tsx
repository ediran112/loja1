import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  const images = [product.image, ...product.additionalImages];

  return (
    <div className="fixed inset-0 z-[160] flex items-center justify-center lg:p-12 p-4">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="lg:w-2/3 flex flex-col lg:flex-row bg-stone-100 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <img 
              src={images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
          <div className="lg:w-24 w-full flex lg:flex-col flex-row p-2 lg:p-4 gap-2 bg-white/50 border-r border-stone-100">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-12 h-16 lg:w-full lg:h-24 overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-stone-900' : 'border-transparent opacity-60'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col overflow-y-auto max-h-[50vh] lg:max-h-none">
          <div className="mb-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-2 block">{product.category}</span>
            <h2 className="text-3xl font-serif italic mb-4">{product.name}</h2>
            <p className="text-xl text-stone-900 mb-8">€{product.price}.00</p>
            
            <div className="prose prose-sm text-stone-600 font-light leading-relaxed mb-12">
              <p>{product.description}</p>
            </div>
          </div>

          <button 
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full bg-stone-900 text-white py-5 uppercase text-xs font-bold tracking-[0.3em] hover:bg-stone-800 transition-all transform hover:scale-[1.02]"
          >
            Add to Bag
          </button>
          
          <div className="mt-6 flex justify-between text-[10px] uppercase tracking-widest text-stone-400 border-t border-stone-100 pt-6">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Eco-Tailored
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Global Shipping
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;