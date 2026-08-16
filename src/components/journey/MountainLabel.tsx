export function MountainLabel({
  name,
  altitude,
  x,
  y,
}: {
  name: string;
  altitude?: string;
  x: number;
  y: number;
}) {
  return (
    <div
      style={{ left: `${x}%`, top: `${y}%` }}
      className="nv-glass pointer-events-none absolute z-20 -translate-x-1/2 rounded-lg px-2.5 py-1.5"
    >
      <p className="whitespace-nowrap text-[11px] font-medium leading-tight text-nv-ui sm:text-sm">{name}</p>
      {altitude && <p className="text-[10px] leading-tight text-nv-ui-dim sm:text-xs">{altitude}</p>}
    </div>
  );
}
