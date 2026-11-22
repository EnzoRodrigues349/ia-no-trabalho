import { Coffee, Mic2, Presentation, Users, Wrench } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AGENDA, getSpeaker, type SessionKind } from "@/lib/event-data";
import { cn } from "@/lib/utils";

const KIND: Record<SessionKind, { label: string; icon: typeof Mic2 }> = {
  keynote: { label: "Keynote", icon: Presentation },
  palestra: { label: "Palestra", icon: Mic2 },
  workshop: { label: "Workshop", icon: Wrench },
  painel: { label: "Painel", icon: Users },
  pausa: { label: "Pausa", icon: Coffee },
};

export function AgendaView() {
  return (
    <Tabs defaultValue="sabado" className="w-full">
      <TabsList className="mb-10 grid h-auto w-full grid-cols-2 gap-2 rounded-2xl bg-secondary p-2">
        {AGENDA.map((day) => (
          <TabsTrigger
            key={day.id}
            value={day.id}
            className="flex flex-col items-start gap-1 rounded-xl px-4 py-3 text-left whitespace-normal data-[state=active]:bg-brand data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow"
          >
            <span className="font-display text-sm font-semibold sm:text-base">
              {day.weekday} · {day.date}
            </span>
            <span className="text-xs opacity-80">{day.track}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {AGENDA.map((day) => (
        <TabsContent key={day.id} value={day.id}>
          <div className="mb-8 rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Trilha do dia</p>
            <p className="mt-2 font-display text-xl font-semibold sm:text-2xl">{day.track}</p>
            <p className="mt-2 text-muted-foreground">{day.summary}</p>
          </div>
          <ol className="relative flex flex-col gap-3">
            {day.sessions.map((session) => {
              const kind = KIND[session.kind];
              const Icon = kind.icon;
              const isBreak = session.kind === "pausa";
              const speakers = (session.speakers ?? [])
                .map((slug) => getSpeaker(slug))
                .filter((s) => s !== undefined);
              return (
                <li
                  key={`${day.id}-${session.start}`}
                  className={cn(
                    "grid gap-4 rounded-2xl border p-5 sm:grid-cols-[140px_1fr] sm:p-6",
                    isBreak ? "border-dashed border-border bg-transparent" : "border-border bg-card",
                  )}
                >
                  <div className="font-display">
                    <p className="text-lg font-semibold">{session.start}</p>
                    <p className="text-xs text-muted-foreground">até {session.end}</p>
                  </div>
                  <div>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
                        isBreak ? "bg-muted text-muted-foreground" : "bg-primary/15 text-accent",
                      )}
                    >
                      <Icon className="size-3.5" />
                      {kind.label}
                    </span>
                    <h3 className={cn("mt-3 font-semibold", isBreak ? "text-base text-muted-foreground" : "text-lg")}>
                      {session.title}
                    </h3>
                    {session.description ? (
                      <p className="mt-1 text-sm text-muted-foreground">{session.description}</p>
                    ) : null}
                    {speakers.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {speakers.map((sp) => (
                          <span key={sp.slug} className="flex items-center gap-2 rounded-full bg-secondary py-1 pl-1 pr-3 text-sm">
                            <img src={sp.photo} alt="" className="size-7 rounded-full object-cover" loading="lazy" />
                            {sp.name}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </TabsContent>
      ))}
    </Tabs>
  );
}
