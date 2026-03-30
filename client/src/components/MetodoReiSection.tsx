// DESIGN: Sovereign Noir — Seção Método REI com imagem de fundo cinematográfica
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS, METODO_REI_LINK } from "@/lib/constants";
import { Crown, Gem, Fingerprint, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Crown,
    title: "REINAR",
    description: "Aprenda a governar sua vida com estratégia e coragem. Seja o verdadeiro protagonista da sua história.",
  },
  {
    icon: Gem,
    title: "ENRIQUECER",
    description: "Domine suas finanças com técnicas práticas e multiplique sua renda criando um legado de riqueza.",
  },
  {
    icon: Fingerprint,
    title: "IDENTIDADE",
    description: "Ative sua verdadeira essência, fortalecendo sua espiritualidade para viver plenamente de acordo com seu propósito.",
  },
];

export default function MetodoReiSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="metodo-rei" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background with slight noise */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.mentoriaBg}
          alt=""
          className="w-full h-full object-cover opacity-70 grayscale"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C]">
              Metodologia Exclusiva
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-tight mb-6">
            O Método{" "}
            <span className="gold-text">REI</span>
          </h2>
          <p className="font-sans text-lg text-[#F5F0E8]/60 leading-relaxed">
            Uma metodologia inovadora que conecta e desenvolve os três pilares fundamentais para você reinar em todas as áreas da sua vida.
          </p>
        </div>

        {/* Three pillars */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:border-[#C9A84C]/50 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_0_rgba(201,168,76,0.15)] transition-all duration-500 overflow-hidden ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Glossy top-edge reflection for realism */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] pointer-events-none" />

              {/* Icon */}
              <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg mb-6 group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]/50 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] group-hover:-translate-y-1 transition-all duration-500">
                <pillar.icon size={26} className="text-[#C9A84C]" />
              </div>

              {/* Number */}
              <div className="absolute top-6 right-8 font-serif text-6xl font-bold text-[#C9A84C]/[0.06]">
                0{i + 1}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-4 tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-sans text-[#F5F0E8]/50 leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-500 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-serif text-2xl md:text-3xl text-[#F5F0E8] mb-8 italic">
            "Com o Método REI, você não apenas vive — você <span className="gold-text">reina</span>."
          </p>
          <a
            href={METODO_REI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#0A0A0A] font-sans font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.02] group"
          >
            Inscreva-se no Método REI
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
