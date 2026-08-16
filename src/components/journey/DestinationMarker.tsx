import type { JourneyStop } from "@/data/journey";
import { StopIcon } from "./StopIcon";

export function DestinationMarker({
  stop,
  active,
  onSelect,
}: {
  stop: JourneyStop;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      aria-pressed={active}
    >
      <span className="flex flex-col items-center">
        <span
          className={
            active
              ? "nv-marker nv-marker-active flex items-center gap-2 px-3 py-2 text-sm sm:text-base"
              : "nv-marker flex items-center gap-2 px-2.5 py-1.5 text-[11px] sm:text-sm"
          }
        >
          <span
            className={
              active
                ? "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-nv-accent text-nv-ui"
                : "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-nv-glass-strong text-nv-ui"
            }
          >
            <StopIcon icon={stop.icon} className="h-3 w-3" />
          </span>
          <span className="whitespace-nowrap font-medium text-nv-ui">{stop.name}</span>
        </span>
        <span className="nv-marker-stem" />
        <span className={active ? "nv-marker-dot nv-marker-dot-active" : "nv-marker-dot"} />
      </span>
    </button>
  );
}
