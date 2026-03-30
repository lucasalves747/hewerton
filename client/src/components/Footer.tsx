// DESIGN: Sovereign Noir — Footer elegante e minimalista
import { SOCIAL_LINKS, NAV_LINKS, METODO_REI_LINK } from "@/lib/constants";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

const socialIcons = [
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-2">
              HEWERTON
            </h3>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C]/70 mb-6">
              Scheidegger
            </p>
            <p className="font-sans text-sm text-[#F5F0E8]/40 leading-relaxed">
              Empresário, mentor de negócios e criador do Método REI. Prosperidade é a plenitude de vida.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-6">
              Navegação
            </h4>
            <div className="space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-sans text-sm text-[#F5F0E8]/50 hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={METODO_REI_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm text-[#C9A84C] hover:text-[#E8D48B] transition-colors duration-300"
              >
                Método REI &rarr;
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-6">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-[#F5F0E8]/60 hover:text-[#C9A84C]" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
                Contato
              </h4>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-[#F5F0E8]/50 hover:text-[#C9A84C] transition-colors"
              >
                @hewertonscheidegger
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#C9A84C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#F5F0E8]/30">
            &copy; {new Date().getFullYear()} Hewerton Scheidegger. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-[#F5F0E8]/20">
            Prosperidade &bull; Riqueza &bull; Propósito
          </p>
        </div>
      </div>
    </footer>
  );
}
