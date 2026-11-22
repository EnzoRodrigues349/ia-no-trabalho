import { createFileRoute } from "@tanstack/react-router";
import { Car, MapPin, Plane, TrainFront, Bus } from "lucide-react";

import { PageHero, Section } from "@/components/site/section";
import { VenueMap } from "@/components/site/venue-map";
import { Button } from "@/components/ui/button";
import { VENUE } from "@/lib/event-data";

export const Route = createFileRoute("/local")({
  head: () => ({
    meta: [
      { title: "Local e como chegar · Conferência IA no Trabalho 2030" },
      {
        name: "description",
        content: "Auditório InterContinental São Paulo, Alameda Santos, 1123. Mapa e dicas de metrô, carro e aeroporto.",
      },
      { property: "og:title", content: "Local · Conferência IA no Trabalho 2030" },
      {
        property: "og:description",
        content: "Auditório InterContinental São Paulo, Alameda Santos, 1123 – Jardim Paulista.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VenuePage,
});

const DIRECTIONS = [
  {
    icon: TrainFront,
    title: "Metrô",
    text: "Desça na estação Trianon-Masp (Linha 2-Verde) e caminhe cerca de 10 minutos pela Alameda Santos.",
  },
  {
    icon: Bus,
    title: "Ônibus",
    text: "Diversas linhas passam pela Av. Paulista, a uma quadra do local. Desça nas paradas próximas ao Masp.",
  },
  {
    icon: Car,
    title: "Carro ou aplicativo",
    text: "Use o endereço Alameda Santos, 1123. O hotel tem estacionamento com manobrista (pago à parte).",
  },
  {
    icon: Plane,
    title: "Vindo do aeroporto",
    text: "De Congonhas são cerca de 25 minutos de carro; de Guarulhos, cerca de 50 minutos, dependendo do trânsito.",
  },
];

function VenuePage() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE.mapQuery)}`;
  return (
    <>
      <PageHero
        eyebrow="Local do evento"
        title={<span className="text-gradient">{VENUE.name}</span>}
        intro="No coração da região da Paulista, com fácil acesso por metrô, ônibus e carro."
      />
      <Section index="01" label="Mapa" tone="grid" title="Onde fica">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-primary bg-card-vip p-8 shadow-glow">
              <MapPin className="size-7 text-primary-glow" />
              <p className="mt-4 font-display text-xl font-semibold">{VENUE.name}</p>
              <p className="mt-2 text-lg">{VENUE.street}</p>
              <p className="text-muted-foreground">{VENUE.district}</p>
              <Button asChild variant="hero" className="mt-6 rounded-full">
                <a href={mapsLink} target="_blank" rel="noreferrer">
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Credenciamento</p>
              <p className="mt-3 text-muted-foreground">
                Abre às 08h nos dois dias. Chegue com antecedência e tenha seu ingresso em mãos no celular.
              </p>
            </div>
          </div>
          <VenueMap />
        </div>
      </Section>
      <Section index="02" label="Como chegar" title="Instruções rápidas">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIRECTIONS.map((d) => (
            <article key={d.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-brand shadow-glow">
                <d.icon className="size-5 text-primary-foreground" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{d.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
