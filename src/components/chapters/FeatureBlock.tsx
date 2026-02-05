import type { ChapterFeature } from "@/lib/types";

interface FeatureBlockProps {
  feature: ChapterFeature;
}

export default function FeatureBlock({ feature }: FeatureBlockProps) {
  return (
    <div className="rounded bg-grey-800 p-8">
      <h3 className="font-heading text-2xl font-semibold text-white">
        {feature.title}
      </h3>
      <p className="mt-4 text-grey-300">{feature.description}</p>
    </div>
  );
}
