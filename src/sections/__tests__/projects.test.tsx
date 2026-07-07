import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { Projects } from '../Projects';

describe('Projects', () => {
  it('renders 6 single-image cards plus the more-work strip', () => {
    const { container } = render(<Projects />);
    ['ARAFA', 'InstaPay', 'Pretzo', 'SparX', 'Green Pan', 'Jaguar'].forEach((t) =>
      expect(screen.getAllByText(new RegExp(t)).length).toBeGreaterThanOrEqual(1),
    );
    // 6 card hero images + 3 more-work images
    expect(container.querySelectorAll('img')).toHaveLength(9);
    expect(screen.getAllByRole('button', { name: /view case study/i })).toHaveLength(6);
  });

  it('opens the overlay with insight + key decisions, then closes', async () => {
    render(<Projects />);
    expect(screen.queryByRole('dialog')).toBeNull();
    fireEvent.click(screen.getAllByRole('button', { name: /view case study/i })[0]);
    const dialog = screen.getByRole('dialog');
    expect(dialog.textContent).toContain('The Insight I Built On');
    expect(dialog.textContent).toContain('Key Decisions');
    expect(dialog.textContent).toContain('+20 million impressions across platforms');
    fireEvent.click(screen.getByRole('button', { name: /close case study/i }));
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
  });
});
