"use client";

import Container from "@/components/ui/Container";
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
          <h1 className="max-w-3xl font-heading text-3xl font-bold tracking-[-0.02em] md:text-5xl lg:text-[56px] lg:leading-[64px]">
            {title}
          </h1>
        </FadeInView>
        {subtitle && (
          <FadeInView delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-7 text-grey-400">
              {subtitle}
            </p>
          </FadeInView>
        )}
      </Container>
    </section>
  );
}
