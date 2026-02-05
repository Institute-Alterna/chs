"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import StatCard from "@/components/ui/StatCard";
import FadeInView from "@/components/ui/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import type { ImpactStats } from "@/lib/types";

export default function Impact({ stats }: { stats: ImpactStats }) {
  const items = [
    { value: stats.chapters, label: "Active Chapters" },
    { value: `${stats.members}+`, label: "Members" },
    { value: stats.events, label: "Events Hosted" },
    { value: stats.countries, label: "Countries" },
  ];

  return (
    <Section variant="dark">
      <Container>
        <FadeInView>
          <div className="text-center">
            <Label className="mb-4 block text-grey-500">Impact</Label>
            <Heading as="h2">Our Impact</Heading>
          </div>
        </FadeInView>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <StatCard value={item.value} label={item.label} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView>
          <div className="mx-auto mt-12 flex aspect-[2/1] max-w-3xl items-center justify-center rounded-sm bg-grey-800 text-sm text-grey-400">
            Global chapter map — coming soon
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
