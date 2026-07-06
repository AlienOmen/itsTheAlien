import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Projects } from '../Projects';

describe('Projects', () => {
  it('renders 3 cards with titles, results, and 9 images', () => {
    const { container } = render(<Projects />);
    expect(screen.getByText(/ARAFA/)).toBeTruthy();
    expect(screen.getByText(/InstaPay/)).toBeTruthy();
    expect(screen.getByText(/SparX/)).toBeTruthy();
    expect(container.querySelectorAll('img')).toHaveLength(9);
    expect(screen.getAllByRole('link', { name: /view project/i })).toHaveLength(3);
  });
});
