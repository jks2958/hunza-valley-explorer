import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { JourneyStop as Stop } from "@/data/journey";
import { StopIcon } from "./StopIcon";

function JourneyStopRow({
  stop,
  index,
  active,
  onSelect,
}: {
  stop: Stop;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={
        active
          ? "flex w-full items-center gap-3 rounded-xl bg-nv-accent px-3 py-2.5 text-left shadow-[0_8px_24px_-6px_var(--nv-accent-glow)]"
          : "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-nv-glass-hover"
      }
    >
      <span
        className={
          active
            ? "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-nv-glass-strong text-nv-ui"
            : "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-nv-line text-sm font-semibold text-nv-ui-dim"
        }
      >
        {active ? <StopIcon icon={stop.icon} className="h-4 w-4" /> : index + 1}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-medium text-nv-ui">{stop.name}</span>
        <span className="block truncate text-xs text-nv-ui-dim">{stop.descriptor}</span>
      </span>
    </button>
  );
}

export function JourneyStops({
  stops,
  activeIndex,
  onSelect,
}: {
  stops: Stop[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nv-glass pointer-events-auto absolute left-3 z-30 w-[calc(100%-1.5rem)] overflow-hidden rounded-2xl sm:left-6 sm:w-[300px] top-auto bottom-40 sm:bottom-auto sm:top-28">
      <div className="px-4 pt-4">
        <p className="text-base font-semibold text-nv-ui">Journey Stops</p>
        <p className="text-xs text-nv-ui-dim">{stops.length} Places</p>
      </div>

      <div
        className={`relative mt-3 px-3 ${open ? "block" : "hidden"} sm:block`}
      >
        <span className="absolute bottom-4 left-[31px] top-4 w-px border-l border-dashed border-nv-line" />
        <ul className="relative space-y-1">
          {stops.map((stop, i) => (
            <li key={stop.id}>
              <JourneyStopRow stop={stop} index={i} active={i === activeIndex} onSelect={() => onSelect(i)} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 flex w-full items-center justify-center gap-2 border-t border-nv-line py-2.5 text-xs text-nv-ui-dim transition-colors hover:bg-nv-glass-hover"
      >
        {open ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        <span className="sm:hidden">{open ? "Hide stops" : "Show stops"}</span>
      </button>
    </div>
  );
}
