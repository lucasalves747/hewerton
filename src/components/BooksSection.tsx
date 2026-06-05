// DESIGN: Sovereign Noir — Seção de livros com cards premium
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS, BOOKS } from "@/lib/constants";
import { ShoppingCart, BookOpen, X } from "lucide-react";

export default function BooksSection() {
  const [selectedBook, setSelectedBook] = useState<typeof BOOKS[0] | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: booksRef, isVisible: booksVisible } = useScrollAnimation();

  function handleBuyClick(book: typeof BOOKS[number]) {
    if (book.title === "Método 7D para Milhões em Vendas") {
      window.location.href = book.link;
      return;
    }

    setSelectedBook(book);
  }

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


                  </div>
                  <button
                    onClick={() => handleBuyClick(book)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#0A0A0A] font-sans font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] hover:scale-[1.02]"
                  >
                    <ShoppingCart size={16} />
                    Comprar
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Compra */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm"
            onClick={() => setSelectedBook(null)}
          />
          <div className="relative bg-[#111111] border border-[#C9A84C]/20 p-8 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 text-[#F5F0E8]/50 hover:text-[#C9A84C] transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-2 pr-8">
              Onde deseja comprar?
            </h3>
            <p className="font-sans text-[#F5F0E8]/60 mb-8 text-sm">
              {selectedBook.title}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={selectedBook.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#111111] border border-[#C9A84C]/20 text-[#F5F0E8] font-sans font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/5 hover:scale-[1.02]"
              >
                Amazon USA
              </a>
              <a
                href={selectedBook.mercadoLivreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#111111] border border-[#C9A84C]/20 text-[#F5F0E8] font-sans font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/5 hover:scale-[1.02]"
              >
                Mercado Livre
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
