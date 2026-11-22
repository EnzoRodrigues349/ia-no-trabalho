import { createFileRoute, Link } from "@tanstack/react-router";

import { FaqList } from "@/components/site/faq-list";
import { PageHero, Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes · Conferência IA no Trabalho 2030" },
      {
        name: "description",
        content: "Certificado, gravações, transferência de ingresso e outras dúvidas sobre a Conferência IA no Trabalho.",
      },
      { property: "og:title", content: "FAQ · Conferência IA no Trabalho 2030" },
      {
        property: "og:description",
        content: "Respostas objetivas sobre certificado, gravações, ingressos e local.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Perguntas <span className="text-gradient">frequentes</span>
          </>
        }
        intro="Respostas objetivas para as dúvidas mais comuns sobre o evento."
      />
      <Section index="01" label="Dúvidas" tone="grid" title="Tudo o que você precisa saber">
        <div className="mx-auto max-w-3xl">
          <FaqList />
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
            <p className="font-display text-lg font-semibold">Pronto para participar?</p>
            <Button asChild variant="hero" size="xl" className="mt-5">
              <Link to="/ingressos">Ver ingressos</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
