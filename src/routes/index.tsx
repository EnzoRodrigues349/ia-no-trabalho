import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, CalendarDays, Clock, MapPin, Sparkles, Wand2, Wrench } from "lucide-react";

import heroStage from "@/assets/hero-stage.jpg";
import { Section } from "@/components/site/section";
import { SpeakerCard } from "@/components/site/speaker-card";
import { TicketCards } from "@/components/site/ticket-cards";
import { Button } from "@/components/ui/button";
import { AGENDA, EVENT, SPEAKERS, VENUE } from "@/lib/event-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conferência IA no Trabalho 2030 · 26 e 27 de outubro em São Paulo" },
      {
        name: "description",
        content:
          "Dois dias de palestras e workshops para profissionais de todas as áreas usarem IA no dia a dia do trabalho. InterContinental São Paulo.",
      },
      { property: "og:title", content: "Conferência IA no Trabalho 2030 · São Paulo" },
      {
        property: "og:description",
        content: "IA generativa, engenharia de prompt e ferramentas na prática. 26 e 27 de outubro de 2030.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const AREAS = [
  "Marketing",
  "Vendas",
  "RH",
  "Finanças",
  "Jurídico",
  "Operações",
  "Atendimento",
  "Educação",
  "Saúde",
  "Produto",
  "Administração",
  "Comunicação",
];

const PILLARS = [
  {
    icon: Briefcase,
    title: "Para todas as áreas",
    text: "Não é preciso saber programar. O conteúdo foi feito para quem quer resultado na rotina, não teoria.",
  },
  {
    icon: Wand2,
    title: "Prático do início ao fim",
    text: "Workshops com tarefas reais: e-mails, relatórios, planilhas, reuniões, apresentações e atendimento.",
  },
  {
    icon: Sparkles,
    title: "Você sai aplicando",
    text: "Leve modelos de prompt, automações e um assistente de IA montado para a sua função.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroStage}
          alt="Palco da Conferência IA no Trabalho com escultura de luz roxa"
          width={1672}
          height={941}
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-primary-glow" />
            {EVENT.city} · {EVENT.shortDates}
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
            Conferência <span className="text-gradient">IA no Trabalho</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            O evento de inteligência artificial focado no seu dia a dia profissional. Dois dias para aprender,
            praticar e voltar para o trabalho usando IA de verdade.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/ingressos">
                Garanta seu ingresso <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="sunset" size="xl">
              <Link to="/agenda">Ver agenda completa</Link>
            </Button>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: "Quando", value: EVENT.datesLabel },
              { icon: Clock, label: "Horário", value: EVENT.hours },
              { icon: MapPin, label: "Onde", value: "InterContinental São Paulo" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-background/80 p-4 backdrop-blur">
                <item.icon className="size-5 shrink-0 text-primary-glow" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</dt>
                  <dd className="text-sm font-medium">{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Marquee of professional areas */}
      <div className="overflow-hidden border-y border-border bg-brand py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-semibold uppercase text-primary-foreground">
          {[...AREAS, ...AREAS].map((area, i) => (
            <span key={`${area}-${i}`} className="flex items-center gap-10">
              {area} <Sparkles className="size-4" />
            </span>
          ))}
        </div>
      </div>

      {/* Sobre */}
      <Section
        index="01"
        label="O evento"
        title={
          <>
            IA para quem <span className="text-gradient">trabalha</span>, não só para quem programa.
          </>
        }
        intro="A Conferência IA no Trabalho reúne profissionais de todas as áreas que querem usar inteligência artificial para trabalhar melhor, mais rápido e com mais criatividade."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-brand shadow-glow">
                <p.icon className="size-5 text-primary-foreground" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
          {[
            { n: "2", l: "dias de conteúdo" },
            { n: "10", l: "palestras, painéis e workshops" },
            { n: "8", l: "palestrantes" },
            { n: "2", l: "trilhas temáticas" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">{s.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trilhas */}
      <Section
        index="02"
        label="Trilhas"
        tone="grid"
        title="Um dia para entender. Um dia para aplicar."
        intro="Programação das 09h às 17h nos dois dias, com palestras, painéis e workshops práticos."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {AGENDA.map((day, i) => {
            const Icon = i === 0 ? Wand2 : Wrench;
            return (
              <article key={day.id} className="flex flex-col rounded-3xl border border-border bg-card p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                    {day.weekday} · {day.date}
                  </span>
                  <Icon className="size-6 text-primary-glow" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">{day.track}</h3>
                <p className="mt-3 text-muted-foreground">{day.summary}</p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-border pt-6">
                  {day.sessions
                    .filter((s) => s.kind !== "pausa" && s.speakers)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.start} className="flex gap-4 text-sm">
                        <span className="w-12 shrink-0 font-display text-accent">{s.start}</span>
                        {s.title}
                      </li>
                    ))}
                </ul>
                <Button asChild variant="glass" className="mt-8 w-fit rounded-full">
                  <Link to="/agenda">
                    Agenda de {day.weekday.toLowerCase()} <ArrowRight />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Palestrantes */}
      <Section
        index="03"
        label="Palestrantes"
        title="Quem vai subir ao palco"
        intro="Especialistas que usam IA todos os dias e sabem explicar sem complicar."
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {SPEAKERS.slice(0, 4).map((sp) => (
            <SpeakerCard key={sp.slug} speaker={sp} showBio={false} />
          ))}
        </div>
        <Button asChild variant="glass" size="xl" className="mt-10">
          <Link to="/palestrantes">
            Conheça os 8 palestrantes <ArrowRight />
          </Link>
        </Button>
      </Section>

      {/* Ingressos */}
      <Section
        index="04"
        label="Ingressos"
        tone="grid"
        title="Escolha sua experiência"
        intro="Ingressos válidos para os dois dias de evento. Vagas limitadas à capacidade do auditório."
      >
        <TicketCards />
      </Section>

      {/* Local CTA */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary bg-card-vip p-10 shadow-glow sm:p-14">
            <div className="glow-orb pointer-events-none absolute -right-20 -top-20 size-96" />
            <p className="relative font-display text-xs uppercase tracking-[0.25em] text-accent">05 · Local</p>
            <h2 className="relative mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">{VENUE.name}</h2>
            <p className="relative mt-4 text-lg text-muted-foreground">
              {VENUE.street} · {VENUE.district}
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/local">
                  Mapa e como chegar <MapPin />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/faq">Perguntas frequentes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
