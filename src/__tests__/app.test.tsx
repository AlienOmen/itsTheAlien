import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders all sections in order with no banned words', () => {
    const { container } = render(<App />);
    const ids = Array.from(container.querySelectorAll('section[id]')).map((s) => s.id);
    expect(ids).toEqual(expect.arrayContaining(['about', 'expertise', 'system', 'projects', 'contact']));
    const text = container.textContent!.toLowerCase();
    expect(text).not.toContain('red bull');
    expect(text).not.toContain('outsider');
    expect(text).toContain('ahmed al badry');
  });
});
