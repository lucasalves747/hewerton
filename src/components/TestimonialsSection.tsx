// DESIGN: Sovereign Noir — Depoimentos com aspas douradas enormes
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TESTIMONIALS } from "@/lib/constants";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => goTo((current + 1) % TESTIMONIALS.length);
  const prev = () => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="depoimentos" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://assets.cdn.filesafe.space/cYP1bCri3hF8P5t4cgbk/media/69c4aca6e24981562c01cdc5.png"
          alt=""
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A] opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C]">
              Depoimentos
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-tight">
            Vidas{" "}
            <span className="gold-text">Transformadas</span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Big quote */}
            <Quote size={80} className="absolute -top-4 -left-4 text-[#C9A84C]/10 rotate-180" />

            {/* Content */}
            <div className="relative min-h-[280px] flex items-center">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                >
                  <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#F5F0E8]/90 leading-relaxed italic mb-10 px-8">
                    "{testimonial.text}"
                  </p>

                  <div className="flex flex-col items-center">
                    {/* Gold line */}
                    <div className="w-12 h-px bg-[#C9A84C] mb-4" />
                    <h4 className="font-serif text-lg font-semibold text-[#C9A84C]">
                      {testimonial.name}
                    </h4>
                    <p className="font-sans text-sm text-[#F5F0E8]/40 tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} className="text-[#C9A84C]" />
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-[2px] transition-all duration-300 ${i === current ? "w-8 bg-[#C9A84C]" : "w-4 bg-[#C9A84C]/20 hover:bg-[#C9A84C]/40"
                      }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300"
                aria-label="Próximo"
              >
                <ChevronRight size={20} className="text-[#C9A84C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
