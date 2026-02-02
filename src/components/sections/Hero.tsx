"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeInView from "@/components/ui/FadeInView";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-black text-white">
      <Container className="py-20">
        <FadeInView>
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-[-0.02em] md:text-6xl lg:text-[64px] lg:leading-[72px]">
            Where obsession meets opportunity.
          </h1>
        </FadeInView>
        <FadeInView delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-7 text-grey-400">
            The Computing Honour Society empowers students to deliver
            hyper-local tech education impact through school-based chapters
            worldwide.
          </p>
        </FadeInView>
        <FadeInView delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/start">Start a Chapter</Button>
            <Button variant="secondary" href="#chapters-teaser">
              Learn More
            </Button>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
