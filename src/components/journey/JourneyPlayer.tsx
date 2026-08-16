import { SkipBack, SkipForward, Maximize2 } from "lucide-react";
import type { JourneyStop } from "@/data/journey";

export function JourneyPlayer({
  stop,
  index,
  total,
  thumbnail,
  onPrev,
  onNext,
}: {
  stop: JourneyStop;
  index: number;
  total: number;
  thumbnail: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="nv-glass pointer-events-auto absolute bottom-3 left-3 z-30 w-[calc(100%-1.5rem)] rounded-2xl p-2.5 sm:bottom-6 sm:left-6 sm:w-[460px] sm:p-3">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        <img
          src={thumbnail}
          alt={stop.name}
          loading="lazy"
          className="h-12 w-16 shrink-0 rounded-xl object-cover sm:h-14 sm:w-20"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-nv-ui">{stop.name}</p>
          <p className="truncate text-xs text-nv-ui-dim">{stop.descriptor}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous stop"
            className="grid h-10 w-10 place-items-center rounded-full text-nv-ui transition-colors hover:bg-nv-glass-hover"
          >
            <SkipBack className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next stop"
            className="grid h-10 w-10 place-items-center rounded-full bg-nv-accent text-nv-ui shadow-[0_0_24px_var(--nv-accent-glow)] transition-transform hover:scale-105"
          >
            <SkipForward className="h-4 w-4" />
          </button>
          <span className="hidden h-9 w-9 place-items-center rounded-full border border-nv-line text-nv-ui-dim sm:grid">
            <Maximize2 className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-3 pl-1">
        <div className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-nv-glass-strong">
          <div
            className="h-full rounded-full bg-nv-accent shadow-[0_0_12px_var(--nv-accent-glow)] transition-[width] duration-500"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-[11px] tabular-nums text-nv-ui-dim">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}
