// DESIGN: Sovereign Noir — Navbar fixa com transparência e blur
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#C9A84C]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors duration-300">
              HEWERTON
            </span>
            <span className="hidden sm:block w-px h-6 bg-[#C9A84C]/40" />
            <span className="hidden sm:block font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C]/70">
              Scheidegger
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-sans text-sm tracking-[0.15em] uppercase text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A84C] after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#C9A84C]/10 px-4 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block font-sans text-sm tracking-[0.15em] uppercase text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300 py-2 w-full text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
