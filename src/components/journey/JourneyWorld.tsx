import { useEffect, useMemo, useState } from "react";
import terrain from "@/assets/hunza-terrain.jpg";
import { journeyStops, mountainLabels } from "@/data/journey";
import { DestinationMarker } from "./DestinationMarker";
import { JourneyControls } from "./JourneyControls";
import { JourneyHeader } from "./JourneyHeader";
import { JourneyPlayer } from "./JourneyPlayer";
import { JourneyRoute } from "./JourneyRoute";
import { JourneyStops } from "./JourneyStops";
import { MapControls } from "./MapControls";
import { MountainLabel } from "./MountainLabel";
import { StartJourneyButton } from "./StartJourneyButton";

export function JourneyWorld() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [exploring, setExploring] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [zoom, setZoom] = useState(1);

  const active = journeyStops[activeIndex] ?? journeyStops[0]!;

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setElapsed((e) => (e >= active.durationSec ? active.durationSec : e + 1));
    }, 1000);
    return () => clearInterval(t);
  }, [playing, active.durationSec]);

  const select = (i: number) => {
    setActiveIndex(i);
    setElapsed(0);
    setStarted(true);
  };

  // camera framing: pan the world toward the active stop
  const camera = useMemo(() => {
    const scale = exploring ? zoom : zoom * 1.06;
    const dx = (50 - active.x) * (scale - 1) * 0.5;
    const dy = (50 - active.y) * (scale - 1) * 0.5;
    return { scale, dx: exploring ? 0 : dx, dy: exploring ? 0 : dy };
  }, [active.x, active.y, zoom, exploring]);

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-nv-void">
      {/* WORLD LAYER */}
      <div
        className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        style={{ transform: `scale(${camera.scale}) translate(${camera.dx}%, ${camera.dy}%)` }}
      >
        <img
          src={terrain}
          alt="Aerial cinematic view of Hunza Valley with the Karakoram mountains"
          width={1920}
          height={1408}
          className="h-full w-full object-cover"
        />
        <div className="nv-world-vignette absolute inset-0" />

        {/* world-anchored overlays */}
        <JourneyRoute activeIndex={started ? activeIndex : 0} />
        {mountainLabels.map((m) => (
          <MountainLabel key={m.id} {...m} />
        ))}
        <MountainLabel name="Passu Cones" x={33} y={12} />
        {journeyStops.map((stop, i) => (
          <DestinationMarker
            key={stop.id}
            stop={stop}
            active={started && i === activeIndex}
            onSelect={() => select(i)}
          />
        ))}
      </div>

      {/* UI OVERLAY */}
      <JourneyHeader />
      <JourneyStops stops={journeyStops} activeIndex={activeIndex} onSelect={select} />
      <MapControls
        onReset={() => {
          setZoom(1);
          setExploring(false);
        }}
        onZoomIn={() => setZoom((z) => Math.min(1.8, z + 0.15))}
        onZoomOut={() => setZoom((z) => Math.max(0.9, z - 0.15))}
        heading={exploring ? 24 : 0}
      />

      {started ? (
        <>
          <JourneyPlayer
            stop={active}
            elapsed={elapsed}
            playing={playing}
            thumbnail={terrain}
            onTogglePlay={() => setPlaying((p) => !p)}
            onPrev={() => select(Math.max(0, activeIndex - 1))}
            onNext={() => select(Math.min(journeyStops.length - 1, activeIndex + 1))}
          />
          <JourneyControls
            playing={playing}
            exploring={exploring}
            onTogglePlay={() => setPlaying((p) => !p)}
            onRestart={() => {
              setActiveIndex(0);
              setElapsed(0);
              setPlaying(true);
              setExploring(false);
            }}
            onExplore={() => {
              setExploring((e) => !e);
              setPlaying(false);
            }}
          />
        </>
      ) : (
        <StartJourneyButton
          onStart={() => {
            setStarted(true);
            setPlaying(true);
            setActiveIndex(0);
            setElapsed(0);
          }}
        />
      )}
    </main>
  );
}
