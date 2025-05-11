
import { Check } from 'lucide-react';

const CourseSection = () => {
  const courseFeatures = [
    "Metodología probada y eficaz",
    "Clases en vivo con instructores certificados",
    "Material de estudio exclusivo",
    "Prácticas y ejercicios interactivos",
    "Soporte personalizado durante todo el curso",
    "Certificado de finalización",
  ];

  const courseModules = [
    {
      title: "Fundamentos del inglés",
      description: "Aprende las estructuras básicas y vocabulario esencial para desenvolverte en situaciones cotidianas."
    },
    {
      title: "Conversación y fluidez",
      description: "Desarrolla tu habilidad para mantener conversaciones naturales y fluidas en inglés."
    },
    {
      title: "Gramática avanzada",
      description: "Domina las estructuras gramaticales complejas para expresarte con precisión."
    },
    {
      title: "Inglés de negocios",
      description: "Aprende vocabulario específico y expresiones utilizadas en entornos profesionales."
    },
    {
      title: "Preparación para exámenes internacionales",
      description: "Estrategias y técnicas para aprobar exámenes como TOEFL, IELTS, Cambridge, entre otros."
    }
  ];

  return (
    <section id="curso" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestro Curso de Inglés</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Diseñado para adaptarse a tus necesidades y ayudarte a alcanzar la fluidez en tiempo récord, 
            nuestro curso combina la mejor metodología con instructores de primer nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="section-subtitle mb-6">¿Por qué elegir Tick.english?</h3>
            <ul className="space-y-4">
              {courseFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 bg-primary/20 p-1 rounded-full">
                    <Check size={16} className="text-primary" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Estudiantes aprendiendo inglés" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="section-subtitle text-center mb-8">Contenido del curso</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{module.title}</h4>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="section-subtitle mb-6">¿Listo para empezar?</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            No esperes más para mejorar tus oportunidades profesionales y personales dominando el inglés.
          </p>
          <a 
            href="https://richardcaroprese.hotmart.host/nueva-pagina-39368a59-9a91-4a9e-97ed-100a812e8cf7" 
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-primary inline-block"
          >
            Inscríbete ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
