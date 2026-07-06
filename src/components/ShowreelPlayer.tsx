import { useState } from 'react';
import { Play } from 'lucide-react';

export function ShowreelPlayer({ src, poster }: { src: string; poster: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[40px] border border-line sm:rounded-[50px] md:rounded-[60px]">
      {playing ? (
        <video src={src} poster={poster} controls autoPlay className="h-full w-full object-cover" />
      ) : (
        <button type="button" aria-label="Play showreel" onClick={() => setPlaying(true)} className="group h-full w-full">
          <img src={poster} alt="Showreel poster" className="h-full w-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-acid text-void
                             transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
              <Play className="ml-1 h-8 w-8 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
