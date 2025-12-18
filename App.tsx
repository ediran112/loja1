import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import CheckoutView from './components/CheckoutView';
import AuthModal from './components/AuthModal';
import ProductPage from './components/ProductPage';
import Notification from './components/Notification';
import { Product, CartItem, View, User } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [notification, setNotification] = useState({ message: '', type: 'success' as const, visible: false });

  const selectedProduct = useMemo(() => PRODUCTS.find(p => p.id === selectedProductId) || null, [selectedProductId]);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const handleUpdateQuantity = useCallback((id: string, delta: number) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  }, []);

  const handleRemoveFromCart = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} onLogoClick={() => setView('home')} onAuthClick={() => setIsAuthModalOpen(true)} user={user} />
      
      <main>
        {view === 'home' && (
          <div className="animate-fade-in space-y-24 pb-24">
            <Hero />
            
            {/* Just Arrived Section */}
            <section className="max-w-[1600px] mx-auto px-6">
              <div className="flex justify-between items-end mb-12 border-b border-stone-100 pb-6">
                <h2 className="text-3xl font-light tracking-tight">Just arrived</h2>
                <a href="#" className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-black">View All</a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {PRODUCTS.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} onViewDetails={(p) => { setSelectedProductId(p.id); setView('product'); }} />
                ))}
              </div>
            </section>

            {/* Editorial Blocks: Timeless Classics */}
            <section className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto bg-stone-100 flex flex-col items-center justify-center p-20 text-center space-y-8">
                <img src="https://images.unsplash.com/photo-1594932224828-b4b05a832fe3?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="relative z-10 space-y-6">
                  <h2 className="text-5xl font-serif text-white italic">Timeless <span className="font-sans not-italic font-light">classics</span></h2>
                  <button className="text-[10px] uppercase tracking-[0.4em] text-white border-b border-white pb-2 hover:opacity-70">Explore</button>
                </div>
              </div>
              <div className="aspect-square bg-[#f8f8f8] flex flex-col items-center justify-center p-20 text-center">
                <h3 className="text-3xl font-light mb-6">Aa</h3>
                <p className="text-sm text-stone-500 max-w-xs font-light tracking-wide leading-relaxed">
                  Craft your message — with images, words, or both. Redefine your style with our latest European drop.
                </p>
              </div>
            </section>

            {/* Quote / Tagline Section */}
            <section className="bg-black text-white py-40 text-center px-4">
               <h2 className="text-4xl md:text-6xl font-light max-w-4xl mx-auto leading-tight tracking-tight">
                 The brand designs clothing to make everyone feel <span className="font-serif italic">unique</span>
               </h2>
               <button className="mt-12 text-[10px] uppercase tracking-[0.4em] border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all">Lookbook</button>
            </section>

            {/* Special Collections / Categories */}
            <section className="max-w-[1400px] mx-auto px-6 text-center">
              <h2 className="text-3xl font-serif italic mb-16">Our <span className="font-sans not-italic font-light">special</span> collections</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {[
                   { name: 'Tops', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800' },
                   { name: 'Accessories', img: 'https://images.unsplash.com/photo-1535633302704-b02f4faad747?auto=format&fit=crop&q=80&w=800' },
                   { name: 'Bottoms', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800' }
                 ].map(cat => (
                   <div key={cat.name} className="space-y-6 group cursor-pointer">
                      <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                        <img src={cat.img} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                      </div>
                      <h4 className="text-lg font-light tracking-wide">{cat.name}</h4>
                   </div>
                 ))}
              </div>
            </section>

            {/* Archive Sale / Promo */}
            <section className="bg-[#1a1a1a] text-white py-16 flex flex-col md:flex-row items-center justify-between px-12 space-y-8 md:space-y-0">
               <div className="space-y-4">
                 <h2 className="text-3xl font-light">Archive sale, live now</h2>
                 <button className="text-[10px] uppercase tracking-widest border-b border-white pb-1">Explore</button>
               </div>
               <div className="flex space-x-8">
                  {['72', '17', '10', '37'].map((n, i) => (
                    <div key={i} className="text-center">
                       <span className="text-2xl font-light block">{n}</span>
                       <span className="text-[8px] uppercase tracking-widest text-stone-500">{['Days', 'Hours', 'Min', 'Sec'][i]}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Item of the Week */}
            <section className="max-w-[1200px] mx-auto px-6 py-20 bg-[#fbfbfb] grid md:grid-cols-2 gap-20 items-center">
               <div className="flex space-x-4">
                  <img src={PRODUCTS[1].image} className="w-2/3 aspect-[3/4] object-cover rounded-sm shadow-xl" />
                  <img src={PRODUCTS[1].additionalImages[0]} className="w-1/3 aspect-[3/4] object-cover rounded-sm mt-12 opacity-60" />
               </div>
               <div className="space-y-10">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400">Item of the week</span>
                  <div className="space-y-2">
                    <h2 className="text-5xl font-serif italic">{PRODUCTS[1].name}</h2>
                    <p className="text-xl font-light">€{PRODUCTS[1].price}.00</p>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(PRODUCTS[1])}
                    className="w-full bg-black text-white py-4 uppercase text-xs font-bold tracking-[0.3em] hover:bg-stone-800 transition-all"
                  >
                    Add to Cart
                  </button>
                  <p className="text-xs text-stone-500 uppercase tracking-widest text-center cursor-pointer hover:text-black">View Product</p>
               </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-stone-100">
               <h2 className="text-2xl font-light mb-16 tracking-tight uppercase">Testimonials</h2>
               <div className="grid md:grid-cols-2 gap-20">
                  <div className="space-y-4">
                    <p className="text-sm italic font-light text-stone-600">"I absolutely love the quality of my new silk dress. The attention to detail is remarkable."</p>
                    <span className="block text-[10px] uppercase tracking-widest font-bold">Jane Doe</span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm italic font-light text-stone-600">"Exceptional service and the most beautiful packaging I've ever seen. A true European experience."</p>
                    <span className="block text-[10px] uppercase tracking-widest font-bold">Rachel Zoë</span>
                  </div>
               </div>
            </section>
          </div>
        )}

        {view === 'product' && selectedProduct && <ProductPage product={selectedProduct} onBack={() => setView('home')} onAddToCart={handleAddToCart} />}
        {view === 'checkout' && <CheckoutView items={cartItems} onBack={() => setView('home')} onComplete={() => { setView('success'); setCartItems([]); }} />}
        {view === 'success' && (
          <div className="h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-serif italic mb-6">Merci Beaucoup</h2>
            <button onClick={() => setView('home')} className="bg-black text-white px-12 py-4 uppercase text-xs font-bold tracking-[0.3em]">Voltar à Loja</button>
          </div>
        )}
      </main>

      <footer className="bg-black text-stone-400 py-24 px-12">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-20">
          <div className="col-span-1 space-y-8">
            <h2 className="text-white text-xl uppercase tracking-tighter">My Store</h2>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest leading-loose">Sign up to receive 10% off your first order</p>
              <div className="flex border-b border-stone-700 py-2">
                 <input type="email" placeholder="Email Address" className="bg-transparent text-[11px] flex-1 outline-none text-white" />
                 <button className="text-[10px] uppercase tracking-widest text-white hover:opacity-70 transition-opacity">Subscribe</button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] mb-8">Shop</h4>
            <ul className="text-[10px] uppercase tracking-[0.4em] space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] mb-8">Company</h4>
            <ul className="text-[10px] uppercase tracking-[0.4em] space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Atelier</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white text-[10px] uppercase tracking-[0.4em] mb-8">Social</h4>
             <div className="flex space-x-4">
                <div className="w-8 h-8 border border-stone-800 flex items-center justify-center hover:border-white transition-colors cursor-pointer text-white">IG</div>
                <div className="w-8 h-8 border border-stone-800 flex items-center justify-center hover:border-white transition-colors cursor-pointer text-white">FB</div>
             </div>
          </div>
        </div>
      </footer>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} onRemove={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} onCheckout={() => { setIsCartOpen(false); setView('checkout'); }} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onLogin={setUser} />
      <Notification message={notification.message} type={notification.type} isVisible={notification.visible} onClose={() => setNotification(p => ({...p, visible: false}))} />
    </div>
  );
};

export default App;