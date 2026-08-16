import { Map } from "lucide-react";

export function JourneyHeader({ onMapView }: { onMapView?: () => void }) {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-4 p-4 sm:p-6">
      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <h1 className="truncate text-xl font-semibold tracking-tight text-nv-ui drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-2xl">
            NorthVerse 3D Journey
          </h1>
          <span className="shrink-0 rounded-full bg-nv-accent px-2.5 py-0.5 text-[11px] font-semibold text-nv-ui shadow-[0_0_18px_var(--nv-accent-glow)]">
            3D
          </span>
        </div>
        <p className="mt-0.5 truncate text-xs text-nv-ui-dim drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-sm">
          Explore Hunza Valley like never before
        </p>
      </div>

      <button
        type="button"
        onClick={onMapView}
        className="nv-glass pointer-events-auto flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-nv-ui transition-colors hover:bg-nv-glass-hover sm:px-4"
      >
        <Map className="h-4 w-4" />
        <span className="hidden sm:inline">Map View</span>
      </button>
    </header>
  );
}
