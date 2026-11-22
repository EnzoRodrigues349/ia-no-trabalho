import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "plain" | "grid";
  children?: ReactNode;
  className?: string;
};

/** A numbered, visually separated page section ("01 — Sobre"). */
export function Section({ index, label, title, intro, tone = "plain", children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "relative border-t border-border py-20 sm:py-28",
        tone === "grid" ? "bg-grid" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.25em] text-accent">
              <span className="rounded-full bg-brand px-2.5 py-1 text-primary-foreground">{index}</span>
              {label}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-5xl">{title}</h2>
          </div>
          {intro ? <p className="max-w-md text-muted-foreground md:text-right">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

/** Compact header used at the top of inner pages. */
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="glow-orb pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}
