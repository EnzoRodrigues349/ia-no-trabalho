import { useEffect, useState } from "react";

import { VENUE } from "@/lib/event-data";

/**
 * Google Maps embed of the venue. Uses the managed browser key when it is linked and the page
 * runs on an authorized origin; otherwise falls back to Google's keyless embed.
 */
function buildMapSrc(): string {
  const q = encodeURIComponent(VENUE.mapQuery);
  const key = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as string | undefined;
  const isPrivatePreview = window.location.hostname.includes("-devserver-");
  if (key && !isPrivatePreview) {
    return `https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}&zoom=16&language=pt-BR&region=BR`;
  }
  return `https://maps.google.com/maps?q=${q}&z=16&hl=pt-BR&output=embed`;
}

export function VenueMap() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setSrc(buildMapSrc());
  }, []);

  return (
    <div className="relative h-[420px] overflow-hidden rounded-3xl border border-border bg-surface-raised shadow-soft lg:h-full lg:min-h-[480px]">
      {src ? (
        <iframe
          title={`Mapa: ${VENUE.name}`}
          src={src}
          className="absolute inset-0 size-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="grid size-full place-items-center text-sm text-muted-foreground">Carregando mapa…</div>
      )}
    </div>
  );
}
