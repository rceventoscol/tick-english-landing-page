
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 md:pt-32 pb-12 md:pb-16 lg:pb-20 relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')", 
        filter: "brightness(0.3)" 
      }}></div>
      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="max-w-3xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Aprende inglés de manera <span className="text-primary">eficaz</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Domina el inglés americano o británico en un tiempo récord con nuestra metodología exclusiva. Diseñado para personas que buscan resultados rápidos y duraderos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://richardcaroprese.hotmart.host/nueva-pagina-39368a59-9a91-4a9e-97ed-100a812e8cf7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-center"
            >
              Adquiere el curso ahora <ArrowRight size={18} />
            </a>
            <a 
              href={`https://wa.me/573118345821?text=${encodeURIComponent('Hola, estoy interesado en el curso de inglés de Tick.english')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 text-center"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
