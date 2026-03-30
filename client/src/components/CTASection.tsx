// DESIGN: Sovereign Noir — CTA final poderoso
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { METODO_REI_LINK, REINANTES_LINK, ASSETS } from "@/lib/constants";
import { ArrowRight, Crown } from "lucide-react";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Crown icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 flex items-center justify-center border border-[#C9A84C]/30 bg-[#C9A84C]/5">
              <Crown size={36} className="text-[#C9A84C]" />
            </div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-tight mb-6">
            Está Pronto Para{" "}
            <span className="gold-text">Reinar</span>
            <br />
            Na Sua Vida?
          </h2>

          <p className="font-sans text-lg md:text-xl text-[#F5F0E8]/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            Dê o primeiro passo rumo a uma vida de prosperidade, riqueza e propósito. Junte-se a milhares de pessoas que já transformaram suas vidas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={METODO_REI_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#0A0A0A] font-sans font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.02] group"
            >
              Método REI
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={REINANTES_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 border border-[#C9A84C]/40 text-[#C9A84C] font-sans font-medium text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] group"
            >
              Mentoria Reinantes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
