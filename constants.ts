
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Riviera Linen Suit',
    price: 450,
    category: 'Suits',
    image: 'https://images.unsplash.com/photo-1594932224828-b4b05a832fe3?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592090250007-681b83145452?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Crafted from the finest breathable Italian linen, this suit features a half-canvassed construction for a perfect drape. The jacket is unlined for maximum comfort during warm Mediterranean evenings, while the trousers feature a contemporary tapered fit.',
    details: ['100% Italian Linen', 'Mother of Pearl buttons', 'Unlined construction', 'Dry clean only']
  },
  {
    id: '2',
    name: 'Milanese Silk Slip Dress',
    price: 280,
    category: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'This iconic silhouette is reimagined in heavy-weight 22-momme Mulberry silk. It features delicate adjustable spaghetti straps and a refined bias-cut that gracefully contours the body.',
    details: ['100% Mulberry Silk', 'Bias cut', 'Adjustable straps', 'Internal french seams']
  },
  {
    id: '3',
    name: 'Alpine Cashmere Overcoat',
    price: 890,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544022613-e87ce7526ed1?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A masterpiece of insulation and softness. Our signature overcoat is handmade in Switzerland using ethically sourced Grade-A cashmere from the Inner Mongolian highlands.',
    details: ['Grade-A Cashmere', 'Horn buttons', 'Silk-blend lining', 'Hand-stitched lapels']
  },
  {
    id: '4',
    name: 'Parisian Velvet Blazer',
    price: 360,
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1617130863154-82500ee33595?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Evoke the mysterious elegance of Parisian nights. This blazer is structured with internal shoulder pads for a sharp, architectural look. The deep navy cotton-velvet has a lustrous sheen.',
    details: ['Cotton Velvet', 'Satin lapels', 'Functional button cuffs', 'Internal chest pocket']
  },
  {
    id: '5',
    name: 'Tuscan Leather Loafers',
    price: 320,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1533681905691-030097c0c163?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Hand-burnished leather loafers crafted in a small family-owned atelier in Tuscany. Features a cushioned cork footbed and a Blake-stitched sole for flexibility.',
    details: ['Full-grain calfskin', 'Blake-stitched sole', 'Hand-painted finish', 'Made in Italy']
  },
  {
    id: '6',
    name: 'Atelier Gold Hoops',
    price: 210,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4faad747?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Timeless 18k gold vermeil hoops with a subtle hammered texture, reflecting the artisanal spirit of our Maison.',
    details: ['18k Gold Vermeil', '925 Sterling Silver base', 'Hand-hammered finish', 'Lightweight design']
  }
];

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=2000'
];
