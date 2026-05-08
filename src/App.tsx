import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, ArrowRight, Menu, X, Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { PRODUCTS, SITE_CONFIG } from "./constants";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const stagger = {
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen selection:bg-brand-taupe">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-brand-cream/80 backdrop-blur-md py-4 border-b border-brand-sand" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-light tracking-[0.2em] uppercase cursor-pointer">
              2clothes
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {["Coleção", "Sobre", "Catálogo", "Contato"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-sans font-medium tracking-wide uppercase hover:text-brand-earth transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6"
          >
            <a 
              href={SITE_CONFIG.nuvemshopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest bg-brand-charcoal text-white px-6 py-3 rounded-full hover:bg-brand-earth transition-all transform hover:scale-105"
            >
              Catálogo Nuvemshop <ArrowRight size={14} />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              <Menu size={24} />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {["Coleção", "Sobre", "Catálogo", "Contato"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-medium"
                >
                  {item}
                </a>
              ))}
              <a 
                href={SITE_CONFIG.nuvemshopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-sans font-bold uppercase py-4 border-t border-brand-sand"
              >
                Ver Catálogo Nuvemshop <ArrowRight size={20} />
              </a>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 scale-105">
             <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
              alt="Hero Fashion"
              className="w-full h-full object-cover brightness-95"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/40 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <span className="inline-block text-white/90 text-[10px] uppercase tracking-[0.3em] font-semibold underline underline-offset-8 mb-8">
                Essenciais Contemporâneos
              </span>
              <h1 className="text-white text-7xl font-light leading-[1.1] tracking-tighter mb-8">
                Curadoria <br />
                <span className="italic font-serif">de Moda</span>
              </h1>
              <p className="text-white/80 text-lg font-light leading-relaxed mb-12 max-w-sm">
                Peças selecionadas manualmente para compor um guarda-roupa minimalista e duradouro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <a 
                  href={SITE_CONFIG.mercadoLivreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-charcoal text-brand-cream py-4 px-8 text-sm uppercase tracking-widest font-semibold hover:bg-brand-earth transition-colors flex items-center justify-between group"
                >
                  <span>Comprar no Mercado Livre</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href={SITE_CONFIG.nuvemshopUrl}
                  target="_blank"
                  className="border border-white/40 text-white py-4 px-8 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-brand-charcoal transition-all text-center backdrop-blur-sm"
                >
                  Ver Catálogo Nuvemshop
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </motion.div>
        </section>

        {/* Featured Collection */}
        <section id="coleção" className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              {...fadeInUp}
              className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
            >
              <div className="max-w-md">
                <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-brand-earth mb-4">
                  Coleção Essenciais
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif leading-tight">
                  Peças que transcendem as <span className="italic">estação</span>
                </h3>
              </div>
              <p className="text-brand-charcoal/60 max-w-sm">
                Uma seleção manual de itens com materiais duráveis e tons que se complementam perfeitamente.
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              {...stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
            >
              {PRODUCTS.map((product) => (
                <motion.div 
                  key={product.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-brand-cream">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <a 
                        href={product.mercadoLivreUrl}
                        target="_blank"
                        className="w-full bg-brand-charcoal text-white text-center py-3 rounded-md text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        Comprar Mercado Livre <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-earth opacity-60">
                      {product.category}
                    </span>
                    <span className="text-sm font-sans font-medium">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-medium mb-1 group-hover:text-brand-earth transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-brand-charcoal/50 leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brand Values / About */}
        <section id="sobre" className="py-32 bg-brand-sand/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp} className="relative">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-taupe/20 rounded-full blur-3xl" />
                <div className="relative border border-brand-earth/10 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" 
                    alt="Processo Criativo"
                    className="w-full h-auto grayscale-[20%]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-brand-charcoal text-white p-12 hidden md:block">
                     <p className="text-3xl font-serif italic">Est. 2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-brand-earth mb-8">
                  Nossa Proposta
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-10">
                  O luxo do simples, a beleza da <span className="italic">atemporalidade</span>.
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-sans font-bold uppercase tracking-widest mb-3">Qualidade Curada</h4>
                    <p className="text-brand-charcoal/60 leading-relaxed font-sans">
                      Cada peça da 2clothes passa por um rigoroso processo de seleção. Buscamos tecidos naturais que respiram e cortes que abraçam o corpo com elegância.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold uppercase tracking-widest mb-3">Consumo Consciente</h4>
                    <p className="text-brand-charcoal/60 leading-relaxed font-sans">
                      Acreditamos em comprar menos e melhor. Nossos tons neutros permitem infinitas combinações, estendendo a vida útil do seu guarda-roupa.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section id="catálogo" className="py-24 px-6">
          <motion.div 
             {...fadeInUp}
             className="max-w-7xl mx-auto bg-brand-charcoal rounded-[40px] p-12 md:p-24 relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-earth/20 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-taupe/10 blur-[120px]" />
            
            <div className="relative z-10">
              <h2 className="text-white text-5xl md:text-7xl font-serif leading-tight mb-10 mx-auto max-w-3xl">
                Minimalismo <span className="italic">Orgânico</span>
              </h2>
              <p className="text-white/60 mb-12 max-w-lg mx-auto font-sans tracking-widest uppercase text-[10px]">
                Explore todo o nosso catálogo na Nuvemshop
              </p>
              <a 
                href={SITE_CONFIG.nuvemshopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-cream text-brand-charcoal py-4 px-12 text-sm uppercase tracking-widest font-semibold hover:bg-brand-taupe transition-all inline-block"
              >
                Acessar Catálogo
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-white border-t border-brand-sand pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-light tracking-[0.2em] uppercase mb-8">2clothes</h2>
              <p className="text-[#6B665F] text-sm leading-relaxed mb-8 font-light">
                Sofisticação e minimalismo em cada costura. Uma curadoria feita para quem valoriza o tempo e a qualidade.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-brand-sand flex items-center justify-center hover:bg-brand-charcoal hover:shadow-xl hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-sand flex items-center justify-center hover:bg-brand-charcoal hover:shadow-xl hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-sand flex items-center justify-center hover:bg-brand-charcoal hover:shadow-xl hover:text-white transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-earth mb-8">Navegação</h4>
              <ul className="space-y-4">
                {["Coleção", "Sobre", "Catálogo", "Contato"].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-brand-charcoal/60 hover:text-brand-earth transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-earth mb-8">Atendimento</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-brand-charcoal/60 hover:text-brand-earth transition-colors">Termos & Condições</a></li>
                <li><a href="#" className="text-sm text-brand-charcoal/60 hover:text-brand-earth transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-sm text-brand-charcoal/60 hover:text-brand-earth transition-colors">Trocas & Devoluções</a></li>
                <li><a href="#" className="text-sm text-brand-charcoal/60 hover:text-brand-earth transition-colors">Envios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-earth mb-8">Newsletter</h4>
              <p className="text-sm text-brand-charcoal/50 mb-6 leading-relaxed">
                Receba novidades exclusivas e lançamentos da curadoria.
              </p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full bg-brand-cream border border-brand-sand rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-earth transition-colors"
                />
                <button className="absolute right-2 top-2 p-1.5 text-brand-earth hover:text-brand-charcoal transition-colors">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-brand-sand pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-brand-charcoal/40 font-sans uppercase tracking-widest">
              © 2024 2clothes. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 grayscale opacity-30">
              <span className="text-[10px] font-bold">VISA</span>
              <span className="text-[10px] font-bold">MASTERCARD</span>
              <span className="text-[10px] font-bold">PIX</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" className="text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-sans text-sm font-bold uppercase tracking-widest whitespace-nowrap">
          Conversar Agora
        </span>
      </motion.a>
      
      {/* Floating Instagram Reel Preview */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-8 right-8 z-50 hidden sm:block"
      >
        <div className="relative group perspective-1000">
          <div className="w-[140px] h-[240px] bg-brand-charcoal rounded-[24px] p-2 shadow-2xl border-4 border-brand-charcoal overflow-hidden transition-transform duration-500 group-hover:rotate-y-[-12deg] group-hover:scale-105">
            {/* Screen */}
            <div className="w-full h-full bg-brand-cream rounded-[16px] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" 
                alt="Instagram look"
                className="w-full h-full object-cover grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Instagram Icon Overlay */}
              <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md p-1.5 rounded-lg">
                <Instagram size={14} className="text-white" />
              </div>

              {/* Text Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] text-white/70 font-sans uppercase tracking-widest mb-1">New Look</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-brand-taupe" />
                  <span className="text-[8px] text-white font-bold uppercase tracking-tighter">@2clothes</span>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/0 group-hover:bg-brand-charcoal/40 transition-colors duration-500 opacity-0 group-hover:opacity-100"
              >
                <div className="bg-white text-brand-charcoal text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Ver no Instagram
                </div>
              </a>
            </div>
            
            {/* Phone Notches */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-charcoal rounded-full" />
          </div>
          
          {/* Badge */}
          <div className="absolute -top-3 -right-3 bg-brand-earth text-white rounded-full p-2 shadow-lg animate-bounce">
             <span className="text-[10px] font-bold px-1 whitespace-nowrap uppercase tracking-widest">Reels</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
