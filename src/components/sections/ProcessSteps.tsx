"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import FadeInView from "@/components/ui/FadeInView";

const steps = [
  {
    number: "1",
    title: "Apply",
    description:
      "Submit your application with details about your school, your team, and your vision for a chapter.",
  },
  {
    number: "2",
    title: "Chat",
    description:
      "We review your application and schedule a conversation to learn more about you and your goals.",
  },
  {
    number: "3",
    title: "Find Your Fit",
    description:
      "Work with school administration to secure approval and identify the right home for your chapter.",
  },
  {
    number: "4",
    title: "Recruit Strategists",
    description:
      "Assemble your founding team of strategists — the passionate students who will lead alongside you.",
  },
  {
    number: "5",
    title: "Sign Agreements",
    description:
      "Finalise the charter and agreements that establish your chapter as an official CHS unit.",
  },
  {
    number: "6",
    title: "Go!",
    description:
      "Launch your chapter, host your first event, and start making an impact in your school community.",
  },
];

export default function ProcessSteps() {
  return (
    <Section variant="light">
      <Container>
        <FadeInView>
          <Heading as="h2" className="text-center">
            How It Works
          </Heading>
          <Text
            size="lg"
            className="mx-auto mt-4 max-w-xl text-center text-grey-600"
          >
            Starting a chapter is straightforward. Here&apos;s what to expect.
          </Text>
        </FadeInView>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {step.number}
              </div>
              <Heading as="h3" className="mt-6">
                {step.title}
              </Heading>
              <Text className="mt-3 text-grey-600">{step.description}</Text>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView>
          <div className="mt-12 text-center">
            <Button href="/start">Apply Now</Button>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
