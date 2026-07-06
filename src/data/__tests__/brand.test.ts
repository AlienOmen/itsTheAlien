import { describe, it, expect } from 'vitest';
import { clients } from '../clients';
import { services } from '../expertise';
import { projects } from '../projects';
import { programs, acronym } from '../alienSystem';
import { copy } from '../copy';

const allText = JSON.stringify({ clients, services, projects, programs, acronym, copy });

describe('brand rules', () => {
  it('never mentions Red Bull (banned; Power Horse only)', () => {
    expect(allText.toLowerCase()).not.toContain('red bull');
    expect(clients).toContain('Power Horse');
  });
  it('never uses the word outsider', () => {
    expect(allText.toLowerCase()).not.toContain('outsider');
  });
  it('has exactly 3 projects with 3 images each', () => {
    expect(projects).toHaveLength(3);
    projects.forEach((p) => expect(p.images).toHaveLength(3));
  });
  it('has 4 numbered services', () => {
    expect(services.map((s) => s.num)).toEqual(['01', '02', '03', '04']);
  });
  it('has the two ALIEN programs and 5 acronym letters', () => {
    expect(programs).toHaveLength(2);
    expect(acronym.map((a) => a.letter).join('')).toBe('ALIEN');
  });
});
