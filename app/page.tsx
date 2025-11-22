import Navbar from "../src/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />

      {/* 1. HERO PRINCIPAL - Minimal Apple */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-48 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-jet-black">
          SoftNero
        </h1>

        <p className="text-2xl md:text-3xl font-extralight tracking-tight text-gray-600 mb-4">
          Tecnología que impulsa tu negocio.
        </p>

        <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mb-12">
          Sistemas empresariales modernos, claros y eficientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/contacto"
            className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
          >
            Agendar llamada
          </Link>
          <Link
            href="/servicios"
            className="px-8 py-3 border border-gray-200 text-foreground font-medium rounded-full hover:bg-gray-50 transition-all duration-300 hover:border-gray-300"
          >
            Ver portafolio
          </Link>
        </div>
      </section>

      {/* 2. SECCIONES - 3 Columnas Minimalistas */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Column 1 */}
          <div className="flex flex-col items-start group">
            <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-500">
              <svg
                className="w-6 h-6 text-black group-hover:text-primary transition-colors duration-500"
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
            <h3 className="text-xl font-semibold mb-3 text-jet-black">
              Sistemas a Medida
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Arquitectura diseñada específicamente para tus procesos
              operativos. Sin excesos, solo lo que necesitas.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start group">
            <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-500">
              <svg
                className="w-6 h-6 text-black group-hover:text-primary transition-colors duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-jet-black">
              Alto Rendimiento
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Optimización extrema en cada línea de código. Tus aplicaciones
              cargarán al instante.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start group">
            <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-500">
              <svg
                className="w-6 h-6 text-black group-hover:text-primary transition-colors duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-jet-black">
              Seguridad Total
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Protección de datos empresariales con estándares bancarios. Tu
              información siempre segura.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE - Bordes delgadísimos */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-16 text-center tracking-tight">
            Proyectos Destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group border border-[#eeeeee] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1">
              <div className="h-48 bg-gray-50 rounded-xl mb-8 flex items-center justify-center text-gray-300 group-hover:bg-blue-50/50 transition-colors">
                <span className="font-light">App Preview</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Escuadrón Financiero
              </h3>
              <p className="text-sm text-gray-400 font-light mb-4">
                Fintech / Préstamos
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-50 text-xs text-gray-500 rounded-full">
                  SaaS
                </span>
                <span className="px-3 py-1 bg-gray-50 text-xs text-gray-500 rounded-full">
                  Dashboard
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group border border-[#eeeeee] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1">
              <div className="h-48 bg-gray-50 rounded-xl mb-8 flex items-center justify-center text-gray-300 group-hover:bg-blue-50/50 transition-colors">
                <span className="font-light">App Preview</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Sistema de Inventario
              </h3>
              <p className="text-sm text-gray-400 font-light mb-4">
                Logística / Control
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-50 text-xs text-gray-500 rounded-full">
                  ERP
                </span>
                <span className="px-3 py-1 bg-gray-50 text-xs text-gray-500 rounded-full">
                  Real-time
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group border border-[#eeeeee] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1">
              <div className="h-48 bg-gray-50 rounded-xl mb-8 flex items-center justify-center text-gray-300 group-hover:bg-blue-50/50 transition-colors">
                <span className="font-light">App Preview</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">CRM de Cartera</h3>
              <p className="text-sm text-gray-400 font-light mb-4">
                Gestión de Clientes
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-50 text-xs text-gray-500 rounded-full">
                  CRM
                </span>
                <span className="px-3 py-1 bg-gray-50 text-xs text-gray-500 rounded-full">
                  Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIO - Apple Quote */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-medium text-jet-black leading-tight mb-8 tracking-tight">
            “SoftNero transformó nuestra operación con un sistema que
            simplemente funciona. Limpio, rápido y sin fricción.”
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full mb-3"></div>
            <cite className="text-sm font-semibold text-gray-900 not-italic">
              Director de Operaciones
            </cite>
            <span className="text-sm text-gray-500">Empresa Financiera</span>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="px-6 py-32 bg-[#f8f8f8]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">
            ¿Listo para comenzar?
          </h2>
          <p className="text-gray-500 font-light text-lg mb-10">
            Llevamos tu empresa al siguiente nivel tecnológico.
          </p>
          <Link
            href="/contacto"
            className="px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-1 inline-block"
          >
            Agendar llamada
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-semibold text-jet-black">SoftNero</span>
          <div className="flex gap-8 text-sm text-gray-500 font-light">
            <Link
              href="/servicios"
              className="hover:text-black transition-colors"
            >
              Servicios
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
