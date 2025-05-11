
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="container-custom px-4 md:px-8 flex justify-between items-center">
        <div className="logo flex items-center">
          <img 
            src="/lovable-uploads/3bde2eb4-0ad7-432f-86ef-a6fab2bca7c7.png" 
            alt="Tick.english Logo" 
            className="h-10 md:h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('curso')}
            className="font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors"
          >
            Curso
          </button>
          <button 
            onClick={() => scrollToSection('testimonios')}
            className="font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors"
          >
            Testimonios
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors"
          >
            Contacto
          </button>
          <a 
            href="https://richardcaroprese.hotmart.host/nueva-pagina-39368a59-9a91-4a9e-97ed-100a812e8cf7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Comprar Curso
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <div className="flex flex-col py-4 px-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="py-3 font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors text-left"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('curso')}
              className="py-3 font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors text-left"
            >
              Curso
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="py-3 font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors text-left"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="py-3 font-montserrat font-semibold text-gray-800 hover:text-primary transition-colors text-left"
            >
              Contacto
            </button>
            <a 
              href="https://richardcaroprese.hotmart.host/nueva-pagina-39368a59-9a91-4a9e-97ed-100a812e8cf7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mt-3 text-center"
            >
              Comprar Curso
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
