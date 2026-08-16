export type JourneyStop = {
  id: string;
  name: string;
  descriptor: string;
  icon: "castle" | "village" | "lake" | "peak" | "bridge" | "pass";
  /** position over the terrain, in % of the world layer */
  x: number;
  y: number;
  durationSec: number;
};

export const journeyStops: JourneyStop[] = [
  { id: "baltit-fort", name: "Baltit Fort", descriptor: "Starting Point", icon: "castle", x: 40, y: 78, durationSec: 105 },
  { id: "karimabad", name: "Karimabad", descriptor: "Village", icon: "village", x: 31, y: 60, durationSec: 90 },
  { id: "altit-fort", name: "Altit Fort", descriptor: "Historic Fort", icon: "castle", x: 36, y: 44, durationSec: 80 },
  { id: "attabad-lake", name: "Attabad Lake", descriptor: "Lake", icon: "lake", x: 76, y: 44, durationSec: 120 },
  { id: "passu-cones", name: "Passu Cones", descriptor: "Viewpoint", icon: "peak", x: 42, y: 30, durationSec: 95 },
  { id: "hussaini-bridge", name: "Hussaini Bridge", descriptor: "Bridge", icon: "bridge", x: 62, y: 70, durationSec: 85 },
  { id: "khunjerab-pass", name: "Khunjerab Pass", descriptor: "Mountain Pass", icon: "pass", x: 88, y: 82, durationSec: 110 },
];

export const mountainLabels = [
  { id: "rakaposhi", name: "Rakaposhi", altitude: "7,788 m", x: 52, y: 11 },
  { id: "ultar-sar", name: "Ultar Sar", altitude: "7,388 m", x: 82, y: 19 },
];

/** ordered route through the world, in % coordinates */
export const routePoints = journeyStops.map((s) => ({ x: s.x, y: s.y }));
