
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="group flex flex-col space-y-4 cursor-pointer" onClick={() => onViewDetails(product)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 bg-white py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-2">
          <span>Quick View</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-2">
        <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">{product.category}</span>
        <h3 className="text-lg font-serif italic text-stone-800 mb-1">{product.name}</h3>
        <p className="text-sm font-medium text-stone-600">€{product.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
