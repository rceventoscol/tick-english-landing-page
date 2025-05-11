
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send this data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">¿Tienes preguntas?</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Estamos aquí para ayudarte. Contáctanos a través del formulario o por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contáctanos directamente</h3>
              <p className="text-gray-600 mb-6">
                ¿Prefieres una respuesta inmediata? Contáctanos a través de WhatsApp 
                o síguenos en Instagram para conocer más sobre nuestros cursos y promociones.
              </p>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href={`https://wa.me/573118345821?text=${encodeURIComponent('Hola, estoy interesado en el curso de inglés de Tick.english')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Chatea con nosotros en WhatsApp (+57 311 8345821)
                </a>
                
                <a 
                  href="https://instagram.com/tick.english" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Síguenos en Instagram (@tick.english)
                </a>
              </div>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Por qué aprender con nosotros?</h3>
              <p className="text-gray-700 mb-4">
                En Tick.english estamos comprometidos con tu éxito. Nuestra metodología única 
                te permitirá aprender inglés de una forma efectiva y adaptada a tus necesidades.
              </p>
              <a 
                href="https://richardcaroprese.hotmart.host/nueva-pagina-39368a59-9a91-4a9e-97ed-100a812e8cf7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-primary hover:underline"
              >
                Conoce más sobre nuestro método →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
