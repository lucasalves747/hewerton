// DESIGN: Sovereign Noir — Frase de impacto em destaque
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function QuoteSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
      <div className="absolute inset-0 border-y border-[#C9A84C]/10" />

      {/* Top Yellow Glow (Soft Gradient from Drawing) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-4xl h-[400px] bg-[#eeba2dff]/15 blur-[100px] rounded-[100%] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A84C]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#F5F0E8] leading-snug italic">
            "Prosperidade é a plenitude de vida.{" "}
            <span className="gold-text">É ganhar sem perder.</span>{" "}
            É tornar-se bem sucedido em todas as áreas para viver uma vida extraordinária com propósito."
          </blockquote>

          <div className="mt-10 flex flex-col items-center">
            <div className="w-12 h-px bg-[#C9A84C] mb-4" />
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-[#C9A84C]">
              Hewerton Scheidegger
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
