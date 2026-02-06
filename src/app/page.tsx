import Hero from "@/components/sections/Hero";
import DirectoryTeaser from "@/components/sections/DirectoryTeaser";
import ChapterShowcase from "@/components/sections/ChapterShowcase";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Impact from "@/components/sections/Impact";
import AboutUs from "@/components/sections/AboutUs";
import ApplyCTA from "@/components/sections/ApplyCTA";
import { getImpactStats } from "@/lib/sanity/fetchers";

export default async function Home() {
  const stats = await getImpactStats();

  return (
    <>
      <Hero />
      <ChapterShowcase />
      <ProcessSteps />
      <DirectoryTeaser />
      <Impact stats={stats} />
      <AboutUs />
      <ApplyCTA />
    </>
  );
}
