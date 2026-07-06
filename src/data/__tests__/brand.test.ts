import { describe, it, expect } from 'vitest';
import { clients } from '../clients';
import { services } from '../expertise';
import { projects } from '../projects';
import { programs, acronym } from '../alienSystem';
import { copy } from '../copy';
import { caseStudies, moreWork } from '../caseStudies';

const allText = JSON.stringify({ clients, services, projects, programs, acronym, copy, caseStudies, moreWork });

describe('brand rules', () => {
  it('never mentions Red Bull (banned; Power Horse only)', () => {
    expect(allText.toLowerCase()).not.toContain('red bull');
    expect(clients).toContain('Power Horse');
  });
  it('never uses the word outsider', () => {
    expect(allText.toLowerCase()).not.toContain('outsider');
  });
  it('has exactly 6 projects with 3 images each and a matching case study', () => {
    expect(projects).toHaveLength(6);
    const slugs = caseStudies.map((c) => c.slug);
    projects.forEach((p) => {
      expect(p.images).toHaveLength(3);
      expect(slugs).toContain(p.slug);
    });
  });
  it('every case study has 4 gallery images, impact bullets, and tags', () => {
    caseStudies.forEach((c) => {
      expect(c.gallery).toHaveLength(4);
      expect(c.impact.length).toBeGreaterThanOrEqual(3);
      expect(c.tags.length).toBeGreaterThanOrEqual(3);
    });
    expect(moreWork).toHaveLength(3);
  });
  it('has 4 numbered services', () => {
    expect(services.map((s) => s.num)).toEqual(['01', '02', '03', '04']);
  });
  it('has the two ALIEN programs and 5 acronym letters', () => {
    expect(programs).toHaveLength(2);
    expect(acronym.map((a) => a.letter).join('')).toBe('ALIEN');
  });
});
