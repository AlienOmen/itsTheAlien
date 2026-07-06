import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Expertise } from '../Expertise';

describe('Expertise', () => {
  it('renders 4 numbered services on a bone background', () => {
    const { container } = render(<Expertise />);
    ['Art Direction', 'Brand Identity', 'AI-Driven Production', '360° Campaign Strategy']
      .forEach((n) => expect(screen.getByText(n)).toBeTruthy());
    expect(container.querySelector('section')?.className).toContain('bg-bone');
  });
});
