import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactButton } from '../ContactButton';
import { GhostButton } from '../GhostButton';
import { Ticker } from '../Ticker';

describe('UI atoms', () => {
  it('ContactButton defaults to the WhatsApp line, opening in a new tab', () => {
    render(<ContactButton />);
    const a = screen.getByRole('link', { name: /contact me/i });
    expect(a.getAttribute('href')).toContain('wa.me/201141430050');
    expect(a.getAttribute('target')).toBe('_blank');
  });
  it('GhostButton opens external link in new tab', () => {
    render(<GhostButton href="https://example.com" label="View Project" />);
    const a = screen.getByRole('link', { name: /view project/i });
    expect(a.getAttribute('target')).toBe('_blank');
  });
  it('Ticker renders Power Horse and never Red Bull', () => {
    const { container } = render(<Ticker />);
    expect(container.textContent).toContain('Power Horse');
    expect(container.textContent?.toLowerCase()).not.toContain('red bull');
  });
});
