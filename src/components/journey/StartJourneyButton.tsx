import { Play } from "lucide-react";

export function StartJourneyButton({ onStart }: { onStart: () => void }) {
  return (
    <div className="pointer-events-auto absolute inset-x-0 bottom-16 z-40 flex justify-center sm:bottom-24">
      <button
        type="button"
        onClick={onStart}
        className="flex items-center gap-3 rounded-2xl bg-nv-accent px-7 py-4 text-base font-semibold text-nv-ui shadow-[0_0_48px_var(--nv-accent-glow)] transition-transform hover:scale-[1.03]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-nv-glass-strong">
          <Play className="h-4 w-4" />
        </span>
        Start Journey
      </button>
    </div>
  );
}
