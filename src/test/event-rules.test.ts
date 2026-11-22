import { describe, expect, it } from "vitest";

import { AGENDA, SPEAKERS, TICKETS, VENUE } from "@/lib/event-data";

describe("Event rules", () => {
  it("prices Lote Essencial at R$ 290", () => {
    expect(TICKETS.find((t) => t.id === "essencial")?.price).toBe(290);
  });

  it("gives Lote Essencial no recordings and no coffee breaks", () => {
    const essencial = TICKETS.find((t) => t.id === "essencial");
    const included = (essencial?.includes ?? []).join(" ").toLowerCase();
    const shown = [...(essencial?.includes ?? []), ...(essencial?.excludes ?? [])].join(" ").toLowerCase();
    expect(included).not.toContain("grava");
    expect(included).not.toContain("coffee");
    expect(shown).toContain("grava");
    expect(shown).toContain("coffee");
  });

  it("keeps recordings and coffee breaks in the other lots", () => {
    for (const id of ["especial", "vip"] as const) {
      const text = (TICKETS.find((t) => t.id === id)?.includes ?? []).join(" ").toLowerCase();
      expect(text).toContain("grava");
      expect(text).toContain("coffee");
    }
  });

  it("prices Lote Especial at R$ 590", () => {
    expect(TICKETS.find((t) => t.id === "especial")?.price).toBe(590);
  });

  it("prices VIP at R$ 990", () => {
    expect(TICKETS.find((t) => t.id === "vip")?.price).toBe(990);
  });

  it("keeps every session between 09:00 and 17:00", () => {
    for (const day of AGENDA) {
      for (const s of day.sessions) {
        expect(s.start >= "09:00").toBe(true);
        expect(s.end <= "17:00").toBe(true);
      }
    }
  });

  it("runs Saturday 26 and Sunday 27 October", () => {
    expect(AGENDA.map((d) => `${d.weekday} ${d.date}`)).toEqual([
      "Sábado 26 de outubro",
      "Domingo 27 de outubro",
    ]);
  });

  it("has 8 speakers", () => {
    expect(SPEAKERS).toHaveLength(8);
  });

  it("is at Alameda Santos, 1123", () => {
    expect(VENUE.street).toBe("Alameda Santos, 1123");
  });
});
