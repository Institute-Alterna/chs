"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import FadeInView from "@/components/ui/FadeInView";

const values = [
  {
    title: "Hyper-local Impact",
    description:
      "Make tangible differences in your own community. Every chapter is built to serve its school and surrounding area first.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#0066ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="12" r="4" />
        <path d="M16 28S6 20 6 12a10 10 0 0 1 20 0c0 8-10 16-10 16Z" />
      </svg>
    ),
  },
  {
    title: "Student-led Excellence",
    description:
      "Run by students, for students, with professional standards. Our strategist model puts passionate leaders in charge.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#0066ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4l4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" />
      </svg>
    ),
  },
  {
    title: "Global Network",
    description:
      "Part of something bigger while serving your school. CHS chapters can exist anywhere in the world, connected by a shared mission.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#0066ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="16" r="12" />
        <ellipse cx="16" cy="16" rx="6" ry="12" />
        <line x1="4" y1="16" x2="28" y2="16" />
      </svg>
    ),
  },
];

export default function ValueProps() {
  return (
    <Section variant="light" id="what-is-chs">
      <Container>
        <FadeInView>
          <Heading as="h2" className="text-center">
            What is CHS?
          </Heading>
          <Text
            size="lg"
            className="mx-auto mt-4 max-w-2xl text-center text-grey-600"
          >
            The Computing Honour Society is a student-run organisation
            focused on delivering hyper-local tech education impact through
            school-based chapters. We believe the most passionate students
            should lead the way.
          </Text>
        </FadeInView>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <StaggerItem
              key={value.title}
              className="flex flex-col items-start gap-4 rounded-xl bg-grey-100 p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-blue-600/10">
                {value.icon}
              </div>
              <Heading as="h3" className="text-xl">
                {value.title}
              </Heading>
              <Text className="text-grey-600">{value.description}</Text>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView>
          <Text
            size="sm"
            className="mt-12 text-center text-grey-400"
          >
            Backed by Institute Alterna
          </Text>
        </FadeInView>
      </Container>
    </Section>
  );
}
