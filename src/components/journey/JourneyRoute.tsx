import { routePoints } from "@/data/journey";

export function JourneyRoute({ activeIndex }: { activeIndex: number }) {
  const d = routePoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const travelled = routePoints
    .slice(0, Math.max(activeIndex + 1, 1))
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke="var(--nv-route)"
        strokeWidth="0.45"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.6 1.6"
        vectorEffect="non-scaling-stroke"
        style={{ filter: "drop-shadow(0 0 6px var(--nv-accent-glow))" }}
      />
      {activeIndex > 0 && (
        <path
          d={travelled}
          fill="none"
          stroke="var(--nv-route-active)"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ filter: "drop-shadow(0 0 10px var(--nv-accent-glow))" }}
        />
      )}
    </svg>
  );
}
