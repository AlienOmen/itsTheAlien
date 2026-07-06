import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '../About';

describe('About', () => {
  it('renders heading, story text, and 3 stats', () => {
    const { container } = render(<About />);
    expect(container.querySelector('#about')).not.toBeNull();
    expect(screen.getByText(/decoded/i)).toBeTruthy();
    // AnimatedText renders each character twice (faded + visible), check for doubled substring
    expect(container.textContent?.toLowerCase()).toMatch(/aahhmmeeddaa/);
    expect(screen.getAllByText(/\+/)).toHaveLength(3);
  });
});
