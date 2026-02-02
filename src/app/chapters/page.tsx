import type { Metadata } from "next";
import ChapterHero from "@/components/sections/ChapterHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ChapterDirectoryCard from "@/components/ui/ChapterDirectoryCard";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { getChapters } from "@/lib/sanity/fetchers";

export const metadata: Metadata = {
  title: "Our Chapters",
  description:
    "Explore Computing Honour Society chapters worldwide. Student-led impact, one school at a time.",
};

export default async function ChaptersPage() {
  const chapters = await getChapters();

  return (
    <>
      <ChapterHero
        title="Our Chapters"
        subtitle="Student-led impact, worldwide."
      />
      <Section variant="light">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter) => (
              <ChapterDirectoryCard key={chapter._id} chapter={chapter} />
            ))}
            <a href="/start" className="group block">
              <Card className="flex h-full flex-col items-center justify-center border border-dashed border-grey-200 text-center transition-colors duration-150 group-hover:border-blue-600">
                <div className="flex size-14 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <Heading as="h3" className="mt-4">
                  Start Your Own
                </Heading>
                <Text size="sm" className="mt-2 text-grey-600">
                  Bring CHS to your school and lead the next generation of
                  technologists.
                </Text>
              </Card>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
