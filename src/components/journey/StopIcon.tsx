import { Castle, Home, Waves, Triangle, Footprints, Mountain } from "lucide-react";
import type { JourneyStop } from "@/data/journey";

const icons = {
  castle: Castle,
  village: Home,
  lake: Waves,
  peak: Triangle,
  bridge: Footprints,
  pass: Mountain,
} as const;

export function StopIcon({ icon, className }: { icon: JourneyStop["icon"]; className?: string }) {
  const Icon = icons[icon] ?? Mountain;
  return <Icon className={className} />;
}
