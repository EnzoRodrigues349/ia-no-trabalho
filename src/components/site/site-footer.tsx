import { Link } from "@tanstack/react-router";

import { EVENT, VENUE } from "@/lib/event-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">
            Conferência <span className="text-gradient">IA no Trabalho</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{EVENT.tagline}.</p>
        </div>
        <div className="text-sm">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Quando</p>
          <p className="mt-2">{EVENT.datesLabel}</p>
          <p className="text-muted-foreground">{EVENT.hours}</p>
          <p className="mt-5 font-display text-xs uppercase tracking-[0.2em] text-accent">Onde</p>
          <p className="mt-2">{VENUE.name}</p>
          <p className="text-muted-foreground">
            {VENUE.street} · {VENUE.district}
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Navegue</p>
          <Link to="/agenda" className="text-muted-foreground hover:text-foreground">Agenda</Link>
          <Link to="/palestrantes" className="text-muted-foreground hover:text-foreground">Palestrantes</Link>
          <Link to="/local" className="text-muted-foreground hover:text-foreground">Local</Link>
          <Link to="/ingressos" className="text-muted-foreground hover:text-foreground">Ingressos</Link>
          <Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
        </nav>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2030 Conferência IA no Trabalho. Todos os direitos reservados.
      </div>
    </footer>
  );
}
