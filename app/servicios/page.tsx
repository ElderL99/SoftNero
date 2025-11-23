import Navbar from "../../src/components/Navbar";
import Link from "next/link";

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />

      {/* HEADER */}
      <section className="px-6 py-24 md:py-32 bg-background text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-jet-black">
            SoftNero — Servicios
          </h1>
          <p className="text-xl md:text-2xl font-light text-text-secondary tracking-tight leading-relaxed">
            Tecnología hecha para crecer tu negocio.
          </p>
        </div>
      </section>

      {/* SECCIÓN 1 — Servicios principales */}
      <section
        className="px-6 py-20 bg-background border-t border-card-border animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Servicio 1 */}
          <div className="flex flex-col items-start p-7 rounded-2xl hover:bg-muted-bg transition-colors duration-500">
            <div className="w-14 h-14 bg-muted-bg rounded-xl mb-6 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-foreground"
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
            <p className="text-text-secondary font-light mb-6 leading-relaxed">
              Plataformas completas diseñadas para la operación crítica de tu
              empresa.
            </p>
            <ul className="space-y-3 text-sm text-text-secondary font-medium">
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
          <div className="flex flex-col items-start p-7 rounded-2xl hover:bg-muted-bg transition-colors duration-500">
            <div className="w-14 h-14 bg-muted-bg rounded-xl mb-6 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-foreground"
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
            <p className="text-text-secondary font-light mb-6 leading-relaxed">
              Conectamos tus sistemas para que los datos fluyan sin
              interrupciones.
            </p>
            <ul className="space-y-3 text-sm text-text-secondary font-medium">
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
          <div className="flex flex-col items-start p-7 rounded-2xl hover:bg-muted-bg transition-colors duration-500">
            <div className="w-14 h-14 bg-muted-bg rounded-xl mb-6 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-foreground"
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
            <p className="text-text-secondary font-light mb-6 leading-relaxed">
              Presencia digital de alto impacto con rendimiento optimizado.
            </p>
            <ul className="space-y-3 text-sm text-text-secondary font-medium">
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
        className="px-6 py-24 bg-muted-bg animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-12">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Icons placeholders */}
            <span className="text-xl font-bold text-foreground">React</span>
            <span className="text-xl font-bold text-foreground">Next.js</span>
            <span className="text-xl font-bold text-foreground">Node.js</span>
            <span className="text-xl font-bold text-foreground">Express</span>
            <span className="text-xl font-bold text-foreground">MongoDB</span>
            <span className="text-xl font-bold text-foreground">AWS</span>
            <span className="text-xl font-bold text-foreground">Tailwind</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — Proceso de trabajo */}
      <section
        className="px-6 py-32 bg-background animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-16 text-center tracking-tight text-jet-black">
            Nuestro Proceso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-card-border -z-10"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center bg-background p-4">
              <div className="w-24 h-24 bg-background border border-card-border rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary shadow-sm">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight text-jet-black">
                Descubrimiento
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                Entendemos tu negocio, reglas, procesos y necesidades reales
                antes de escribir una sola línea de código.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center bg-background p-4">
              <div className="w-24 h-24 bg-background border border-card-border rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary shadow-sm">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight text-jet-black">
                Desarrollo Iterativo
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                Código limpio y estable con entregas continuas para que veas el
                progreso real de tu aplicación.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center bg-background p-4">
              <div className="w-24 h-24 bg-background border border-card-border rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary shadow-sm">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight text-jet-black">
                Entrega + Soporte
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                Despliegue a producción, configuración de servidores y soporte
                continuo para tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 bg-background border-t border-card-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-semibold text-jet-black">SoftNero</span>
          <div className="flex gap-8 text-sm text-text-secondary font-light">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              href="/contacto"
              className="hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <a href="#" className="hover:text-foreground transition-colors">
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
