import type { Speaker } from "@/lib/event-data";

export function SpeakerCard({ speaker, showBio = true }: { speaker: Speaker; showBio?: boolean }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={speaker.photo}
          alt={`Foto de ${speaker.name}`}
          loading="lazy"
          width={1254}
          height={1254}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{speaker.name}</h3>
        <p className="mt-1 text-sm text-accent">{speaker.role}</p>
        <p className="text-sm text-muted-foreground">{speaker.company}</p>
        {showBio ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p> : null}
      </div>
    </article>
  );
}
