"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface MissionStatementProps {
  mission: string;
  extendedMission?: string;
}

function Word({
  word,
  progress,
  range,
  dimColor,
  litColor,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  dimColor: string;
  litColor: string;
}) {
  const color = useTransform(progress, range, [dimColor, litColor]);
  return <motion.span style={{ color }}>{word} </motion.span>;
}

function ScrollRevealParagraph({
  text,
  progress,
  startAt,
  endAt,
  dimColor,
  litColor,
  className,
}: {
  text: string;
  progress: MotionValue<number>;
  startAt: number;
  endAt: number;
  dimColor: string;
  litColor: string;
  className?: string;
}) {
  const words = text.split(" ");
  const span = endAt - startAt;

  return (
    <p className={className}>
      {words.map((word, i) => {
        const wordStart = startAt + (i / words.length) * span;
        const wordEnd = startAt + ((i + 1) / words.length) * span;
        return (
          <Word
            key={i}
            word={word}
            progress={progress}
            range={[wordStart, wordEnd]}
            dimColor={dimColor}
            litColor={litColor}
          />
        );
      })}
    </p>
  );
}

export default function MissionStatement({
  mission,
  extendedMission,
}: MissionStatementProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const missionEnd = extendedMission ? 0.55 : 1;
  const extendedStart = 0.45;

  return (
    <div ref={containerRef} className="mx-auto max-w-4xl">
      <ScrollRevealParagraph
        text={mission}
        progress={scrollYProgress}
        startAt={0}
        endAt={missionEnd}
        dimColor="#2a2a2a"
        litColor="#ffffff"
        className="font-heading text-3xl font-semibold leading-tight md:text-4xl"
      />
      {extendedMission && (
        <ScrollRevealParagraph
          text={extendedMission}
          progress={scrollYProgress}
          startAt={extendedStart}
          endAt={1}
          dimColor="#2a2a2a"
          litColor="#a3a3a3"
          className="mt-4 text-xl leading-relaxed"
        />
      )}
    </div>
  );
}
