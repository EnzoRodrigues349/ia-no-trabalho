import { Check, Crown, Ticket as TicketIcon, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { TICKETS, formatPrice } from "@/lib/event-data";
import { cn } from "@/lib/utils";

export function TicketCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {TICKETS.map((ticket) => {
        const Icon = ticket.highlight ? Crown : TicketIcon;
        return (
          <article
            key={ticket.id}
            className={cn(
              "relative flex flex-col rounded-3xl border p-8 sm:p-10",
              ticket.highlight ? "border-primary bg-card-vip shadow-glow" : "border-border bg-card",
            )}
          >
            {ticket.highlight ? (
              <span className="absolute -top-3 right-8 rounded-full bg-brand px-4 py-1 font-display text-[11px] uppercase tracking-[0.2em] text-primary-foreground">
                Mais completo
              </span>
            ) : null}
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-secondary">
                <Icon className="size-5 text-accent" />
              </span>
              <h3 className="text-2xl font-semibold">{ticket.name}</h3>
            </div>
            <p className="mt-4 text-muted-foreground">{ticket.description}</p>
            <p className="mt-8 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold">{formatPrice(ticket.price)}</span>
              <span className="text-sm text-muted-foreground">/ 2 dias</span>
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-border pt-8">
              {ticket.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                  {item}
                </li>
              ))}
              {ticket.excludes?.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant={ticket.highlight ? "hero" : "glass"}
              size="xl"
              className="mt-10 w-full"
              onClick={() =>
                toast.info("Vendas em breve", {
                  description: `As vendas do ingresso ${ticket.name} abrem em breve.`,
                })
              }
            >
              Comprar {ticket.name}
            </Button>
          </article>
        );
      })}
    </div>
  );
}
