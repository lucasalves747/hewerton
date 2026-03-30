// DESIGN: Sovereign Noir — Barra de números de impacto com contadores animados
import { STATS } from "@/lib/constants";
import { useCountUp } from "@/hooks/useScrollAnimation";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <div ref={ref} className="text-center px-4 py-8">
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold gold-text mb-3">
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#F5F0E8]/50">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-8 border-y border-[#C9A84C]/10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A84C]/[0.03] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#C9A84C]/10">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
