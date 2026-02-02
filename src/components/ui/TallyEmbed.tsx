const TALLY_FORM_ID_PATTERN = /^[a-zA-Z0-9_-]+$/;

export default function TallyEmbed({
  formId,
  title = "Application form",
}: {
  formId: string;
  title?: string;
}) {
  if (!TALLY_FORM_ID_PATTERN.test(formId)) {
    return null;
  }

  return (
    <iframe
      src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
      width="100%"
      height="500"
      title={title}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      loading="lazy"
      className="rounded-lg border-0"
    />
  );
}
