import { Link } from "@tanstack/react-router";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EVENT } from "@/lib/event-data";

const NAV = [
  { to: "/agenda", label: "Agenda" },
  { to: "/palestrantes", label: "Palestrantes" },
  { to: "/local", label: "Local" },
  { to: "/ingressos", label: "Ingressos" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-brand shadow-glow">
            <Sparkles className="size-4 text-primary-foreground" />
          </span>
          <span className="font-display text-sm font-semibold leading-tight">
            IA no Trabalho
            <span className="block text-[10px] font-normal tracking-[0.2em] text-muted-foreground">
              {EVENT.shortDates}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" className="hidden rounded-full sm:inline-flex">
            <Link to="/ingressos">Garanta seu ingresso</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="glass" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border bg-background">
              <SheetTitle className="font-display">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-display text-lg text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="hero" size="xl" className="mt-4">
                  <Link to="/ingressos" onClick={() => setOpen(false)}>
                    Garanta seu ingresso
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
