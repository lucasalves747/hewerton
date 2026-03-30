// DESIGN: Sovereign Noir — Seção de e-books gratuitos
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSETS, EBOOKS } from "@/lib/constants";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const ebooksFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  phone: z.string().min(8, "Informe um telefone válido"),
  email: z.string().email("E-mail inválido"),
  city: z.string().min(2, "Informe sua cidade"),
  country: z.string().min(2, "Informe seu país"),
  profession: z.string().min(2, "Informe sua atividade profissional"),
  revenue: z.enum(["<50k", "50k-100k", "100k-500k", "500k+"], {
    error: "Informe seu faturamento",
  }),
});

export default function EbooksSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState<string>("");

  const form = useForm<z.infer<typeof ebooksFormSchema>>({
    resolver: zodResolver(ebooksFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      profession: "",
      revenue: "<50k",
    },
  });

  function onSubmit(values: z.infer<typeof ebooksFormSchema>) {
    console.log("Solicitação de e-book", selectedEbook, values);
    
    // Enviar dados para o webhook
    fetch("https://services.leadconnectorhq.com/hooks/cYP1bCri3hF8P5t4cgbk/webhook-trigger/002fa605-cc53-4662-ac92-15e6206832ef", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ebook: selectedEbook,
        ...values,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Formulario enviado com sucesso! Em breve enviaremos o e-book.");
          form.reset();
          setIsDialogOpen(false);
        } else {
          throw new Error("Erro ao enviar formulário");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
        toast.error("Erro ao enviar formulário. Tente novamente.");
      });
  }

  function handleOpenRequest(ebookTitle: string) {
    setSelectedEbook(ebookTitle);
    setIsDialogOpen(true);
  }

  return (
    <section id="ebooks" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#C9A84C]/15 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Mockup */}
          <div className={`lg:col-span-5 transition-all duration-700 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A84C]/10 to-transparent blur-2xl" />
              <img
                src={ASSETS.ebookMockup}
                alt="E-books gratuitos"
                className="relative w-full"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-7">
            <div ref={titleRef} className={`mb-12 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="section-divider" />
                <span className="font-sans text-xs tracking-[0.4em] uppercase text-[#C9A84C]">
                  Conteúdo Gratuito
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight mb-4">
                E-books{" "}
                <span className="gold-text">Gratuitos</span>
              </h2>
              <p className="font-sans text-lg text-[#F5F0E8]/50">
                Baixe agora materiais exclusivos e comece sua jornada de transformação.
              </p>
            </div>

            <div ref={contentRef} className="space-y-6">
              {EBOOKS.map((ebook, i) => (
                <div
                  key={ebook.title}
                  className={`group flex items-start gap-5 p-6 bg-[#111111]/80 border border-[#C9A84C]/10 hover:border-[#C9A84C]/25 transition-all duration-500 ${
                    contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#C9A84C]/10 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/15 transition-colors">
                    <FileText size={20} className="text-[#C9A84C]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-[#F5F0E8] mb-1">
                      {ebook.title}
                    </h4>
                    <p className="font-sans text-sm text-[#F5F0E8]/45 leading-relaxed mb-3">
                      {ebook.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleOpenRequest(ebook.title)}
                      className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-[#C9A84C] hover:text-[#E8D48B] transition-colors"
                    >
                      <Download size={14} />
                      Baixar Gratuitamente
                      <span className="w-0 group-hover:w-4 h-px bg-[#C9A84C] transition-all duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar e-book: {selectedEbook}</DialogTitle>
            <DialogDescription>
              Preencha seus dados para receber o link de download e acesso ao material.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Seu nome" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" placeholder="(11) 99999-9999" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="seu@email.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Cidade" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>País</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="País" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Atividade profissional</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Ex: Empreendedor, Advogado" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="revenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Faturamento</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid grid-cols-2 gap-2"
                      >
                        <FormItem className="p-2 border rounded">
                          <FormControl>
                            <RadioGroupItem value="<50k" />
                          </FormControl>
                          <FormLabel>Menos de 50K</FormLabel>
                        </FormItem>
                        <FormItem className="p-2 border rounded">
                          <FormControl>
                            <RadioGroupItem value="50k-100k" />
                          </FormControl>
                          <FormLabel>50K a 100K</FormLabel>
                        </FormItem>
                        <FormItem className="p-2 border rounded">
                          <FormControl>
                            <RadioGroupItem value="100k-500k" />
                          </FormControl>
                          <FormLabel>100K a 500K</FormLabel>
                        </FormItem>
                        <FormItem className="p-2 border rounded">
                          <FormControl>
                            <RadioGroupItem value="500k+" />
                          </FormControl>
                          <FormLabel>Acima de 500K</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" className="w-full bg-[#C9A84C] text-black">Enviar e baixar</Button>
              </DialogFooter>
            </form>
          </Form>

          <DialogClose asChild>
            <button className="absolute top-3 right-3 text-zinc-400 hover:text-white"></button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
