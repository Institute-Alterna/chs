"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import type { Strategist } from "@/lib/types";

export default function StrategistGrid({
  strategists,
}: {
  strategists: Strategist[];
}) {
  if (strategists.length === 0) {
    return null;
  }

  return (
    <Section variant="light">
      <Container>
        <Heading as="h2" className="text-center">
          Our Strategists
        </Heading>

        <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strategists.map((s) => (
            <StaggerItem key={s._id} className="text-center">
              {s.photoUrl ? (
                <Image
                  src={s.photoUrl}
                  alt={s.name}
                  width={96}
                  height={96}
                  className="mx-auto size-24 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-grey-200 text-sm text-grey-400">
                  {s.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <Heading as="h4" className="mt-4">
                {s.name}
              </Heading>
              <Text size="sm" className="mt-1 text-grey-600">
                {s.roleLabel || s.role}
              </Text>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
