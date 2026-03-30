// ============================================================
// DESIGN: Sovereign Noir — Estética Regal Contemporânea
// Paleta: Preto #0A0A0A | Dourado #C9A84C | Branco #F5F0E8
// Tipografia: Playfair Display (serif) + Outfit (sans-serif)
// ============================================================

export const ASSETS = {
  hewertonPhoto: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046811209/mRpRYtXUVh4QuL7m5LcykS/hewerton-hero_ae2aa8fe.webp",
  heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046811209/mRpRYtXUVh4QuL7m5LcykS/hero-bg-LadCrzXaeCZUrVoxW8rpKZ.webp",
  booksBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046811209/mRpRYtXUVh4QuL7m5LcykS/books-section-bg-6H5R59us6iyU7RRBVAvDvV.webp",
  mentoriaBg: "https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6996049aad0053ca5c97d8af.png",
  crownIcon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046811209/mRpRYtXUVh4QuL7m5LcykS/crown-icon-Y5A7L8r8reGXC2RFvFUh7n.webp",
  ebookMockup: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046811209/mRpRYtXUVh4QuL7m5LcykS/ebook-mockup-h2f68wdKDqTELGs8CjrozW.webp",
} as const;

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método REI", href: "#metodo-rei" },
  { label: "Livros", href: "#livros" },
  { label: "E-books", href: "#ebooks" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "/contato" },
] as const;

export const STATS = [
  { value: 1000, suffix: "+", label: "Códigos de Sabedoria" },
  { value: 5000, suffix: "+", label: "Vidas Transformadas" },
  { value: 12, suffix: "", label: "Áreas da Vida" },
  { value: 20, suffix: "+", label: "Anos de Experiência" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Lucas Loureiro",
    role: "Empresário",
    text: "O Método REI mudou completamente a minha visão sobre prosperidade. Eu entrei perdido e saí sabendo exatamente onde quero chegar. A conexão com Deus e a clareza financeira transformaram meu dia a dia.",
  },
  {
    name: "Ana Carolina Mendes",
    role: "Empreendedora",
    text: "Com as ferramentas práticas do Método, hoje gerencio meu negócio e cuido da minha família com muito mais equilíbrio. A mentoria do Hewerton é transformadora.",
  },
  {
    name: "Roberto Figueiredo",
    role: "Consultor Financeiro",
    text: "Hewerton não ensina teoria — ele vive o que ensina. A mentoria me deu ferramentas práticas para multiplicar minha renda e encontrar propósito no que faço.",
  },
  {
    name: "Mariana Santos",
    role: "Advogada e Empresária",
    text: "Participar do Reinantes foi a melhor decisão que tomei. Em 6 meses, transformei minha relação com dinheiro, meu casamento e minha saúde. Hewerton é um mentor extraordinário.",
  },
  {
    name: "Felipe Augusto",
    role: "Empresário do Setor de Tecnologia",
    text: "A visão de prosperidade integral que o Hewerton ensina é única. Não se trata apenas de dinheiro, mas de reinar em todas as áreas da vida. Recomendo a todos.",
  },
] as const;

export const BOOKS = [
  {
    title: "1000 Códigos de Sabedoria",
    description: "Uma coletânea poderosa de princípios e códigos que transformam a mentalidade e direcionam para uma vida de prosperidade, sabedoria e propósito.",
    price: "R$ 79,90",
    link: "#",
  },
  {
    title: "Método 7D para Milhões em Vendas",
    description: "O guia definitivo para dominar as 7 dimensões das vendas de alto impacto e construir um negócio que gera milhões com estratégia e consistência.",
    price: "R$ 89,90",
    link: "#",
  },
] as const;

export const EBOOKS = [
  {
    title: "Guia da Prosperidade",
    description: "Descubra os princípios fundamentais para desbloquear a prosperidade em todas as áreas da sua vida.",
    downloadLink: "#",
  },
  {
    title: "Mentalidade de Riqueza",
    description: "Aprenda a reprogramar sua mente para atrair abundância e construir riqueza de forma sustentável.",
    downloadLink: "#",
  },
  {
    title: "Os 12 Pilares da Vida Extraordinária",
    description: "Um guia prático para desenvolver equilíbrio e excelência nas 12 áreas essenciais da vida.",
    downloadLink: "#",
  },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/hewertonscheidegger/",
  youtube: "#",
  linkedin: "#",
  facebook: "#",
} as const;

export const METODO_REI_LINK = "https://metodorei.com/";
export const REINANTES_LINK = "https://reinantes.com/";
