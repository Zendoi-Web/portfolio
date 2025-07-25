// zendoi.dev - Landing Page Personal
// Stack: Next.js + Tailwind CSS

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitMessage('¡Mensaje enviado correctamente! Te contactaré pronto.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
        <h1 className="text-5xl font-bold mb-4">Zendoi</h1>
        <p className="text-xl max-w-xl">Creo soluciones web modernas, escalables y hechas a tu medida.</p>
        <a href="#contact" className="mt-8 bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition">Contáctame</a>
      </section>

      {/* Servicios */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Landing Pages', desc: 'Diseños modernos, responsivos y orientados a conversión.' },
            { title: 'Tiendas Online', desc: 'E-commerce con carrito, pagos e integración fácil.' },
            { title: 'Sistemas Web', desc: 'Paneles, APIs, dashboards y herramientas a medida.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 border rounded-xl shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portafolio */}
      <section className="py-16 px-6 bg-gray-50" id="portfolio">
        <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Portfolio projects */}
          {[
            {
              title: 'E-commerce Moderno',
              description: 'Tienda online con Next.js, Stripe y gestión de inventario.',
              tech: 'Next.js, React, Tailwind CSS, Stripe'
            },
            {
              title: 'Dashboard Analytics',
              description: 'Panel de control con gráficos interactivos y métricas en tiempo real.',
              tech: 'React, Chart.js, Node.js, MongoDB'
            }
          ].map((project, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm opacity-80">Vista previa próximamente</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <p className="text-xs text-indigo-600 font-medium">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="text-lg text-gray-700">Soy desarrollador full stack con experiencia en todo tipo de tecnologías web. Me enfoco en crear soluciones funcionales y visualmente atractivas para negocios modernos.</p>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-16 px-6 bg-indigo-100">
        <h2 className="text-3xl font-bold text-center mb-10">Contacto</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nombre" 
            className="p-3 rounded border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" 
            required
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Correo electrónico" 
            className="p-3 rounded border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" 
            required
          />
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Mensaje" 
            className="p-3 rounded border min-h-[120px] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            required
          ></textarea>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
          {submitMessage && (
            <div className="text-green-600 text-center font-medium">
              {submitMessage}
            </div>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Zendoi. Todos los derechos reservados.
      </footer>
    </main>
  );
}
