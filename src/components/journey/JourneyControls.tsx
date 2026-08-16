import { Compass, Pause, Play, RotateCcw } from "lucide-react";

export function JourneyControls({
  playing,
  exploring,
  onTogglePlay,
  onRestart,
  onExplore,
}: {
  playing: boolean;
  exploring: boolean;
  onTogglePlay: () => void;
  onRestart: () => void;
  onExplore: () => void;
}) {
  return (
    <div className="pointer-events-auto absolute bottom-[7.5rem] left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-8 sm:left-auto sm:right-24 sm:translate-x-0 sm:gap-3">
      <button
        type="button"
        onClick={onTogglePlay}
        className="nv-glass flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-nv-ui transition-colors hover:bg-nv-glass-hover sm:px-5 sm:py-3"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        {playing ? "Pause" : "Play"}
      </button>
      <button
        type="button"
        onClick={onRestart}
        className="nv-glass flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-nv-ui transition-colors hover:bg-nv-glass-hover sm:px-5 sm:py-3"
      >
        <RotateCcw className="h-4 w-4" />
        Restart
      </button>
      <button
        type="button"
        onClick={onExplore}
        className={
          exploring
            ? "flex items-center gap-2 rounded-xl bg-nv-accent px-3.5 py-2.5 text-sm font-semibold text-nv-ui shadow-[0_0_28px_var(--nv-accent-glow)] sm:px-5 sm:py-3"
            : "nv-glass nv-glass-bright flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-nv-ui transition-colors hover:bg-nv-glass-hover sm:px-5 sm:py-3"
        }
      >
        <Compass className="h-4 w-4" />
        Explore
      </button>
    </div>
  );
}
