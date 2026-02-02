"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FadeInView from "@/components/ui/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";

const chapters = [
  {
    name: "CHS Robinson",
    location: "Tampa, FL",
    description:
      "One of our founding chapters, driving tech education impact across the Robinson community.",
    stats: ["15+ members", "3 workshops hosted", "Founded 2024"],
  },
  {
    name: "CHS Lakes",
    location: "Tampa, FL",
    description:
      "Bringing hands-on computing experiences to students at Lakes, with a focus on accessibility and inclusion.",
    stats: ["10+ members", "2 community events", "Founded 2024"],
  },
];

export default function ChaptersSpotlight() {
  return (
    <Section variant="dark">
      <Container>
        <FadeInView>
          <Heading as="h2" className="text-center">
            Our Chapters
          </Heading>
          <Text
            size="lg"
            className="mx-auto mt-4 max-w-xl text-center text-grey-400"
          >
            Student-led chapters delivering real impact in their communities.
          </Text>
        </FadeInView>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2">
          {chapters.map((chapter) => (
            <StaggerItem key={chapter.name}>
              <Card className="bg-grey-800">
                <ImagePlaceholder
                  aspectRatio="16/9"
                  label={chapter.name}
                  className="mb-6"
                />
                <div className="mb-2 flex items-center gap-3">
                  <Heading as="h3">{chapter.name}</Heading>
                  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">
                    {chapter.location}
                  </span>
                </div>
                <Text className="text-grey-400">
                  {chapter.description}
                </Text>
                <div className="mt-4 flex flex-wrap gap-3">
                  {chapter.stats.map((stat) => (
                    <span
                      key={stat}
                      className="text-sm text-grey-600"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView>
          <div className="mt-12 text-center">
            <Button variant="secondary" href="/chapters">
              View All Chapters
            </Button>
          </div>
        </FadeInView>
      </Container>
    </Section>
  );
}
