import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "@/components/Navbar";
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

const formSchema = z.object({
  firstName: z.string().min(2, "O primeiro nome deve ter pelo menos 2 caracteres."),
  phone: z.string().min(10, "Telefone inválido."),
  email: z.string().email("Endereço de e-mail inválido."),
  profession: z.string().min(2, "Por favor, informe sua atividade profissional."),
  revenue: z.enum(["50K", "100K-500K", "500K-1000K", "1000K+"], {
    error: "Por favor, selecione seu faturamento.",
  }),
  message: z.string().optional(),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      phone: "",
      email: "",
      profession: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // You can send this logic to a webhook or API route later if needed
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    console.log("Form data:", values);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full space-y-8 bg-zinc-900/40 p-10 rounded-2xl border border-zinc-800/50 backdrop-blur-md shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl uppercase font-serif gold-text">
              Como posso te ajudar?
            </h2>
            <p className="mt-4 text-zinc-400">
              Preencha o formulário abaixo para nos dar mais contexto sobre você e seu negócio.
            </p>
          </div>

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
      </main>
      <Footer />
    </div>
  );
}
