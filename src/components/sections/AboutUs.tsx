"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import FadeInView from "@/components/ui/FadeInView";

export default function AboutUs() {
  return (
    <Section variant="light" id="about">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeInView>
            <Heading as="h2">About Us</Heading>
          </FadeInView>
          <FadeInView delay={0.1}>
            <Text size="lg" className="mt-6 text-grey-600">
              The Computing Honour Society was founded to bridge the gap between
              what students learn in the classroom and what they need to thrive
              in a technology-driven world. We believe the most meaningful change
              happens at the local level — in your school, your community, your
              neighbourhood.
            </Text>
          </FadeInView>
          <FadeInView delay={0.2}>
            <Text size="lg" className="mt-4 text-grey-600">
              Every CHS chapter is student-led and held to professional
              standards. Our strategists — not officers, not board members —
              design and deliver workshops, mentorship, and community outreach
              tailored to the needs of their schools.
            </Text>
          </FadeInView>
          <FadeInView delay={0.3}>
            <Text size="sm" className="mt-8 text-grey-400">
              Backed by Institute Alterna, a student-run international
              organisation.
            </Text>
          </FadeInView>
        </div>
      </Container>
    </Section>
  );
}
