import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FEATURED_PROJECT } from "@/lib/event-data";

/**
 * Video highlight with a click-to-play facade: the YouTube thumbnail is shown
 * first and the player is only loaded when the visitor presses play.
 */
function VideoHighlight() {
  const { video } = FEATURED_PROJECT;
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <div className="relative overflow-hidden rounded-3xl border border-primary/50 bg-surface shadow-glow">
        <div className="aspect-video">
          {playing ? (
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Assistir ao vídeo ${video.title}`}
              className="group relative block size-full cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={`Cena do vídeo ${video.title}`}
                width={1280}
                height={720}
                loading="lazy"
                className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/50" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid size-16 place-items-center rounded-full bg-brand shadow-glow transition duration-300 group-hover:scale-110 sm:size-20">
                  <Play className="size-7 fill-primary-foreground text-primary-foreground sm:size-8" />
                </span>
              </span>
              <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <span className="max-w-md text-left text-sm font-medium text-foreground sm:text-base">
                  {video.title}
                </span>
                <span className="shrink-0 rounded-full bg-background/85 px-3 py-1 font-display text-xs font-semibold text-accent backdrop-blur">
                  {video.duration}
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Vídeo de apresentação · {video.author}
        </p>
        <Button asChild variant="glass" size="sm" className="rounded-full">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <Youtube />
            Abrir no YouTube
          </a>
        </Button>
      </div>
    </div>
  );
}

/**
 * The main project built live at the conference: video highlight plus the
 * step-by-step path the audience follows on stage.
 */
export function FeaturedProject() {
  const project = FEATURED_PROJECT;

  return (
    <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
      <div className="lg:col-span-3">
        <VideoHighlight />
      </div>

      <div className="flex flex-col lg:col-span-2">
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent"
            >
              {highlight}
            </span>
          ))}
        </div>

        <h3 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl">{project.name}</h3>
        <p className="mt-3 font-display text-base text-foreground/90">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{project.summary}</p>

        <ol className="mt-8 flex flex-col gap-4 border-t border-border pt-6">
          {project.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand font-display text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/agenda">
              Ver na agenda <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/ingressos">Garantir ingresso</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
