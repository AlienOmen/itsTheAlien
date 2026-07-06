import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// Polyfill IntersectionObserver for jsdom
if (!global.IntersectionObserver) {
  global.IntersectionObserver = class IntersectionObserver {
    constructor(public callback: IntersectionObserverCallback) {}
    observe() { return null; }
    disconnect() { return null; }
    unobserve() { return null; }
    takeRecords() { return []; }
  } as any;
}
