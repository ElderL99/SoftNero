import Navbar from "../../src/components/Navbar";
import Link from "next/link";

const articles = [
  {
    title:
      "Cómo un CRM hecho a medida puede ahorrar cientos de horas a tu empresa",
    category: "SaaS",
    date: "Nov 2025",
    slug: "crm-a-medida-ahorro-horas",
  },
  {
    title:
      "La importancia de un buen dashboard administrativo para tomar decisiones",
    category: "Finanzas",
    date: "Nov 2025",
    slug: "dashboard-administrativo-decisiones",
  },
  {
    title:
      "Por qué las empresas deben migrar a sistemas modernos basados en APIs",
    category: "APIs",
    date: "Oct 2025",
    slug: "migracion-sistemas-apis",
  },
  {
    title: "Automatización de procesos empresariales mediante Node.js y AWS",
    category: "Backend",
    date: "Oct 2025",
    slug: "automatizacion-nodejs-aws",
  },
  {
    title:
      "Cómo diseñamos un sistema de préstamos con contratos, flujos y pagos integrados",
    category: "Finanzas",
    date: "Sep 2025",
    slug: "sistema-prestamos-integrado",
  },
  {
    title:
      "Buenas prácticas para construir sistemas empresariales escalables (guía 2025)",
    category: "Web",
    date: "Sep 2025",
    slug: "buenas-practicas-sistemas-escalables",
  },
];

const categories = [
  "Todas",
  "APIs",
  "SaaS",
  "Finanzas",
  "Web",
  "Backend",
  "Integraciones",
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />

      {/* HEADER BLOG */}
      <section className="px-6 py-32 md:py-40 max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-jet-black">
          Blog Técnico
        </h1>
        <p className="text-xl md:text-2xl font-light text-text-secondary tracking-tight leading-relaxed">
          Artículos sobre desarrollo, arquitectura y eficiencia empresarial.
        </p>
      </section>

      {/* CATEGORÍAS */}
      <section
        className="px-6 pb-12 animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-card-bg border border-card-border text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* LISTA DE ARTÍCULOS */}
      <section
        className="px-6 pb-32 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {articles.map((article, index) => (
            <Link
              href={`/blog/${article.slug}`}
              key={index}
              className="block group"
            >
              <article className="p-8 rounded-2xl bg-card-bg border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-jet-black mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {article.title}
                </h2>
                <div className="flex items-center text-sm text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Leer artículo →
                </div>
              </article>
            </Link>
          ))}
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
              href="/nosotros"
              className="hover:text-foreground transition-colors"
            >
              Nosotros
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
