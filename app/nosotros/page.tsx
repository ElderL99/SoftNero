import Navbar from "../../src/components/Navbar";
import Link from "next/link";

export default function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />

      {/* HERO NOSOTROS */}
      <section className="px-6 py-32 md:py-48 max-w-3xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 text-jet-black">
          Sobre SoftNero
        </h1>
        <p className="text-xl md:text-2xl font-light text-text-secondary leading-relaxed mb-12">
          Tecnología desarrollada con precisión, claridad y enfoque empresarial.
        </p>

        {/* Foto Minimalista Placeholder */}
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-12 grayscale overflow-hidden relative">
          {/* Placeholder for user photo */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
            Foto
          </div>
        </div>

        <div className="space-y-8 text-lg text-text-secondary font-light leading-relaxed text-left">
          <p>
            SoftNero es un estudio de software especializado en construir
            sistemas empresariales modernos, centrados en eficiencia,
            automatización y rendimiento real.
          </p>
          <p>
            Me llamo{" "}
            <strong className="text-foreground font-medium">Adán Lugo</strong>,
            desarrollador full-stack con experiencia construyendo plataformas
            completas: CRMs, sistemas de préstamos, dashboards, APIs seguras,
            integraciones AWS y soluciones a medida.
          </p>
          <p>
            Mi enfoque es claro: crear tecnología sólida, limpia y que resuelva
            problemas reales de negocio. Cada proyecto se desarrolla con
            estándares modernos, comunicación constante y atención completa al
            detalle.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section
        className="px-6 py-24 bg-muted-bg border-t border-card-border animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12 text-center text-jet-black tracking-tight">
            Valores Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Código limpio y mantenible",
              "Arquitectura moderna",
              "Entrega puntual y transparente",
              "Soluciones a medida, no plantillas",
              "Relaciones a largo plazo con clientes",
            ].map((valor, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card-bg border border-card-border"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-text-secondary font-light">{valor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section
        className="px-6 py-24 bg-background animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-12 text-jet-black tracking-tight">
            Tecnologías que dominamos
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "AWS",
              "Tailwind",
              "JWT",
              "S3",
              "Integraciones",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-2 rounded-full bg-card-bg border border-card-border text-text-secondary text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-32 bg-muted-bg text-center border-t border-card-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight text-jet-black">
            Hablemos de tu proyecto
          </h2>
          <Link
            href="/contacto"
            className="px-10 py-4 bg-primary text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-1 inline-block"
          >
            Contactar ahora
          </Link>
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
              href="/servicios"
              className="hover:text-foreground transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </div>
          <span className="text-sm text-gray-400 font-light">
            © 2025 SoftNero Inc.
          </span>
        </div>
      </footer>
    </div>
  );
}
