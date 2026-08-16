export type JourneyStop = {
  id: string;
  name: string;
  descriptor: string;
  icon: string;
  /** position over the terrain, in % of the world layer */
  x: number;
  y: number;
  durationSec: number;
};

export const journeyStops: JourneyStop[] = [
  { id: "baltit-fort", name: "Baltit Fort", descriptor: "Starting Point", icon: "castle", x: 31, y: 61, durationSec: 105 },
  { id: "karimabad", name: "Karimabad", descriptor: "Village", icon: "village", x: 35, y: 45, durationSec: 90 },
  { id: "altit-fort", name: "Altit Fort", descriptor: "Historic Fort", icon: "castle", x: 47, y: 33, durationSec: 80 },
  { id: "attabad-lake", name: "Attabad Lake", descriptor: "Lake", icon: "lake", x: 68, y: 33, durationSec: 120 },
  { id: "passu-cones", name: "Passu Cones", descriptor: "Viewpoint", icon: "peak", x: 37, y: 23, durationSec: 95 },
  { id: "hussaini-bridge", name: "Hussaini Bridge", descriptor: "Bridge", icon: "bridge", x: 70, y: 52, durationSec: 85 },
  { id: "khunjerab-pass", name: "Khunjerab Pass", descriptor: "Mountain Pass", icon: "pass", x: 82, y: 72, durationSec: 110 },
];

export const mountainLabels = [
  { id: "rakaposhi", name: "Rakaposhi", altitude: "7,788 m", x: 63, y: 6 },
  { id: "ultar-sar", name: "Ultar Sar", altitude: "7,388 m", x: 88, y: 12 },
];

/** ordered route through the world, in % coordinates */
export const routePoints = journeyStops.map((s) => ({ x: s.x, y: s.y }));
