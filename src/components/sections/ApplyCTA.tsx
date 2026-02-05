"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import FadeInView from "@/components/ui/FadeInView";

export default function ApplyCTA({
  heading = "Ready to make an impact?",
  description = "Start a Computing Honour Society chapter at your school and empower the next generation of technologists.",
  label,
}: {
  heading?: string;
  description?: string;
  label?: string;
}) {
  return (
    <Section variant="dark">
      <Container className="text-center">
        <FadeInView>
          {label && <Label className="mb-4 block text-grey-500">{label}</Label>}
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
