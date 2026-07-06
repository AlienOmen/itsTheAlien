import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Marquee } from '../Marquee';
import { marqueeImages } from '../../data/marquee';

describe('Marquee', () => {
  it('has 16 source images and renders them tripled in two rows', () => {
    expect(marqueeImages).toHaveLength(16);
    const { container } = render(<Marquee />);
    expect(container.querySelectorAll('img')).toHaveLength(16 * 3);
  });
});
