import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS, formatRating, type Testimonial } from "@/lib/event-data";

/** Five stars, with the filled part clipped to the rating (supports half stars). */
function Rating({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));

  return (
    <div className="flex items-center justify-center gap-2" aria-label={`Nota ${formatRating(value)} de 5`}>
      <div className="relative inline-flex">
        <div className="flex gap-1 text-muted-foreground/35">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-4 shrink-0" />
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full overflow-hidden" style={{ width: `${pct}%` }}>
          <div className="flex w-max gap-1 text-primary-glow">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-4 shrink-0 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <span className="font-display text-sm font-semibold text-accent">{formatRating(value)}</span>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col items-center px-3 py-8 text-center sm:px-6">
      <img
        src={testimonial.photo}
        alt={`Foto de ${testimonial.name}`}
        loading="lazy"
        width={1254}
        height={1254}
        className="size-24 shrink-0 rounded-full object-cover ring-1 ring-primary/50"
      />
      <figcaption className="mt-5">
        <p className="text-base font-semibold text-accent">{testimonial.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {testimonial.role} · {testimonial.company}
        </p>
      </figcaption>
      <blockquote className="mt-5 text-sm leading-relaxed text-foreground/85">{testimonial.quote}</blockquote>
      <div className="mt-auto pt-7">
        <Rating value={testimonial.rating} />
      </div>
    </figure>
  );
}

/**
 * Testimonials carousel: three cards side by side on large screens, two on tablets,
 * one on phones, with chevron arrows on the sides.
 */
export function Testimonials() {
  return (
    <div className="relative px-12 sm:px-16">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="secondary"
          className="-left-12 size-9 border-primary/40 bg-surface text-foreground shadow-soft hover:bg-surface-raised [&_svg]:text-foreground sm:-left-16 sm:size-11"
        />
        <CarouselNext
          variant="secondary"
          className="-right-12 size-9 border-primary/40 bg-surface text-foreground shadow-soft hover:bg-surface-raised [&_svg]:text-foreground sm:-right-16 sm:size-11"
        />
      </Carousel>
    </div>
  );
}
