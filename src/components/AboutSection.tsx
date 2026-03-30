// DESIGN: Sovereign Noir — Seção Sobre com layout assimétrico
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS } from "@/lib/constants";
import { Crown, Target, TrendingUp, Flame } from "lucide-react";

const pillars = [
  { icon: Crown, label: "Reinar", desc: "Governar sua vida com estratégia e coragem" },
  { icon: TrendingUp, label: "Enriquecer", desc: "Dominar finanças e multiplicar riqueza" },
  { icon: Target, label: "Identidade", desc: "Ativar sua essência e viver com propósito" },
  { icon: Flame, label: "Alta Performance", desc: "Ultraman e Ironman — corpo e mente no limite" },
];

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C9A84C]/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className={`mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C]">
              Quem é
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-tight">
            Hewerton
            <span className="gold-text"> Scheidegger</span>
          </h2>
        </div>

        {/* Content grid */}
        <div ref={contentRef} className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left — Photo card */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative">
              <div className="absolute -inset-3 border border-[#C9A84C]/20 rounded-[2rem]" />
              <img
                src={ASSETS.hewertonPhoto}
                alt="Hewerton Scheidegger"
                className="w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-[#0A0A0A] border border-[#C9A84C]/30 p-4 md:p-6 rounded-2xl z-10 shadow-2xl">
                <div className="font-serif text-3xl md:text-4xl font-bold gold-text">20+</div>
                <div className="font-sans text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/60 mt-1">Anos de<br />Experiência</div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-400 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-sans text-lg md:text-xl text-[#F5F0E8]/80 leading-relaxed mb-8">
              Empresário, mentor de negócios e autor dos livros{" "}
              <span className="text-[#C9A84C] font-medium">1000 Códigos de Sabedoria</span> e{" "}
              <span className="text-[#C9A84C] font-medium">Método 7D para Milhões em Vendas</span>.
            </p>

            <p className="font-sans text-base text-[#F5F0E8]/60 leading-relaxed mb-8">
              Casado quase 30 anos com Luciana, é pai de Lucas, Israel e João. Empresário, mentor de negócios e autor dos livros 1000 Códigos de Sabedoria e Método 7D para Milhões em Vendas. Advogado tributarista, contador e especialista em finanças, fundou e participou da construção de diversas empresas nas áreas de consultoria, tecnologia, finanças e gestão.
              Criador do Método REI, já treinou e mentorou milhares de pessoas em temas como prosperidade, riqueza, crescimento empresarial, mentalidade, alta performance e liderança de vida.
            </p>

            <p className="font-sans text-base text-[#F5F0E8]/60 leading-relaxed mb-12">
              Ultraman e Ironman, ensina que a prosperidade é a plenitude de vida, é ganhar sem perder, é tornar-se bem sucedido em todas as áreas para viver uma vida extraordinária com propósito.
            </p>

            {/* Pillars grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.label}
                  className="group flex items-start gap-4 p-5 bg-[#0A0A0A]/50 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#C9A84C]/30 group-hover:bg-[#C9A84C]/10 transition-colors duration-300">
                    <pillar.icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#F5F0E8] mb-1">{pillar.label}</h4>
                    <p className="font-sans text-sm text-[#F5F0E8]/50">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
