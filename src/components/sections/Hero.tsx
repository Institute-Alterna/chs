"use client";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import FadeInView from "@/components/ui/FadeInView";

interface HeroProps {
  backgroundImage?: string;
  label?: string;
}

export default function Hero({
  backgroundImage = "/hero-bg.webp",
  label,
}: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-end text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

      {/* Content - positioned at left bottom */}
      <div className="relative z-10 w-full px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          {label && (
            <FadeInView>
              <Label className="mb-4 block text-grey-400">{label}</Label>
            </FadeInView>
          )}
          <FadeInView>
            <Heading as="h1" variant="hero">
              Where obsession meets opportunity.
            </Heading>
          </FadeInView>
          <FadeInView delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-7 text-grey-300 sm:text-lg">
              The Computing Honour Society empowers students to deliver
              hyper-local tech education impact through school-based chapters
              worldwide.
            </p>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button variant="filled" href="/start">Start a Chapter</Button>
              <Button href="#chapters-teaser">
                Learn More
              </Button>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
