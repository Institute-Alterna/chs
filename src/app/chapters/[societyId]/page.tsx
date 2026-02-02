import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ChapterHero from "@/components/sections/ChapterHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import StatCard from "@/components/ui/StatCard";
import TallyEmbed from "@/components/ui/TallyEmbed";
import StrategistGrid from "@/components/sections/StrategistGrid";
import ApplyCTA from "@/components/sections/ApplyCTA";
import {
  getChapterBySocietyId,
  getAllChapterSlugs,
} from "@/lib/sanity/fetchers";

export async function generateStaticParams() {
  const slugs = await getAllChapterSlugs();
  return slugs.map((societyId) => ({ societyId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ societyId: string }>;
}): Promise<Metadata> {
  const { societyId } = await params;
  const chapter = await getChapterBySocietyId(societyId);
  if (!chapter) return { title: "Chapter Not Found" };

  return {
    title: chapter.name,
    description: chapter.description,
  };
}

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<{ societyId: string }>;
}) {
  const { societyId } = await params;
  const chapter = await getChapterBySocietyId(societyId);

  if (!chapter) {
    notFound();
  }

  return (
    <>
      <ChapterHero title={chapter.name} subtitle={chapter.location} />

      <Section variant="light">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Text size="lg" className="text-grey-600">
              {chapter.description}
            </Text>

            {chapter.achievements.length > 0 && (
              <div className="mt-8">
                <Heading as="h3">Achievements</Heading>
                <ul className="mt-4 list-inside list-disc space-y-2 text-grey-600">
                  {chapter.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section variant="dark">
        <Container>
          <Heading as="h2" className="text-center">
            Chapter Impact
          </Heading>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">
            <StatCard
              value={`${chapter.stats.members}+`}
              label="Members"
            />
            <StatCard value={chapter.stats.events} label="Events" />
            {chapter.stats.workshops !== undefined && (
              <StatCard
                value={chapter.stats.workshops}
                label="Workshops"
              />
            )}
          </div>
        </Container>
      </Section>

      <StrategistGrid strategists={chapter.strategists} />

      {chapter.tallyContactFormId && (
        <Section variant="light">
          <Container>
            <div className="mx-auto max-w-2xl">
              <Heading as="h2" className="text-center">
                Get in Touch
              </Heading>
              <Text
                size="lg"
                className="mx-auto mt-4 max-w-xl text-center text-grey-600"
              >
                Have questions about {chapter.name}? Reach out to the chapter
                team.
              </Text>
              <div className="mt-8">
                <TallyEmbed
                  formId={chapter.tallyContactFormId}
                  title={`Contact ${chapter.name}`}
                />
              </div>
            </div>
          </Container>
        </Section>
      )}

      <ApplyCTA
        heading="Want to start your own chapter?"
        description="Join the Computing Honour Society network and bring student-led tech education to your school."
      />
    </>
  );
}
