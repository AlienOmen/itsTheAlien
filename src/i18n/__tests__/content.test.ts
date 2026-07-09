import { describe, it, expect } from 'vitest';
import { content } from '../content';

describe('i18n content', () => {
  it('has both languages with matching structure', () => {
    const en = content.en;
    const es = content.es;
    expect(es.projects).toHaveLength(en.projects.length);
    expect(es.caseStudies).toHaveLength(en.caseStudies.length);
    expect(es.services).toHaveLength(en.services.length);
    expect(es.programs).toHaveLength(en.programs.length);
    expect(es.moreWork).toHaveLength(en.moreWork.length);
    // slugs must align so the overlay lookup works in either language
    expect(es.caseStudies.map((c) => c.slug)).toEqual(en.caseStudies.map((c) => c.slug));
    expect(es.projects.map((p) => p.slug)).toEqual(en.projects.map((p) => p.slug));
  });

  it('every Spanish case study is fully translated (no empty fields)', () => {
    content.es.caseStudies.forEach((c) => {
      expect(c.tagline.length).toBeGreaterThan(5);
      expect(c.problem.length).toBeGreaterThan(20);
      expect(c.keyDecisions.length).toBeGreaterThanOrEqual(3);
      expect(c.impact.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('Spanish nav + key UI labels differ from English', () => {
    expect(content.es.ui.nav.about).not.toBe(content.en.ui.nav.about);
    expect(content.es.ui.viewCaseStudy).not.toBe(content.en.ui.viewCaseStudy);
    expect(content.es.ui.contactMe).not.toBe(content.en.ui.contactMe);
  });

  it('keeps brand rules in both languages (no Red Bull / outsider)', () => {
    const all = JSON.stringify(content).toLowerCase();
    expect(all).not.toContain('red bull');
    expect(all).not.toContain('outsider');
  });
});
