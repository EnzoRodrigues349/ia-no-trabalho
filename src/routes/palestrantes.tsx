import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section } from "@/components/site/section";
import { SpeakerCard } from "@/components/site/speaker-card";
import { SPEAKERS } from "@/lib/event-data";

export const Route = createFileRoute("/palestrantes")({
  head: () => ({
    meta: [
      { title: "Palestrantes · Conferência IA no Trabalho 2030" },
      {
        name: "description",
        content: "Conheça os 8 especialistas que vão mostrar como usar IA no dia a dia do trabalho.",
      },
      { property: "og:title", content: "Palestrantes · Conferência IA no Trabalho 2030" },
      {
        property: "og:description",
        content: "Especialistas em IA generativa, engenharia de prompt, automação e produtividade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Palestrantes"
        title={
          <>
            Quem faz a IA <span className="text-gradient">funcionar no trabalho</span>
          </>
        }
        intro="Oito especialistas de empresas, pesquisa e educação que usam IA todos os dias e vão mostrar como você também pode."
      />
      <Section index="01" label="Line-up" tone="grid" title="Os 8 palestrantes">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((sp) => (
            <SpeakerCard key={sp.slug} speaker={sp} />
          ))}
        </div>
      </Section>
    </>
  );
}
