import type { Chapter } from "@/lib/types";
import FlagshipHero from "./FlagshipHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import MissionStatement from "./MissionStatement";
import StatCard from "@/components/ui/StatCard";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import FeatureBlock from "./FeatureBlock";
import StrategistGrid from "@/components/sections/StrategistGrid";
import TallyEmbed from "@/components/ui/TallyEmbed";
import Text from "@/components/ui/Text";
import ApplyCTA from "@/components/sections/ApplyCTA";

interface FlagshipChapterPageProps {
  chapter: Chapter;
}

export default function FlagshipChapterPage({
  chapter,
}: FlagshipChapterPageProps) {
  // Robinson-specific hardcoded content
  const isRobinson = chapter.societyId === "robinson";
  const extendedMission = isRobinson
    ? "As the founding chapter, we pioneered the model of student-led tech education that now spans schools worldwide."
    : undefined;

  return (
    <>
      {/* 1. Flagship Hero */}
      <FlagshipHero
        name={chapter.name}
        tagline={chapter.tagline}
        location={chapter.location}
        chapterIndex={chapter.chapterIndex}
        heroImageUrl={chapter.heroImageUrl}
        isRobinson={isRobinson}
      />

      {/* 2. Mission Statement */}
      <Section variant="dark">
        <Container>
          <MissionStatement
            mission={chapter.mission}
            extendedMission={extendedMission}
          />
        </Container>
      </Section>

      {/* 3. Impact Stats */}
      <Section variant="dark">
        <Container>
          <div className="text-center">
            <Label className="mb-4 block text-grey-500">Impact</Label>
            <Heading as="h2">Chapter Impact</Heading>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:flex lg:justify-center lg:gap-16">
            <StatCard value={`${chapter.stats.members}+`} label="Members" />
            <StatCard value={chapter.stats.events} label="Events" />
            {chapter.stats.workshops !== undefined && (
              <StatCard value={chapter.stats.workshops} label="Workshops" />
            )}
          </div>
        </Container>
      </Section>

      {/* 4. Focus Areas */}
      <Section variant="off-white">
        <Container>
          <div className="mb-12 text-center">
            <Label className="mb-4 block">Focus Areas</Label>
            <Heading as="h2">What We Do</Heading>
          </div>
          {chapter.features.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {chapter.features.map((feature) => (
                <FeatureBlock key={feature._key} feature={feature} />
              ))}
            </div>
          ) : (
            <p className="text-center text-grey-600">
              No focus areas listed yet. Check back soon.
            </p>
          )}
        </Container>
      </Section>

      {/* 5. Achievements */}
      <Section variant="dark">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Label className="mb-4 block text-grey-500">Achievements</Label>
            <Heading as="h2">Key Accomplishments</Heading>
            {chapter.achievements.length > 0 ? (
              <ul className="mt-8 space-y-4">
                {chapter.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-4 text-lg text-grey-300"
                  >
                    <span className="mt-2 block size-2 flex-shrink-0 rounded-full bg-blue-600" />
                    {achievement}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-8 text-grey-400">
                No achievements listed yet. Check back soon.
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* 6. Leadership */}
      <StrategistGrid strategists={chapter.strategists} />

      {/* 7. Contact Form */}
      <Section variant="off-white">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <Label className="mb-4 block">Connect</Label>
              <Heading as="h2">Get in Touch</Heading>
              <Text
                size="lg"
                className="mx-auto mt-4 max-w-xl text-grey-600"
              >
                Have questions about {chapter.name}? Reach out to the chapter
                team.
              </Text>
            </div>
            {chapter.tallyContactFormId ? (
              <div className="mt-8">
                <TallyEmbed
                  formId={chapter.tallyContactFormId}
                  title={`Contact ${chapter.name}`}
                />
              </div>
            ) : (
              <p className="mt-8 text-center text-grey-600">
                Contact form coming soon.
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* 8. CTA */}
      <ApplyCTA
        heading="Want to start your own chapter?"
        description="Join the Computing Honour Society network and bring student-led tech education to your school."
        label="Join Us"
      />
    </>
  );
}
