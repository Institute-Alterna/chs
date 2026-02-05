import type { Chapter } from "@/lib/types";
import ProductHero from "./ProductHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import Text from "@/components/ui/Text";
import SpecsGrid from "./SpecsGrid";
import FeatureBlock from "./FeatureBlock";
import StrategistGrid from "@/components/sections/StrategistGrid";
import TallyEmbed from "@/components/ui/TallyEmbed";
import ApplyCTA from "@/components/sections/ApplyCTA";

interface ProductChapterPageProps {
  chapter: Chapter;
}

export default function ProductChapterPage({
  chapter,
}: ProductChapterPageProps) {
  return (
    <>
      {/* 1. Product Hero */}
      <ProductHero
        name={chapter.name}
        tagline={chapter.tagline}
        chapterIndex={chapter.chapterIndex}
        stats={chapter.stats}
        founded={chapter.founded}
        location={chapter.location}
        heroImageUrl={chapter.heroImageUrl}
      />

      {/* 2. Overview */}
      <Section variant="dark">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Text size="lg" className="text-grey-300">
              {chapter.overview || chapter.description}
            </Text>
          </div>
        </Container>
      </Section>

      {/* 3. Specifications */}
      <Section variant="off-white">
        <Container>
          <div className="mb-12 text-center">
            <Label className="mb-4 block">Specifications</Label>
            <Heading as="h2">By the Numbers</Heading>
          </div>
          <div className="mx-auto max-w-4xl rounded bg-grey-900 p-8">
            <SpecsGrid
              stats={chapter.stats}
              founded={chapter.founded}
              location={chapter.location}
            />
          </div>
        </Container>
      </Section>

      {/* 4. Focus Areas */}
      <Section variant="dark">
        <Container>
          <div className="mb-12 text-center">
            <Label className="mb-4 block text-grey-500">Focus Areas</Label>
            <Heading as="h2">What We Do</Heading>
          </div>
          {chapter.features.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {chapter.features.map((feature) => (
                <FeatureBlock key={feature._key} feature={feature} />
              ))}
            </div>
          ) : (
            <p className="text-center text-grey-400">
              No focus areas listed yet. Check back soon.
            </p>
          )}
        </Container>
      </Section>

      {/* 5. Achievements */}
      <Section variant="off-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Label className="mb-4 block">Achievements</Label>
            <Heading as="h2">Key Accomplishments</Heading>
            {chapter.achievements.length > 0 ? (
              <ul className="mt-8 space-y-4">
                {chapter.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-4 text-lg text-grey-600"
                  >
                    <span className="mt-2 block size-2 flex-shrink-0 rounded-full bg-blue-600" />
                    {achievement}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-8 text-grey-600">
                No achievements listed yet. Check back soon.
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* 6. Leadership */}
      <StrategistGrid strategists={chapter.strategists} />

      {/* 7. Contact */}
      <Section variant="dark">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <Label className="mb-4 block text-grey-500">Connect</Label>
              <Heading as="h2">Get in Touch</Heading>
              <Text
                size="lg"
                className="mx-auto mt-4 max-w-xl text-grey-300"
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
              <p className="mt-8 text-center text-grey-400">
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
