import Navbar from "../../src/components/Navbar";
import Link from "next/link";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />

      {/* HERO CONTACTO */}
      <section className="px-6 py-24 md:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-jet-black">
            Ponte en contacto
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-500 tracking-tight">
            SoftNero está listo para construir tu próximo sistema.
          </p>
        </div>
      </section>

      {/* FORMULARIO + INFO */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Formulario Minimal */}
          <div className="flex flex-col">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Info Rápida */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-jet-black">
                Contacto Directo
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:contacto@softnero.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-light">
                    contacto@softnero.com
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-light">+52 55 1234 5678</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-jet-black">
                Horario de Atención
              </h3>
              <p className="text-gray-500 font-light">
                Lunes a Sábado
                <br />
                9:00 am – 6:00 pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 bg-[#f8f8f8] text-center mt-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">
            ¿Listo para comenzar?
          </h2>
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
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link
              href="/servicios"
              className="hover:text-black transition-colors"
            >
              Servicios
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
