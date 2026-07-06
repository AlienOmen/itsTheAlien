import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Showreel } from '../Showreel';

describe('Showreel', () => {
  it('shows poster with play button, swaps to video on click', () => {
    const { container } = render(<Showreel />);
    expect(container.querySelector('video')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /play showreel/i }));
    expect(container.querySelector('video')).not.toBeNull();
  });
});
