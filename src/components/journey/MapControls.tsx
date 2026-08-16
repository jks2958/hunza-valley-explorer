import { Minus, Plus, RefreshCw } from "lucide-react";

export function MapControls({
  onReset,
  onZoomIn,
  onZoomOut,
  heading = 0,
}: {
  onReset: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  heading?: number;
}) {
  return (
    <div className="pointer-events-auto absolute right-3 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2 sm:right-6">
      <button
        type="button"
        onClick={onReset}
        aria-label="Recenter"
        className="nv-glass grid h-10 w-10 place-items-center rounded-xl text-nv-ui transition-colors hover:bg-nv-glass-hover"
      >
        <RefreshCw className="h-4 w-4" />
      </button>
      <div className="nv-glass flex flex-col overflow-hidden rounded-xl">
        <button
          type="button"
          onClick={onZoomIn}
          aria-label="Zoom in"
          className="grid h-10 w-10 place-items-center text-nv-ui transition-colors hover:bg-nv-glass-hover"
        >
          <Plus className="h-4 w-4" />
        </button>
        <span className="h-px w-full bg-nv-line" />
        <button
          type="button"
          onClick={onZoomOut}
          aria-label="Zoom out"
          className="grid h-10 w-10 place-items-center text-nv-ui transition-colors hover:bg-nv-glass-hover"
        >
          <Minus className="h-4 w-4" />
        </button>
      </div>
      <div className="nv-glass grid h-10 w-10 place-items-center rounded-xl">
        <svg viewBox="0 0 24 24" className="h-5 w-5" style={{ transform: `rotate(${heading}deg)` }} aria-hidden="true">
          <polygon points="12,3 16,12 12,10 8,12" fill="var(--nv-compass-north)" />
          <polygon points="12,21 8,12 12,14 16,12" fill="var(--nv-ui-dim)" />
        </svg>
      </div>
    </div>
  );
}
