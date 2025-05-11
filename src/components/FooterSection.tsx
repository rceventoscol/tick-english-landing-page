
const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/3bde2eb4-0ad7-432f-86ef-a6fab2bca7c7.png" 
              alt="Tick.english Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Metodología eficaz para aprender inglés americano o británico en un corto período de tiempo.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/tick.english" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href={`https://wa.me/573118345821`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#curso" className="text-gray-300 hover:text-white transition-colors">Curso</a></li>
              <li><a href="#testimonios" className="text-gray-300 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">WhatsApp: +57 311 8345821</li>
              <li className="text-gray-300">Instagram: @tick.english</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Tick.english. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
