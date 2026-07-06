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
  it('AnimatedText renders every character', () => {
    const { container } = render(<AnimatedText text="abc" />);
    expect(container.textContent?.replace(/\s/g, '')).toContain('abc');
  });
});
