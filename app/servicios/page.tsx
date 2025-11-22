import Navbar from "../../src/components/Navbar";
import Link from "next/link";

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />

      {/* HEADER */}
      <section className="px-6 py-24 md:py-32 bg-white text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-jet-black">
            SoftNero — Servicios
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 tracking-tight leading-relaxed">
            Tecnología hecha para crecer tu negocio.
          </p>
        </div>
      </section>

      {/* SECCIÓN 1 — Servicios principales */}
      <section
        className="px-6 py-20 bg-white border-t border-gray-100 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Servicio 1 */}
          <div className="flex flex-col items-start p-7 rounded-2xl hover:bg-gray-50/50 transition-colors duration-500">
            <div className="w-14 h-14 bg-gray-50 rounded-xl mb-6 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-jet-black tracking-tight">
              Sistemas Empresariales
            </h3>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              Plataformas completas diseñadas para la operación crítica de tu
              empresa.
            </p>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                CRMs y ERPs a medida
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Sistemas de préstamos
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Gestión de inventarios
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Dashboards administrativos
              </li>
            </ul>
          </div>

          {/* Servicio 2 */}
          <div className="flex flex-col items-start p-7 rounded-2xl hover:bg-gray-50/50 transition-colors duration-500">
            <div className="w-14 h-14 bg-gray-50 rounded-xl mb-6 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-jet-black tracking-tight">
              Integraciones & APIs
            </h3>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              Conectamos tus sistemas para que los datos fluyan sin
              interrupciones.
            </p>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Desarrollo de APIs REST/GraphQL
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Autenticación JWT segura
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Integración con AWS S3
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Pasarelas de pago (Stripe)
              </li>
            </ul>
          </div>

          {/* Servicio 3 */}
          <div className="flex flex-col items-start p-7 rounded-2xl hover:bg-gray-50/50 transition-colors duration-500">
            <div className="w-14 h-14 bg-gray-50 rounded-xl mb-6 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-jet-black tracking-tight">
              Desarrollo Web
            </h3>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              Presencia digital de alto impacto con rendimiento optimizado.
            </p>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Sitios corporativos
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Landing Pages de conversión
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Catálogos digitales
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Portales de clientes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — Tecnologías */}
      <section
        className="px-6 py-24 bg-gray-50 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Icons placeholders */}
            <span className="text-xl font-bold text-black">React</span>
            <span className="text-xl font-bold text-black">Next.js</span>
            <span className="text-xl font-bold text-black">Node.js</span>
            <span className="text-xl font-bold text-black">Express</span>
            <span className="text-xl font-bold text-black">MongoDB</span>
            <span className="text-xl font-bold text-black">AWS</span>
            <span className="text-xl font-bold text-black">Tailwind</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — Proceso de trabajo */}
      <section
        className="px-6 py-32 bg-white animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-16 text-center tracking-tight">
            Nuestro Proceso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center bg-white p-4">
              <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary shadow-sm">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                Descubrimiento
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Entendemos tu negocio, reglas, procesos y necesidades reales
                antes de escribir una sola línea de código.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center bg-white p-4">
              <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary shadow-sm">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                Desarrollo Iterativo
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Código limpio y estable con entregas continuas para que veas el
                progreso real de tu aplicación.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center bg-white p-4">
              <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary shadow-sm">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                Entrega + Soporte
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Despliegue a producción, configuración de servidores y soporte
                continuo para tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-semibold text-jet-black">SoftNero</span>
          <div className="flex gap-8 text-sm text-gray-500 font-light">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link
              href="/contacto"
              className="hover:text-black transition-colors"
            >
              Contacto
            </Link>
            <a href="#" className="hover:text-black transition-colors">
              LinkedIn
            </a>
          </div>
          <span className="text-sm text-gray-400 font-light">
            © 2025 SoftNero Inc.
          </span>
        </div>
      </footer>
    </div>
  );
}
