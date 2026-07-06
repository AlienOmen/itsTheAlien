export const marqueeImages: string[] = Array.from(
  { length: 16 }, (_, i) => `/work/tile-${String(i + 1).padStart(2, '0')}.jpg`,
);
