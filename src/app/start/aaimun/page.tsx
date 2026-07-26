import type { Metadata } from "next";
import Image from "next/image";
import AlternaFormEmbed from "@/components/ui/AlternaFormEmbed";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";

export const metadata: Metadata = {
  title: "Your Next Chapter After AAIMUN 2026",
  description:
    "Turn the ideas and leadership you brought to AAIMUN into practical computing impact. Start a Computing Honour Society chapter at your school.",
  openGraph: {
    title: "The conference ends. Your next chapter starts here.",
    description:
      "Bring student-led computing workshops, competitions, and community impact to your school with the Computing Honour Society.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Next Chapter After AAIMUN 2026",
    description:
      "Turn ideas into practical computing impact at your school with the Computing Honour Society.",
  },
};

const strategistRoles = [
  {
    number: "01",
    title: "Principal Strategist",
    description:
      "Sets chapter direction, coordinates the team, and keeps local work aligned with CHS standards.",
  },
  {
    number: "02",
    title: "Academic Strategist",
    description:
      "Shapes workshops, learning pathways, and the technical development of every member.",
  },
  {
    number: "03",
    title: "Competition Strategist",
    description:
      "Leads preparation, entries, practice, and constructive review across technical competitions.",
  },
  {
    number: "04",
    title: "Community Strategist",
    description:
      "Builds an inclusive member experience and connects chapter knowledge with the wider community.",
  },
];

const readinessPoints = [
  "Support from your school or host institution",
  "Four students ready to serve as Strategists",
  "At least ten interested students before launch",
  "A clear plan for learning and community engagement",
];

export default function AAIMUNStartPage() {
  return (
    <>
      <section className="bg-blue-600 pb-16 pt-28 text-white md:pb-24 md:pt-36">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Label className="text-white">For AAIMUN 2026 delegates</Label>
              <Heading
                as="h1"
                variant="hero"
                className="mt-5 max-w-3xl text-balance"
              >
                The conference ends. Your next chapter starts here.
              </Heading>
              <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100">
                You have debated how technology can shape the world. The
                Computing Honour Society gives you a practical way to build
                skills, lead peers, and serve your community at school.
              </p>
              <a
                href="#conversation"
                className="mt-9 inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Start a conversation
              </a>
            </div>

            <figure>
              <div className="overflow-hidden rounded-sm bg-blue-500">
                <Image
                  src="/start/aaimun/chs-team.webp"
                  alt="Computing Honour Society students gathered together on a stairway"
                  width={1600}
                  height={1067}
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="aspect-[3/2] h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-blue-100">
                Student-led, locally built
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-black md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="overflow-hidden rounded-sm bg-grey-100">
              <Image
                src="/start/aaimun/student-leader.webp"
                alt="A Computing Honour Society student leader standing outdoors"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>

            <div>
              <Label>What is CHS?</Label>
              <Heading as="h2" className="mt-4 max-w-2xl">
                Turn ideas into local impact.
              </Heading>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-grey-600">
                The Computing Honour Society is a student-led network creating
                accessible pathways into computer science, cybersecurity, and
                computational thinking. Chapters turn curiosity into serious,
                useful work through workshops, competitions, collaborative
                projects, teaching, and mentorship.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-grey-600">
                Technical excellence matters, but so does what you do with it.
                CHS members learn to lead ethically, make difficult concepts
                accessible, and share their skills beyond the chapter.
              </p>

              <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-grey-200 bg-grey-200 sm:grid-cols-3">
                <div className="bg-white p-5">
                  <dt className="font-heading text-base font-semibold">
                    Learn deeply
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-grey-600">
                    Bridge technical theory with practical work.
                  </dd>
                </div>
                <div className="bg-white p-5">
                  <dt className="font-heading text-base font-semibold">
                    Lead ethically
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-grey-600">
                    Build with responsibility and sound judgement.
                  </dd>
                </div>
                <div className="bg-white p-5">
                  <dt className="font-heading text-base font-semibold">
                    Share locally
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-grey-600">
                    Teach, mentor, and strengthen your community.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-16 text-black md:py-24">
        <Container>
          <div className="max-w-3xl">
            <Label>The Strategist model</Label>
            <Heading as="h2" className="mt-4">
              Four Strategists. One serious team.
            </Heading>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-grey-600">
              CHS chapters do not collect traditional officer titles. Each
              Strategist owns a clear part of the work, whilst the team shares
              responsibility for a chapter built to last.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-grey-200 bg-grey-200 md:grid-cols-2">
            {strategistRoles.map((role) => (
              <article key={role.title} className="bg-white p-6 md:p-8">
                <span className="font-mono text-xs font-medium text-blue-600">
                  {role.number}
                </span>
                <Heading as="h3" className="mt-5">
                  {role.title}
                </Heading>
                <p className="mt-3 max-w-xl leading-7 text-grey-600">
                  {role.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-black md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <figure>
              <div className="overflow-hidden rounded-sm bg-grey-100">
                <Image
                  src="/start/aaimun/technical-work.webp"
                  alt="Computing Honour Society students working together at computers"
                  width={1600}
                  height={1067}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-grey-500">
                Learn by doing
              </figcaption>
            </figure>
            <figure>
              <div className="overflow-hidden rounded-sm bg-grey-100">
                <Image
                  src="/start/aaimun/collaboration.webp"
                  alt="Computing Honour Society students collaborating around computers"
                  width={1600}
                  height={1067}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-grey-500">
                Build as a team
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section
        id="conversation"
        className="scroll-mt-16 bg-off-white py-16 text-black md:py-24"
      >
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-24">
              <Label>Your next step</Label>
              <Heading as="h2" className="mt-4">
                Bring CHS to your school.
              </Heading>
              <p className="mt-5 max-w-xl text-lg leading-8 text-grey-600">
                Tell us what you want to build and where you want to build it.
                We will start with a conversation about your school, your team,
                and the impact you want to make.
              </p>

              <ul className="mt-9 divide-y divide-grey-200 border-y border-grey-200">
                {readinessPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-4 py-4 text-sm leading-6 text-grey-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-grey-200 bg-white p-5 sm:p-8">
              <AlternaFormEmbed />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
