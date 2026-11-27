import { describe, expect, it } from "vitest";

import { AGENDA, PROJECTS, SPEAKERS, TESTIMONIALS, TICKETS, VENUE, averageTestimonialRating, getSpeaker } from "@/lib/event-data";

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

  it("has 8 gallery projects, each tied to a real speaker", () => {
    expect(PROJECTS).toHaveLength(8);
    for (const project of PROJECTS) {
      expect(getSpeaker(project.speaker)).toBeDefined();
      expect(project.image.length).toBeGreaterThan(0);
      expect(["sabado", "domingo"]).toContain(project.day);
    }
    expect(new Set(PROJECTS.map((p) => p.slug)).size).toBe(PROJECTS.length);
  });

  it("is at Alameda Santos, 1123", () => {
    expect(VENUE.street).toBe("Alameda Santos, 1123");
  });

  it("has at least 6 testimonials, each with photo, name, profession and a rating out of 5", () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(6);
    for (const t of TESTIMONIALS) {
      expect(t.name.length).toBeGreaterThan(0);
      expect(t.role.length).toBeGreaterThan(0);
      expect(t.company.length).toBeGreaterThan(0);
      expect(t.quote.length).toBeGreaterThan(0);
      expect(t.photo.length).toBeGreaterThan(0);
      expect(t.rating).toBeGreaterThan(0);
      expect(t.rating).toBeLessThanOrEqual(5);
    }
    expect(new Set(TESTIMONIALS.map((t) => t.id)).size).toBe(TESTIMONIALS.length);
  });

  it("averages the testimonial ratings out of 5", () => {
    const expected = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length;
    expect(averageTestimonialRating()).toBeCloseTo(expected, 10);
    expect(averageTestimonialRating()).toBeGreaterThanOrEqual(4);
    expect(averageTestimonialRating()).toBeLessThanOrEqual(5);
  });
});
