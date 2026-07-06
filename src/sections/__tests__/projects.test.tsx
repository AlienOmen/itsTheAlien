import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Projects } from '../Projects';

describe('Projects', () => {
  it('renders 6 cards with titles and 18 card images plus more-work strip', () => {
    const { container } = render(<Projects />);
    ['ARAFA', 'InstaPay', 'Pretzo', 'SparX', 'Green Pan', 'Jaguar'].forEach((t) =>
      expect(screen.getAllByText(new RegExp(t)).length).toBeGreaterThanOrEqual(1),
    );
    // 18 card images + 3 more-work images
    expect(container.querySelectorAll('img')).toHaveLength(21);
    expect(screen.getAllByRole('button', { name: /view case study/i })).toHaveLength(6);
  });

  it('opens and closes the case study overlay', () => {
    render(<Projects />);
    expect(screen.queryByRole('dialog')).toBeNull();
    fireEvent.click(screen.getAllByRole('button', { name: /view case study/i })[0]);
    const dialog = screen.getByRole('dialog');
    expect(dialog.textContent).toContain('The Problem');
    expect(dialog.textContent).toContain('+20 million impressions across platforms');
    fireEvent.click(screen.getByRole('button', { name: /close case study/i }));
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
