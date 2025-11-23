import Navbar from "../../../src/components/Navbar";
import Link from "next/link";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />

      <article className="px-6 py-32 md:py-40 max-w-3xl mx-auto animate-fade-in">
        <Link
          href="/blog"
          className="text-sm text-text-secondary hover:text-primary mb-8 inline-block transition-colors"
        >
          ← Volver al blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-card-bg border border-card-border text-xs font-medium text-primary">
            Tecnología
          </span>
          <span className="text-sm text-gray-400">Nov 2025</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-jet-black tracking-tight mb-8 leading-tight">
          {params?.slug
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ") || "Artículo"}
        </h1>

        <div className="prose prose-lg prose-gray max-w-none">
          <p className="lead text-xl text-text-secondary font-light leading-relaxed mb-8">
            Este es un artículo de ejemplo. En una implementación real, aquí se
            cargaría el contenido Markdown o MDX correspondiente al slug:{" "}
            <code className="text-sm bg-gray-100 px-2 py-1 rounded">
              {params.slug}
            </code>
            .
          </p>

          <h2 className="text-2xl font-semibold text-jet-black mt-12 mb-6">
            Introducción
          </h2>
          <p className="text-text-secondary font-light leading-relaxed mb-6">
            Los sistemas empresariales modernos requieren una arquitectura
            robusta. No se trata solo de escribir código, sino de entender el
            flujo de datos y cómo cada componente interactúa con el negocio.
          </p>

          <h3 className="text-xl font-semibold text-jet-black mt-8 mb-4">
            Puntos Clave
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary font-light mb-8">
            <li>Escalabilidad horizontal vs vertical.</li>
            <li>Seguridad en la capa de transporte.</li>
            <li>Experiencia de usuario en paneles administrativos.</li>
          </ul>

          <div className="bg-card-bg border border-card-border p-6 rounded-xl my-8">
            <h4 className="text-lg font-medium text-jet-black mb-2">
              Nota del desarrollador
            </h4>
            <p className="text-sm text-text-secondary">
              Siempre prioriza la legibilidad del código sobre la optimización
              prematura.
            </p>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="px-6 py-12 bg-background border-t border-card-border mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-semibold text-jet-black">SoftNero</span>
          <div className="flex gap-8 text-sm text-text-secondary font-light">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="hover:text-foreground transition-colors"
            >
              Contacto
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
