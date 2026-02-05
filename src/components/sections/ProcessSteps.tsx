"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import FadeInView from "@/components/ui/FadeInView";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application with details about your school, your team, and your vision for a chapter.",
  },
  {
    number: "02",
    title: "Chat",
    description:
      "We review your application and schedule a conversation to learn more about you and your goals.",
  },
  {
    number: "03",
    title: "Find Your Fit",
    description:
      "Work with your school's administration to secure approval and identify how your chapter may work.",
  },
  {
    number: "04",
    title: "Recruit Your Crew",
    description:
      "Assemble your founding team of strategists: the passionate students who will lead alongside you.",
  },
  {
    number: "05",
    title: "Sign",
    description:
      "Finalise the charter and agreements that establish your chapter as an official CHS unit.",
  },
  {
    number: "06",
    title: "Launch!",
    description:
      "Host your first sessions, and start making an impact in your school community!",
  },
];

export default function ProcessSteps() {
  return (
    <Section variant="off-white">
      <Container>
        <FadeInView>
          <div className="text-center">
            <Label className="mb-4 block">The Process</Label>
            <Heading as="h2">How It Works</Heading>
            <Text
              size="lg"
              className="mx-auto mt-4 max-w-xl text-grey-600"
            >
              Starting a chapter is straightforward. Here&apos;s what to expect.
            </Text>
          </div>
        </FadeInView>

        <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div className="flex size-12 items-center justify-center rounded-sm bg-blue-600 font-mono text-sm font-medium text-white">
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
