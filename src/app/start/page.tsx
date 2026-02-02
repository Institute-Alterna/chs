import type { Metadata } from "next";
import ChapterHero from "@/components/sections/ChapterHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import TallyEmbed from "@/components/ui/TallyEmbed";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description:
    "Apply to start a Computing Honour Society chapter at your school. Open to students and administrators worldwide.",
};

export default function StartPage() {
  return (
    <>
      <ChapterHero
        title="Start a Chapter at Your School"
        subtitle="Whether you're a student or an administrator, we'll help you bring CHS to your community."
      />
      <Section variant="light">
        <Container>
          <div className="mx-auto max-w-2xl">
            <TallyEmbed
              formId="REPLACE_WITH_YOUR_TALLY_FORM_ID"
              title="Start a chapter application"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
