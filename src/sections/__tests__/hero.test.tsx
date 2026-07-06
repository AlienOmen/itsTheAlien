import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero', () => {
  it('renders headline, nav links, and portrait', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 }).textContent?.toLowerCase()).toContain("it");
    expect(screen.getByRole('heading', { level: 1 }).textContent?.toLowerCase()).toContain("the alien");
    ['About', 'System', 'Projects', 'Contact'].forEach((l) => expect(screen.getByText(l)).toBeTruthy());
    expect(screen.getByAltText(/ahmed al badry/i)).toBeTruthy();
  });
});
