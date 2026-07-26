"use client";

import Script from "next/script";

export const AAIMUN_FORM_URL = "https://forms.alterna.dev/aaimun/26/chs";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const embedUrl = new URL(AAIMUN_FORM_URL);
embedUrl.searchParams.set("alignLeft", "1");
embedUrl.searchParams.set("hideTitle", "1");
embedUrl.searchParams.set("transparentBackground", "1");
embedUrl.searchParams.set("dynamicHeight", "1");

export default function AlternaFormEmbed() {
  const loadEmbed = () => {
    window.Tally?.loadEmbeds();
  };

  return (
    <div>
      <iframe
        data-tally-src={embedUrl.toString()}
        width="100%"
        height="1000"
        title="Start a conversation with the Computing Honour Society"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        scrolling="no"
        className="w-full overflow-hidden border-0"
      />
      <Script
        id="tally-embed"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onReady={loadEmbed}
      />
      <p className="mt-4 text-sm leading-5 text-grey-600">
        If the form does not load,{" "}
        <a
          href={AAIMUN_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline decoration-blue-400 underline-offset-4 hover:text-blue-500"
        >
          open it in a new tab
        </a>
        .
      </p>
    </div>
  );
}
