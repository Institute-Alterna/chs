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
    title: "Get Approved & Trained",
    description:
      "Our team reviews your application, provides feedback, and equips your founding strategists with everything they need.",
  },
  {
    number: "3",
    title: "Launch & Lead",
    description:
      "Start your chapter, host events, run workshops, and make a lasting impact in your school community.",
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
            Starting a chapter is straightforward. Here&apos;s what to
            expect.
          </Text>
        </FadeInView>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
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
              <Text className="mt-3 text-grey-600">
                {step.description}
              </Text>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView>
          <div className="mt-12 text-center">
            <Button href="/join">Apply Now</Button>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
