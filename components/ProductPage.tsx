import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product | null;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onAddToCart, onBack }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) return null;

  const images = [product.image, ...product.additionalImages];

  return (
    <div className="min-h-screen bg-white animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={onBack}
          className="flex items-center text-stone-400 hover:text-stone-900 mb-12 uppercase text-[10px] tracking-[0.3em] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Atelier
        </button>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 flex flex-col-reverse lg:flex-row gap-6">
            <div className="lg:w-20 flex lg:flex-col flex-row gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-20 h-28 overflow-hidden border transition-all ${activeImage === idx ? 'border-stone-900' : 'border-stone-100 opacity-60'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-stone-50 overflow-hidden relative">
              <img 
                src={images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif italic text-stone-900 leading-tight">{product.name}</h1>
              <p className="text-2xl text-stone-900 font-light">€{product.price}.00</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-100 pb-2">The Story</h3>
              <p className="text-stone-600 font-light leading-relaxed tracking-wide italic">
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-100 pb-2">Atelier Notes</h3>
              <ul className="grid grid-cols-1 gap-4">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-xs text-stone-500 tracking-wider">
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 space-y-6">
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-stone-900 text-white py-5 uppercase text-xs font-bold tracking-[0.4em] hover:bg-stone-800 transition-all shadow-xl active:scale-95"
              >
                Acquire for Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;