import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <div className="group flex flex-col space-y-5 cursor-pointer" onClick={() => onViewDetails(product)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5] rounded-sm">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
           {product.price > 400 && (
             <span className="bg-black text-white text-[8px] uppercase tracking-widest px-2 py-1">Premium</span>
           )}
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <span className="text-[10px] uppercase tracking-widest text-stone-400">Product</span>
        <h3 className="text-xs font-medium uppercase tracking-wider text-black">{product.name}</h3>
        <p className="text-xs font-light text-stone-500">€{product.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;