import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { PageHero, Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { EVENT, PROJECTS, getSpeaker } from "@/lib/event-data";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos · Conferência IA no Trabalho 2030" },
      {
        name: "description",
        content:
          "Galeria dos 8 projetos criados no evento pelos palestrantes: assistente de IA, automações, biblioteca de prompts, atas automáticas e mais.",
      },
      { property: "og:title", content: "Projetos · Conferência IA no Trabalho 2030" },
      {
        property: "og:description",
        content: "Oito projetos práticos, um por palestrante, demonstrados ao vivo nos dois dias de evento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const FILTERS = [
  { id: "todos", label: "Todos os projetos" },
  { id: "sabado", label: "Sábado · IA Generativa" },
  { id: "domingo", label: "Domingo · Ferramentas" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

function ProjectsPage() {
  const [filter, setFilter] = useState<FilterId>("todos");
  const shown = PROJECTS.filter((p) => filter === "todos" || p.day === filter);

  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title={
          <>
            O que nasce <span className="text-gradient">no palco</span>
          </>
        }
        intro={`Cada palestrante desenvolve um projeto durante o evento e mostra ele funcionando ao vivo. Esta é a galeria do que você vai ver na prática em ${EVENT.datesLabel}.`}
      />

      <Section
        index="01"
        label="Galeria"
        tone="grid"
        title={`${PROJECTS.length} projetos, um por palestrante`}
        intro="Todos nascem nos workshops e palestras dos dois dias e podem ser montados na sua rotina de trabalho."
      >
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? "hero" : "glass"}
              size="sm"
              className="rounded-full"
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
          <p className="ml-auto text-sm text-muted-foreground">
            Mostrando {shown.length} de {PROJECTS.length}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project) => {
            const speaker = getSpeaker(project.speaker);
            return (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Prévia do projeto ${project.title}`}
                    loading="lazy"
                    width={1536}
                    height={1024}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-display text-[10px] uppercase tracking-[0.18em] text-accent backdrop-blur">
                    {project.format}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {speaker ? (
                    <Link
                      to="/palestrantes"
                      className="mt-5 flex items-center gap-3 border-t border-border pt-4 transition-colors hover:bg-secondary/60"
                    >
                      <img
                        src={speaker.photo}
                        alt=""
                        width={1254}
                        height={1254}
                        className="size-9 shrink-0 rounded-full object-cover"
                      />
                      <span className="text-sm">
                        <span className="block font-medium">{speaker.name}</span>
                        <span className="block text-xs text-muted-foreground">
                          {speaker.role} · {speaker.company}
                        </span>
                      </span>
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary bg-card-vip p-10 shadow-glow sm:p-14">
            <div className="glow-orb pointer-events-none absolute -right-20 -top-20 size-96" />
            <p className="relative font-display text-xs uppercase tracking-[0.25em] text-accent">
              Pratique com a gente
            </p>
            <h2 className="relative mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
              Veja esses projetos <span className="text-gradient">funcionando ao vivo</span>
            </h2>
            <p className="relative mt-4 max-w-xl text-lg text-muted-foreground">
              Os projetos são montados e demonstrados nos dois dias de evento, das {EVENT.hours}.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/ingressos">
                  Garanta seu ingresso <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/palestrantes">Conheça os palestrantes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
