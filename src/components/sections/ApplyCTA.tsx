"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/ui/FadeInView";

export default function ApplyCTA({
  heading = "Ready to make an impact?",
  description = "Start a Computing Honour Society chapter at your school and empower the next generation of technologists.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <Section variant="dark">
      <Container className="text-center">
        <FadeInView>
          <Heading as="h2">{heading}</Heading>
          <Text size="lg" className="mx-auto mt-4 max-w-xl text-grey-400">
            {description}
          </Text>
          <div className="mt-8">
            <Button href="/start">Start a Chapter</Button>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
