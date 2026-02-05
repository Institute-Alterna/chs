interface MissionStatementProps {
  mission: string;
  extendedMission?: string;
}

export default function MissionStatement({
  mission,
  extendedMission,
}: MissionStatementProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="font-heading text-3xl font-semibold leading-tight text-white md:text-4xl">
        {mission}
      </p>
      {extendedMission && (
        <p className="mt-8 text-xl leading-relaxed text-grey-300">
          {extendedMission}
        </p>
      )}
    </div>
  );
}
