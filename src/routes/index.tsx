import { createFileRoute } from "@tanstack/react-router";
import { JourneyWorld } from "@/components/journey/JourneyWorld";

const title = "NorthVerse 3D Journey — Hunza Valley";
const description =
  "A full-screen cinematic 3D journey through Hunza Valley: Baltit Fort, Attabad Lake, Passu Cones, Khunjerab Pass and more.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JourneyWorld,
});
