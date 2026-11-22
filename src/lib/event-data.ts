import marianaCosta from "@/assets/speakers/mariana-costa.jpg";
import rafaelOliveira from "@/assets/speakers/rafael-oliveira.jpg";
import julianaFerreira from "@/assets/speakers/juliana-ferreira.jpg";
import carlosMendes from "@/assets/speakers/carlos-mendes.jpg";
import alineSantos from "@/assets/speakers/aline-santos.jpg";
import brunoTakahashi from "@/assets/speakers/bruno-takahashi.jpg";
import patriciaNogueira from "@/assets/speakers/patricia-nogueira.jpg";
import diegoAlmeida from "@/assets/speakers/diego-almeida.jpg";

export const EVENT = {
  name: "Conferência IA no Trabalho",
  tagline: "Inteligência artificial para o seu dia a dia profissional",
  city: "São Paulo",
  datesLabel: "26 e 27 de outubro de 2030",
  shortDates: "26–27 OUT 2030",
  hours: "09h às 17h",
  startsAt: "2030-10-26T09:00:00-03:00",
} as const;

export const VENUE = {
  name: "Auditório InterContinental São Paulo",
  street: "Alameda Santos, 1123",
  district: "Jardim Paulista, São Paulo – SP",
  mapQuery: "InterContinental São Paulo, Alameda Santos, 1123, São Paulo - SP",
} as const;

export type Speaker = {
  slug: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
};

export const SPEAKERS: Speaker[] = [
  {
    slug: "juliana-ferreira",
    name: "Juliana Ferreira",
    role: "Diretora de Inovação",
    company: "Grupo Atlântico",
    bio: "Lidera a adoção de IA em mais de 40 áreas de negócio, do jurídico ao RH. Defende uma IA responsável, simples e com foco em pessoas.",
    photo: julianaFerreira,
  },
  {
    slug: "rafael-oliveira",
    name: "Rafael Oliveira",
    role: "Engenheiro de Prompt Sênior",
    company: "Lumen Labs",
    bio: "Já treinou mais de 5 mil profissionais a escrever prompts melhores. Transforma técnicas avançadas em receitas fáceis de aplicar.",
    photo: rafaelOliveira,
  },
  {
    slug: "aline-santos",
    name: "Aline Santos",
    role: "Pesquisadora em IA Generativa",
    company: "Instituto Horizonte",
    bio: "Doutora em ciência da computação, explica como os modelos de linguagem funcionam sem jargão e com muitos exemplos do cotidiano.",
    photo: alineSantos,
  },
  {
    slug: "mariana-costa",
    name: "Mariana Costa",
    role: "Head de IA Aplicada",
    company: "Nuvia Tecnologia",
    bio: "Criou assistentes de IA usados por equipes de marketing e vendas em toda a América Latina. Fala sobre conteúdo, criatividade e escala.",
    photo: marianaCosta,
  },
  {
    slug: "carlos-mendes",
    name: "Carlos Mendes",
    role: "CTO",
    company: "Vértice Digital",
    bio: "Há 20 anos no mercado de tecnologia, ajuda empresas a tirar a IA do slide e levá-la para a rotina real das equipes.",
    photo: carlosMendes,
  },
  {
    slug: "bruno-takahashi",
    name: "Bruno Takahashi",
    role: "Gerente de Produtividade",
    company: "Orbe Consultoria",
    bio: "Especialista em ferramentas de IA para escritório: planilhas, documentos, reuniões e e-mails. Testa tudo antes de recomendar.",
    photo: brunoTakahashi,
  },
  {
    slug: "patricia-nogueira",
    name: "Patrícia Nogueira",
    role: "Especialista em Automação",
    company: "Fluxo.ai",
    bio: "Monta automações sem código que economizam horas por semana. Mostra, ao vivo, como conectar a IA às ferramentas que você já usa.",
    photo: patriciaNogueira,
  },
  {
    slug: "diego-almeida",
    name: "Diego Almeida",
    role: "Fundador",
    company: "Prisma Educação",
    bio: "Educador e empreendedor, usa IA para acelerar aprendizado e treinamento corporativo. Acredita que todo profissional pode aprender IA.",
    photo: diegoAlmeida,
  },
];

export type SessionKind = "keynote" | "palestra" | "workshop" | "painel" | "pausa";

export type Session = {
  start: string;
  end: string;
  title: string;
  kind: SessionKind;
  speakers?: string[];
  description?: string;
};

export type EventDay = {
  id: "sabado" | "domingo";
  weekday: string;
  date: string;
  track: string;
  summary: string;
  sessions: Session[];
};

export const AGENDA: EventDay[] = [
  {
    id: "sabado",
    weekday: "Sábado",
    date: "26 de outubro",
    track: "IA Generativa e Engenharia de Prompt",
    summary:
      "Entenda como a IA generativa funciona e aprenda a conversar com ela para obter respostas úteis no trabalho.",
    sessions: [
      {
        start: "09:00",
        end: "09:45",
        kind: "keynote",
        title: "Abertura: o trabalho na era da IA generativa",
        speakers: ["juliana-ferreira"],
        description: "O que muda — e o que não muda — na rotina de quem trabalha com IA.",
      },
      {
        start: "09:45",
        end: "10:45",
        kind: "palestra",
        title: "Como a IA generativa funciona, sem jargão",
        speakers: ["aline-santos"],
        description: "Modelos de linguagem, limites e por que a IA às vezes erra.",
      },
      { start: "10:45", end: "11:00", kind: "pausa", title: "Coffee break e networking" },
      {
        start: "11:00",
        end: "12:00",
        kind: "palestra",
        title: "Engenharia de prompt: fundamentos para o dia a dia",
        speakers: ["rafael-oliveira"],
        description: "Contexto, papel, formato e exemplos: a estrutura de um bom prompt.",
      },
      { start: "12:00", end: "13:30", kind: "pausa", title: "Almoço" },
      {
        start: "13:30",
        end: "14:30",
        kind: "workshop",
        title: "Prompts que funcionam: e-mails, relatórios e apresentações",
        speakers: ["rafael-oliveira"],
        description: "Prática guiada com modelos de prompt prontos para levar para casa.",
      },
      {
        start: "14:30",
        end: "15:30",
        kind: "palestra",
        title: "IA generativa para conteúdo, marketing e comunicação",
        speakers: ["mariana-costa"],
        description: "Textos, imagens e ideias com a cara da sua marca.",
      },
      { start: "15:30", end: "15:45", kind: "pausa", title: "Coffee break" },
      {
        start: "15:45",
        end: "16:45",
        kind: "painel",
        title: "Painel: ética, privacidade e uso responsável da IA",
        speakers: ["juliana-ferreira", "carlos-mendes", "aline-santos"],
        description: "O que pode e o que não deve ir para uma IA no ambiente de trabalho.",
      },
      { start: "16:45", end: "17:00", kind: "keynote", title: "Encerramento do dia" },
    ],
  },
  {
    id: "domingo",
    weekday: "Domingo",
    date: "27 de outubro",
    track: "Principais ferramentas de IA na prática",
    summary:
      "Mão na massa com as ferramentas de IA mais usadas no mercado, aplicadas a tarefas reais do seu trabalho.",
    sessions: [
      {
        start: "09:00",
        end: "09:45",
        kind: "keynote",
        title: "Da curiosidade à produtividade: IA no seu fluxo de trabalho",
        speakers: ["carlos-mendes"],
        description: "Como escolher por onde começar e medir o ganho real de tempo.",
      },
      {
        start: "09:45",
        end: "10:45",
        kind: "palestra",
        title: "ChatGPT, Gemini, Claude e Copilot: qual usar em cada tarefa",
        speakers: ["bruno-takahashi"],
        description: "Comparativo prático, com pontos fortes e cuidados de cada ferramenta.",
      },
      { start: "10:45", end: "11:00", kind: "pausa", title: "Coffee break e networking" },
      {
        start: "11:00",
        end: "12:00",
        kind: "palestra",
        title: "Automação sem código: conectando a IA às suas ferramentas",
        speakers: ["patricia-nogueira"],
        description: "Fluxos automáticos para e-mail, planilhas, CRM e atendimento.",
      },
      { start: "12:00", end: "13:30", kind: "pausa", title: "Almoço" },
      {
        start: "13:30",
        end: "14:30",
        kind: "workshop",
        title: "IA em planilhas, documentos e reuniões",
        speakers: ["bruno-takahashi"],
        description: "Análises, resumos e atas automáticas em minutos.",
      },
      {
        start: "14:30",
        end: "15:30",
        kind: "palestra",
        title: "IA para aprender e ensinar no trabalho",
        speakers: ["diego-almeida"],
        description: "Treinamentos, onboarding e estudo acelerados com IA.",
      },
      { start: "15:30", end: "15:45", kind: "pausa", title: "Coffee break" },
      {
        start: "15:45",
        end: "16:45",
        kind: "workshop",
        title: "Mão na massa: monte seu assistente de IA em 60 minutos",
        speakers: ["patricia-nogueira", "mariana-costa"],
        description: "Você sai com um assistente personalizado para a sua função.",
      },
      { start: "16:45", end: "17:00", kind: "keynote", title: "Encerramento e sorteios" },
    ],
  },
];

export type Ticket = {
  id: "especial" | "vip";
  name: string;
  price: number;
  description: string;
  includes: string[];
  highlight: boolean;
};

export const TICKETS: Ticket[] = [
  {
    id: "especial",
    name: "Lote Especial",
    price: 590,
    description: "Acesso completo aos dois dias de conteúdo, ideal para quem quer aprender e aplicar.",
    includes: [
      "Acesso aos 2 dias (26 e 27/10)",
      "Todas as palestras, painéis e workshops",
      "Coffee breaks nos dois dias",
      "Material de apoio e modelos de prompt em PDF",
      "Certificado digital de participação",
      "Acesso às gravações por 30 dias",
    ],
    highlight: false,
  },
  {
    id: "vip",
    name: "VIP",
    price: 990,
    description: "A experiência completa, com mais conforto, conexões e conteúdo sem prazo para rever.",
    includes: [
      "Tudo do Lote Especial",
      "Assentos reservados nas primeiras fileiras",
      "Almoço incluso nos dois dias",
      "Credenciamento expresso e lounge VIP",
      "Meet & greet com os palestrantes",
      "Kit exclusivo do evento",
      "Acesso às gravações sem prazo de expiração",
    ],
    highlight: true,
  },
];

export const FAQ: { question: string; answer: string }[] = [
  {
    question: "Receberei certificado ao final?",
    answer:
      "Sim. Todos os participantes com check-in no evento recebem certificado digital por e-mail em até 7 dias após o encerramento.",
  },
  {
    question: "As palestras serão gravadas?",
    answer:
      "Sim, todas as palestras e painéis são gravados. Quem tem Lote Especial assiste por 30 dias; quem tem VIP, sem prazo de expiração.",
  },
  {
    question: "Posso transferir meu ingresso?",
    answer:
      "Sim, gratuitamente, até 5 dias antes do evento. Basta informar nome e e-mail do novo participante pelo nosso atendimento.",
  },
  {
    question: "Preciso saber programar ou entender de tecnologia?",
    answer:
      "Não. O conteúdo foi pensado para profissionais de todas as áreas, do iniciante a quem já usa IA no dia a dia.",
  },
  {
    question: "Preciso levar notebook?",
    answer:
      "Recomendamos levar notebook ou tablet para aproveitar os workshops práticos. As palestras podem ser acompanhadas sem equipamento.",
  },
  {
    question: "Posso comprar ingresso para apenas um dia?",
    answer: "Não. Os ingressos dão acesso aos dois dias, já que as trilhas se complementam.",
  },
  {
    question: "O almoço está incluso?",
    answer:
      "Está incluso no ingresso VIP. No Lote Especial, há coffee breaks e diversas opções de restaurantes a poucos passos do local.",
  },
  {
    question: "Posso cancelar e pedir reembolso?",
    answer:
      "Sim, em até 7 dias após a compra, com reembolso integral, desde que o pedido seja feito antes do início do evento.",
  },
  {
    question: "O local tem acessibilidade?",
    answer:
      "Sim. O auditório conta com acesso para cadeirantes, elevadores e banheiros adaptados. Avise-nos sobre outras necessidades.",
  },
];

export function getSpeaker(slug: string): Speaker | undefined {
  return SPEAKERS.find((s) => s.slug === slug);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
