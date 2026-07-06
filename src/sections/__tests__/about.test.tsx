import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '../About';

describe('About', () => {
  it('renders heading, story text, and 3 stats', () => {
    const { container } = render(<About />);
    expect(container.querySelector('#about')).not.toBeNull();
    expect(screen.getByText(/decoded/i)).toBeTruthy();
    // AnimatedText renders words in separate spans; read only the placeholder layer (span.opacity-20)
    // which contains each character exactly once. Words are space-separated in the source but rendered
    // in separate inline-block spans, so joined placeholder text has no spaces.
    const placeholderText = Array.from(container.querySelectorAll('span.opacity-20'))
      .map((s) => s.textContent)
      .join('');
    expect(placeholderText).toContain('AhmedAlBadry');
    expect(screen.getAllByText(/\+/)).toHaveLength(3);
  });
});
