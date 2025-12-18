
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  additionalImages: string[];
  description: string;
  details: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'product' | 'checkout' | 'success';

export interface User {
  email: string;
  firstName?: string;
}
