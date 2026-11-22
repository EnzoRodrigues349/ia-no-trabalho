import { createFileRoute } from "@tanstack/react-router";

import { FaqList } from "@/components/site/faq-list";
import { PageHero, Section } from "@/components/site/section";
import { TicketCards } from "@/components/site/ticket-cards";

export const Route = createFileRoute("/ingressos")({
  head: () => ({
    meta: [
      { title: "Ingressos · Conferência IA no Trabalho 2030" },
      {
        name: "description",
        content:
          "Lote Essencial por R$ 290, Lote Especial por R$ 590 ou VIP por R$ 990. Acesso aos dois dias da Conferência IA no Trabalho.",
      },
      { property: "og:title", content: "Ingressos · Conferência IA no Trabalho 2030" },
      {
        property: "og:description",
        content: "Lote Essencial R$ 290 · Lote Especial R$ 590 · VIP R$ 990. Vagas limitadas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TicketsPage,
});

function TicketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ingressos"
        title={
          <>
            Garanta seu lugar na <span className="text-gradient">IA no Trabalho</span>
          </>
        }
        intro="Os três ingressos dão acesso aos dois dias de evento, 26 e 27 de outubro de 2030, das 09h às 17h."
      />
      <Section index="01" label="Categorias" tone="grid" title="Escolha sua experiência">
        <TicketCards />
      </Section>
      <Section index="02" label="Dúvidas" title="Antes de comprar">
        <FaqList limit={4} />
      </Section>
    </>
  );
}
