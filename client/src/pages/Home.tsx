// DESIGN: Sovereign Noir — Página principal com todas as seções
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import MetodoReiSection from "@/components/MetodoReiSection";
import BooksSection from "@/components/BooksSection";
import EbooksSection from "@/components/EbooksSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "O primeiro nome deve ter pelo menos 2 caracteres."),
  phone: z.string().min(10, "Telefone inválido."),
  email: z.string().email("Endereço de e-mail inválido."),
  profession: z.string().min(2, "Por favor, informe sua atividade profissional."),
  revenue: z.enum(["50K", "100K-500K", "500K-1000K", "1000K+"], {
    error: "Por favor, selecione seu faturamento.",
  }),
  message: z.string().optional(),
});

function ContactSection() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      phone: "",
      email: "",
      profession: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Enviar dados para o webhook
    fetch("https://services.leadconnectorhq.com/hooks/cYP1bCri3hF8P5t4cgbk/webhook-trigger/002fa605-cc53-4662-ac92-15e6206832ef", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "contact_form",
        ...values,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
          form.reset();
        } else {
          throw new Error("Erro ao enviar formulário");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar dados:", error);
        toast.error("Erro ao enviar formulário. Tente novamente.");
      });
  }

  return (
    <section id="contato" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl uppercase font-serif gold-text">
            Como posso te ajudar?
          </h2>
          <p className="mt-4 text-zinc-400">
            Preencha o formulário abaixo para nos dar mais contexto sobre você e seu negócio.
          </p>
        </div>

        <div className="bg-zinc-900/40 p-10 rounded-2xl border border-zinc-800/50 backdrop-blur-md shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-200">Primeiro nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" className="bg-zinc-950/50 border-zinc-800 text-white focus-visible:ring-[#C9A84C]/50 focus-visible:border-[#C9A84C]" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-200">Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" className="bg-zinc-950/50 border-zinc-800 text-white focus-visible:ring-[#C9A84C]/50 focus-visible:border-[#C9A84C]" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-200">E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" className="bg-zinc-950/50 border-zinc-800 text-white focus-visible:ring-[#C9A84C]/50 focus-visible:border-[#C9A84C]" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-200">Qual a sua atividade profissional?</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Médico, Advogado, Empresario..." className="bg-zinc-950/50 border-zinc-800 text-white focus-visible:ring-[#C9A84C]/50 focus-visible:border-[#C9A84C]" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="revenue"
                render={({ field }) => (
                  <FormItem className="space-y-4 pt-2">
                    <FormLabel className="text-zinc-200">Seu faturamento</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0 relative border border-zinc-800/60 p-3 rounded-lg hover:bg-zinc-800/30 transition-colors cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="50K" className="border-zinc-600 text-[#C9A84C] data-[state=checked]:border-[#C9A84C] data-[state=checked]:text-[#C9A84C] focus-visible:ring-[#C9A84C]" />
                          </FormControl>
                          <FormLabel className="font-normal text-zinc-300 w-full cursor-pointer">50K</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 relative border border-zinc-800/60 p-3 rounded-lg hover:bg-zinc-800/30 transition-colors cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="100K-500K" className="border-zinc-500 text-white data-[state=checked]:border-white data-[state=checked]:text-white focus-visible:ring-white" />
                          </FormControl>
                          <FormLabel className="font-normal text-zinc-300 w-full cursor-pointer">de 100K a 500K</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 relative border border-zinc-800/60 p-3 rounded-lg hover:bg-zinc-800/30 transition-colors cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="500K-1000K" className="border-zinc-500 text-white data-[state=checked]:border-white data-[state=checked]:text-white focus-visible:ring-white" />
                          </FormControl>
                          <FormLabel className="font-normal text-zinc-300 w-full cursor-pointer">de 500K a 1000K</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 relative border border-zinc-800/60 p-3 rounded-lg hover:bg-zinc-800/30 transition-colors cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="1000K+" className="border-zinc-500 text-white data-[state=checked]:border-white data-[state=checked]:text-white focus-visible:ring-white" />
                          </FormControl>
                          <FormLabel className="font-normal text-zinc-300 w-full cursor-pointer">acima de 1000K</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="pt-2">
                    <FormLabel className="text-zinc-200">Deixe aqui sua mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escreva como podemos ajudar você..."
                        className="min-h-[120px] bg-zinc-950/50 border-zinc-800 text-white resize-none focus-visible:ring-zinc-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#0A0A0A] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] uppercase font-bold tracking-wider transition-all h-12 mt-6">
                Enviar Mensagem <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection id="sobre" />
      <QuoteSection />
      <MetodoReiSection id="metodo-rei" />
      <BooksSection id="livros" />
      <EbooksSection id="ebooks" />
      <TestimonialsSection id="depoimentos" />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
