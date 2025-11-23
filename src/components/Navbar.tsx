"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup if component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 border-b border-black/10 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-all"
          >
            <Image
              src={Logo}
              alt="SoftNero Logo"
              className="hidden sm:block h-16 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/servicios", label: "Servicios" },
              { href: "/nosotros", label: "Nosotros" },
              { href: "/blog", label: "Blog" },
              { href: "/contacto", label: "Contacto" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contacto"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-[2px]"
            >
              Agendar llamada
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          >
            {/* Apple-style minimal icon */}
            <span
              className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs 
              bg-white/90 backdrop-blur-2xl supports-backdrop-filter:bg-white/60
              shadow-xl border-l border-black/10
              transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-center items-center flex-col p-6 pt-24 gap-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src={Logo}
              alt="SoftNero Logo"
              className="flex justify-center items-center size-40 rounded-full mb-4 border border-primary/50"
            />
          </Link>

          {[
            { href: "/", label: "Home" },
            { href: "/servicios", label: "Servicios" },
            { href: "/nosotros", label: "Nosotros" },
            { href: "/blog", label: "Blog" },
            { href: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
