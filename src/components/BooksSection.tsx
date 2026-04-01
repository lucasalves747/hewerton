// DESIGN: Sovereign Noir — Seção de livros com cards premium
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS, BOOKS } from "@/lib/constants";
import { ShoppingCart, BookOpen } from "lucide-react";

export default function BooksSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: booksRef, isVisible: booksVisible } = useScrollAnimation();

  return (
    <section id="livros" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.booksBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />
        
        {/* Bookshelf Spotlight Glow */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-5xl h-[600px] bg-[#eeba2d]/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className={`mb-20 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="font-sans text-xs tracking-[0.4em] uppercase gold-text">
              Publicações
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold gold-text leading-tight w-fit">
            Livros que Transformam
          </h2>
          <p className="font-sans text-lg text-[#F5F0E8]/50 mt-4 max-w-2xl">
            Conhecimento profundo condensado em obras que vão revolucionar sua mentalidade e seus resultados.
          </p>
        </div>

        {/* Books grid */}
        <div ref={booksRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {BOOKS.map((book, i) => (
            <div
              key={book.title}
              className={`group relative bg-[#111111] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-500 overflow-hidden ${booksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#E8D48B] to-[#C9A84C]" />

              <div className="p-8 md:p-10">
                {/* Book icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-[#C9A84C]/10 border border-[#C9A84C]/20 mb-8">
                  <BookOpen size={28} className="text-[#C9A84C]" />
                </div>

                {/* Number */}
                <div className="absolute top-8 right-8 font-serif text-7xl font-bold text-[#C9A84C]/[0.05]">
                  0{i + 1}
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#F5F0E8] mb-4 leading-tight">
                  {book.title}
                </h3>

                <p className="font-sans text-[#F5F0E8]/50 leading-relaxed mb-8">
                  {book.description}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-[#C9A84C]/10">
                  <div>
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/40">A partir de</span>
                    <div className="font-serif text-2xl font-bold gold-text">{book.price}</div>
                  </div>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#0A0A0A] font-sans font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] hover:scale-[1.02]"
                  >
                    <ShoppingCart size={16} />
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
