import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Label from "@/components/ui/Label";
import type { Strategist } from "@/lib/types";

export default function StrategistGrid({
  strategists,
}: {
  strategists: Strategist[];
}) {
  if (strategists.length === 0) {
    return (
      <Section variant="light">
        <Container>
          <div className="text-center">
            <Label className="mb-4 block">Leadership</Label>
            <Heading as="h2">Our Strategists</Heading>
            <p className="mt-8 text-grey-600">
              No strategists listed yet. Check back soon.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section variant="light">
      <Container>
        <div className="text-center">
          <Label className="mb-4 block">Leadership</Label>
          <Heading as="h2">Our Strategists</Heading>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strategists.map((s) => (
            <div key={s._id} className="rounded bg-grey-100 p-6 text-center">
              <div className="font-heading text-lg font-semibold text-black">
                {s.name}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-grey-600">
                {s.roleLabel || s.role}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
