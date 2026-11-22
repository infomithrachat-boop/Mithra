import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  /** Use "inverse" on dark, brand-coloured panels. */
  tone?: "default" | "inverse";
};

const tones = {
  default: { eyebrow: "text-brand", title: "", description: "text-muted" },
  inverse: {
    eyebrow: "text-indigo-300",
    title: "text-white",
    description: "text-indigo-100/80",
  },
} as const;

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";
  const colors = tones[tone];

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${colors.eyebrow}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${colors.title}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-lg leading-relaxed text-pretty ${colors.description}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
