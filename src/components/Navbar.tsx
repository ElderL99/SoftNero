import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src={Logo}
              alt="SoftNero Logo"
              className="h-30 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/contacto"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
            >
              Agendar llamada
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
