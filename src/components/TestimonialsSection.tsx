
const testimonials = [
  {
    name: "María González",
    role: "Estudiante universitaria",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content: "Gracias a Tick.english logré aprobar mi examen TOEFL con un puntaje excelente. La metodología es muy efectiva y los profesores son increíbles. ¡Totalmente recomendado!",
  },
  {
    name: "Carlos Méndez",
    role: "Profesional en marketing",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Intenté aprender inglés varias veces sin éxito, hasta que encontré Tick.english. Su enfoque práctico y personalizado me permitió ganar confianza y fluidez en solo 3 meses.",
  },
  {
    name: "Ana Ramírez",
    role: "Empresaria",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "El curso de inglés para negocios de Tick.english transformó mi capacidad de comunicación con clientes internacionales. La inversión valió completamente la pena.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Lo que dicen nuestros estudiantes</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Historias de éxito de personas que, como tú, transformaron su dominio del inglés con nuestra metodología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="relative">
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
