"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import FadeInView from "@/components/ui/FadeInView";

export default function DirectoryTeaser() {
  return (
    <Section variant="light" id="chapters-teaser">
      <Container className="text-center">
        <FadeInView>
          <Label className="mb-4 block">Explore</Label>
          <Heading as="h2">Our Chapters</Heading>
          <Text size="lg" className="mx-auto mt-4 max-w-xl text-grey-600">
            Student-led chapters delivering hyper-local tech education impact in
            schools worldwide.
          </Text>
          <div className="mt-8">
            <Button variant="secondary" href="/chapters">
              Explore the Directory
            </Button>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
