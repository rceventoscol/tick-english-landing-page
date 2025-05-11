
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div 
        className={`bg-white rounded-lg shadow-2xl max-w-md w-full relative overflow-hidden
          ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      >
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Oferta Especial!</h3>
            <p className="text-primary font-semibold text-lg">Por tiempo limitado</p>
          </div>

          <div className="bg-primary/10 p-4 rounded-md mb-6 border-l-4 border-primary">
            <p className="text-gray-700 font-medium">
              Adquiere nuestro curso de inglés con un <span className="font-bold text-primary">descuento exclusivo</span> y 
              transforma tu dominio del idioma.
            </p>
          </div>

          <div className="text-center">
            <a 
              href="https://richardcaroprese.hotmart.host/nueva-pagina-39368a59-9a91-4a9e-97ed-100a812e8cf7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full animate-pulse-slow block"
            >
              Comprar ahora
            </a>
            <p className="text-sm text-gray-500 mt-3">
              *Promoción válida hasta agotar existencias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
