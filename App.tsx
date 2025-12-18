
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import CheckoutView from './components/CheckoutView';
import AuthModal from './components/AuthModal';
import ProductPage from './components/ProductPage';
import NewsletterPopup from './components/NewsletterPopup';
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
  
  // Notification State para mensagens de sistema (ex: compra concluída)
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'info' | 'error', visible: boolean}>({
    message: '',
    type: 'info',
    visible: false
  });

  const selectedProduct = useMemo(() => 
    PRODUCTS.find(p => p.id === selectedProductId) || null
  , [selectedProductId]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const handleUpdateQuantity = useCallback((id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const handleRemoveFromCart = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const navigateToProduct = (product: Product) => {
    setSelectedProductId(product.id);
    setView('product');
  };

  const handleCompletePurchase = () => {
    setView('success');
    setNotification({
      message: 'Compra realizada com sucesso. Merci!',
      type: 'success',
      visible: true
    });
  };

  return (
    <div className="min-h-screen">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onLogoClick={() => setView('home')}
        onAuthClick={() => setIsAuthModalOpen(true)}
        user={user}
      />
      
      <main>
        {view === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            
            <section className="bg-stone-50 py-16 border-b border-stone-100">
               <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
                 <div className="flex justify-center space-x-12 min-w-max">
                   {['All', 'Suits', 'Dresses', 'Outerwear', 'Footwear', 'Jewelry'].map(cat => (
                     <button key={cat} className="text-[10px] uppercase tracking-[0.4em] text-stone-400 hover:text-stone-900 transition-colors py-2 border-b border-transparent hover:border-stone-900">
                       {cat}
                     </button>
                   ))}
                 </div>
               </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.6em] text-stone-400">The Editorial Edit</span>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-stone-900 leading-tight">Signature Silhouettes</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10">
                {PRODUCTS.slice(0, 4).map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={navigateToProduct} 
                  />
                ))}
              </div>
            </section>

            <section className="bg-stone-900 text-white py-32 overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 flex justify-center items-center pointer-events-none">
                 <span className="text-[30vw] font-serif italic whitespace-nowrap">Atelier</span>
              </div>
              <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
                <span className="text-[10px] uppercase tracking-[0.8em] mb-12 opacity-50">Hand-finished In Europe</span>
                <h2 className="text-3xl md:text-5xl font-serif italic mb-12 max-w-2xl leading-relaxed">
                  "Fashion passes, style remains. We create the foundations of a timeless wardrobe."
                </h2>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.6em] text-stone-400">The Finishing Touches</span>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-stone-900 leading-tight">Curated Accoutrements</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-10">
                {PRODUCTS.slice(4).map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={navigateToProduct} 
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {view === 'product' && (
          <ProductPage 
            product={selectedProduct} 
            onBack={() => setView('home')} 
            onAddToCart={handleAddToCart}
          />
        )}

        {view === 'checkout' && (
          <CheckoutView 
            items={cartItems} 
            onBack={() => setView('home')} 
            onComplete={handleCompletePurchase}
          />
        )}

        {view === 'success' && (
          <div className="h-[80vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
            <h2 className="text-4xl font-serif italic mb-6">Merci Beaucoup</h2>
            <p className="text-stone-500 max-w-md mb-12 tracking-wide font-light leading-relaxed">
              Sua encomenda foi recebida e está sendo preparada em nosso atelier.
            </p>
            <button 
              onClick={() => {
                setCartItems([]);
                setView('home');
              }}
              className="bg-stone-900 text-white px-12 py-4 uppercase text-xs font-bold tracking-[0.3em] hover:bg-stone-800 transition-all shadow-xl"
            >
              Voltar à Loja
            </button>
          </div>
        )}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20 border-b border-white/5 pb-20">
             <div className="col-span-1 md:col-span-1 space-y-8">
                <h1 className="text-3xl font-serif italic text-white tracking-tighter">Maison de l'Élégance</h1>
             </div>
             <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Client Services</h4>
                <ul className="text-[10px] uppercase tracking-[0.4em] space-y-3">
                   <li><a href="#" className="hover:text-white transition-colors">Personal Concierge</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                </ul>
             </div>
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-stone-600">
            © 2024 Maison de l'Élégance. Artisanal Excellence.
          </p>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setView('checkout');
        }}
      />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={(u) => {
          setUser(u);
        }}
      />

      <NewsletterPopup />
      
      <Notification 
        message={notification.message}
        type={notification.type}
        isVisible={notification.visible}
        onClose={() => setNotification(prev => ({...prev, visible: false}))}
      />

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
