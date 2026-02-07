const CHAPTER_ID_PATTERN = /^[a-z0-9-]+$/;

export default function ContactFormEmbed({
  chapterId,
  title = "Contact form",
}: {
  chapterId: string;
  title?: string;
}) {
  if (!CHAPTER_ID_PATTERN.test(chapterId)) {
    return null;
  }

  const url = new URL("https://tally.so/embed/1A7WKp");
  url.searchParams.set("alignLeft", "1");
  url.searchParams.set("hideTitle", "1");
  url.searchParams.set("transparentBackground", "1");
  url.searchParams.set("chapter", chapterId);

  return (
    <iframe
      src={url.toString()}
      width="100%"
      height="500"
      title={title}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      loading="lazy"
      className="rounded-lg border-0"
    />
  );
}
