"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import Badge from "@/components/ui/Badge";
import FadeInView from "@/components/ui/FadeInView";

export default function ChapterHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="flex min-h-[50vh] items-center bg-black pt-16 text-white">
      <Container className="py-20">
        <FadeInView>
          <Label className="mb-4 block text-grey-500">Chapter</Label>
          <Heading as="h1" variant="h1">
            {title}
          </Heading>
        </FadeInView>
        {subtitle && (
          <FadeInView delay={0.1}>
            <div className="mt-6">
              <Badge variant="dark">{subtitle}</Badge>
            </div>
          </FadeInView>
        )}
      </Container>
    </section>
  );
}
