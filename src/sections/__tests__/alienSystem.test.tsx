import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AlienSystem } from '../AlienSystem';

describe('AlienSystem', () => {
  it('renders both programs and the 5-letter acronym', () => {
    render(<AlienSystem />);
    expect(screen.getByText('Part 01')).toBeTruthy();
    expect(screen.getByText('Part 02')).toBeTruthy();
    ['Authentic', 'Legendary', 'Intentional', 'Elevated', 'Notable'].forEach((w) => expect(screen.getByText(w)).toBeTruthy());
  });
});
