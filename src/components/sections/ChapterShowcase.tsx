"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Badge from "@/components/ui/Badge";
import FadeInView from "@/components/ui/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";

const chapterData = {
  name: "CHS Robinson",
  location: "Tampa, FL",
  founded: "2024",
  description:
    "Our flagship chapter, setting the standard for student-led tech education impact across the network.",
  stats: [
    { value: "25+", label: "Members" },
    { value: "12", label: "Events" },
    { value: "8", label: "Workshops" },
  ],
  achievements: [
    "Hosted first regional hackathon with 100+ participants",
    "Partnered with local tech companies for mentorship programme",
    "Launched after-school coding bootcamp for middle school students",
    "Represented at state-wide STEM fair",
  ],
  strategists: [
    { role: "Principal Strategist" },
    { role: "Academic Strategist" },
    { role: "Community Strategist" },
    { role: "Competition Strategist" },
  ],
};

export default function ChapterShowcase() {
  return (
    <Section variant="dark">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Hero Content */}
          <div>
            <FadeInView>
              <Label className="mb-4 block text-grey-500">Featured Chapter</Label>
              <Heading as="h2" variant="h1">
                {chapterData.name}
              </Heading>
            </FadeInView>
            <FadeInView delay={0.1}>
              <div className="mt-4 flex items-center gap-3">
                <Badge variant="dark">{chapterData.location}</Badge>
                <span className="text-sm text-grey-500">
                  Est. {chapterData.founded}
                </span>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <Text size="lg" className="mt-6 text-grey-300">
                {chapterData.description}
              </Text>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="mt-8">
                <Button href="/chapters/robinson">View Chapter</Button>
              </div>
            </FadeInView>

            {/* Strategists */}
            <FadeInView delay={0.4}>
              <div className="mt-12">
                <Label className="mb-4 block text-grey-500">Leadership</Label>
                <div className="flex flex-wrap gap-4">
                  {chapterData.strategists.map((strategist) => (
                    <div
                      key={strategist.role}
                      className="flex items-center gap-3"
                    >
                      <div className="flex size-10 items-center justify-center rounded-sm bg-grey-800 text-xs font-medium text-grey-400">
                        {strategist.role
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="text-sm text-grey-400">
                        {strategist.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Column - Stats and Achievements */}
          <div>
            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-3 gap-4">
              {chapterData.stats.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  className="rounded-sm bg-grey-900 p-6 text-center"
                >
                  <div className="font-heading text-3xl font-bold text-blue-600 md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="font-mono-label mt-2 text-grey-500">
                    {stat.label}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Achievements */}
            <FadeInView delay={0.3}>
              <div className="mt-8">
                <Label className="mb-4 block text-grey-500">Achievements</Label>
                <ul className="space-y-3">
                  {chapterData.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-grey-300"
                    >
                      <span className="mt-1.5 block size-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>

            {/* Placeholder for future image/visual */}
            <FadeInView delay={0.4}>
              <div className="mt-8 flex aspect-video items-center justify-center rounded-sm bg-grey-800 text-sm text-grey-500">
                Chapter imagery — coming soon
              </div>
            </FadeInView>
          </div>
        </div>
      </Container>
    </Section>
  );
}
