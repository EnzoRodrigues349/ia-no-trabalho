import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/lib/event-data";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? FAQ.slice(0, limit) : FAQ;
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-3">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          value={`q-${i}`}
          className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-primary"
        >
          <AccordionTrigger className="py-5 text-left font-display text-base font-medium hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
