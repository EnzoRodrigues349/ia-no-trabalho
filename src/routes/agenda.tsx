import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { AgendaView } from "@/components/site/agenda-view";
import { PageHero, Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda · Conferência IA no Trabalho 2030" },
      {
        name: "description",
        content:
          "Programação completa: sábado com IA generativa e engenharia de prompt, domingo com ferramentas de IA na prática. Das 09h às 17h.",
      },
      { property: "og:title", content: "Agenda · Conferência IA no Trabalho 2030" },
      {
        property: "og:description",
        content: "Duas trilhas, 09h às 17h, 26 e 27 de outubro de 2030 em São Paulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgendaPage,
});

function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda · 26 e 27 de outubro"
        title={
          <>
            Dois dias, <span className="text-gradient">duas trilhas</span>
          </>
        }
        intro="Sábado é dia de entender a IA generativa e dominar a engenharia de prompt. Domingo é dia de colocar as principais ferramentas para trabalhar. Sempre das 09h às 17h."
      />
      <Section index="01" label="Programação" tone="grid" title="Escolha o dia">
        <AgendaView />
        <div className="mt-12 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/ingressos">
              Quero participar <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
