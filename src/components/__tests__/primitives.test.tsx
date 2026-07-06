import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FadeIn } from '../FadeIn';
import { Magnet } from '../Magnet';
import { AnimatedText } from '../AnimatedText';

describe('motion primitives', () => {
  it('FadeIn renders its children', () => {
    render(<FadeIn><p>hello</p></FadeIn>);
    expect(screen.getByText('hello')).toBeTruthy();
  });
  it('Magnet renders its children', () => {
    render(<Magnet><img alt="portrait" src="/portrait.png" /></Magnet>);
    expect(screen.getByAltText('portrait')).toBeTruthy();
  });
  it('AnimatedText renders every character as placeholder + animated overlay', () => {
    const { container } = render(<AnimatedText text="abc" />);
    const placeholders = Array.from(container.querySelectorAll('span.opacity-20'));
    expect(placeholders.map((s) => s.textContent).join('')).toBe('abc');
    expect(container.querySelectorAll('span.absolute')).toHaveLength(3);
  });
});
