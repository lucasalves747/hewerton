// DESIGN: Sovereign Noir — Hero monumental com foto como protagonista
import { ASSETS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden noise-overlay">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* Hewerton Photo — right side */}
      <div className="absolute right-0 bottom-0 h-[85vh] w-[45%] hidden lg:block">
        <img
          src={ASSETS.hewertonPhoto}
          alt="Hewerton Scheidegger"
          className="h-full w-full object-cover object-top rounded-tl-[4rem]"
          style={{ maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 to-transparent rounded-tl-[4rem]" />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-32 w-full">
        <div className="max-w-2xl">
          {/* Tag line */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C]">
              Prosperidade &bull; Riqueza &bull; Propósito
            </span>
          </div>

          {/* Name */}
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-[#F5F0E8]">HEWERTON</span>
            <br />
            <span className="gold-text">SCHEIDEGGER</span>
          </h1>

          {/* Mobile Photo (Shown below name) */}
          <div className="lg:hidden mt-6 mb-8 flex justify-center">
            <div className="w-64 h-80 relative">
              <img
                src={ASSETS.hewertonPhoto}
                alt="Hewerton Scheidegger"
                className="w-full h-full object-cover object-top rounded-t-[3rem]"
                style={{ maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)" }}
              />
            </div>
          </div>

          {/* Subtitle */}
          <p
            className={`font-sans text-lg md:text-xl text-[#F5F0E8]/70 leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Empresário, mentor de negócios e criador do{" "}
            <span className="text-[#C9A84C] font-medium">Método REI</span>.
            Ensinando que prosperidade é a plenitude de vida.
          </p>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="https://metodorei.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#0A0A0A] font-sans font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:scale-[1.02]"
            >
              Conheça o Método REI
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#C9A84C]/40 text-[#C9A84C] font-sans font-medium text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-[#C9A84C]/50" size={28} />
      </div>
    </section>
  );
}
