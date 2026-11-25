import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { business, clips, photos } from "./farro";
import { findJournal, journal } from "./journal";

const media = (name: string) => join(process.cwd(), "public", "media", name);

describe("media referenced by content exists on disk", () => {
  it.each(Object.values(photos))("photo $slug has all variants", (p) => {
    for (const f of [`${p.slug}-640.jpg`, `${p.slug}-640.webp`, `${p.slug}-1024.jpg`, `${p.slug}-1024.webp`]) {
      expect(existsSync(media(f)), f).toBe(true);
    }
  });
  it.each(Object.values(clips))("clip $slug has video and poster", (c) => {
    expect(existsSync(media(`${c.slug}.mp4`)), c.slug).toBe(true);
    expect(existsSync(media(`${c.slug}-poster.jpg`)), c.slug).toBe(true);
  });
  it("journal photos exist", () => {
    for (const j of journal) {
      expect(existsSync(media(`${j.photo.slug}-1024.jpg`)), j.slug).toBe(true);
    }
  });
});

describe("business links and contact details", () => {
  const links = [business.reserveUrl, business.whatsappUrl, business.instagramUrl, business.chefInstagramUrl, business.groupUrl, business.mapsUrl];
  it.each(links)("%s is https", (u) => {
    expect(new URL(u).protocol).toBe("https:");
  });
  it("phone href matches the displayed number", () => {
    expect(business.phoneHref).toBe("tel:" + business.phone.replace(/[^\d+]/g, ""));
  });
  it("address is the published one", () => {
    expect(business.address).toContain("Shop 1/2, 357/1, Lane No. 6");
  });
});

describe("journal is drafted, not invented", () => {
  it("slugs are unique", () => {
    const slugs = journal.map((j) => j.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
  it.each(journal)("$slug is marked as a draft needing confirmation", (j) => {
    expect(j.body.some((p) => p.startsWith("Draft note:"))).toBe(true);
  });
  it("unknown slugs resolve to nothing", () => {
    expect(findJournal("does-not-exist")).toBeUndefined();
    expect(findJournal(undefined)).toBeUndefined();
  });
});
