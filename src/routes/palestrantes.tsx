import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero, Section } from "@/components/site/section";
import { SpeakerCard } from "@/components/site/speaker-card";
import { Button } from "@/components/ui/button";
import { PROJECTS, SPEAKERS } from "@/lib/event-data";

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

      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary bg-card-vip p-10 shadow-glow sm:p-14">
            <div className="glow-orb pointer-events-none absolute -right-20 -top-20 size-96" />
            <p className="relative font-display text-xs uppercase tracking-[0.25em] text-accent">
              Galeria de projetos
            </p>
            <h2 className="relative mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
              Cada palestrante leva um <span className="text-gradient">projeto</span> para o palco
            </h2>
            <p className="relative mt-4 max-w-xl text-lg text-muted-foreground">
              Veja os {PROJECTS.length} projetos que serão criados e demonstrados ao vivo durante o evento.
            </p>
            <div className="relative mt-8">
              <Button asChild variant="hero" size="xl">
                <Link to="/projetos">
                  Ver a galeria de projetos <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
