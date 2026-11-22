import { useId } from "react";

type MithraMarkProps = {
  className?: string;
  /** Accessible label. Omit when the mark sits next to visible "MITHRA" text. */
  title?: string;
};

/**
 * The MITHRA brand mark: a soft, rounded "M" formed by two figures leaning
 * toward a shared point — two friends meeting in conversation.
 */
export function MithraMark({ className = "size-9", title }: MithraMarkProps) {
  const id = useId();
  const gradientId = `${id}-mark-gradient`;
  const glossId = `${id}-mark-gloss`;

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="0.55" stopColor="#7c5cf6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id={glossId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${gradientId})`} />
      <rect width="40" height="40" rx="12" fill={`url(#${glossId})`} />
      <path
        d="M11 27.5V15a2.6 2.6 0 0 1 4.7-1.5L20 19.6l4.3-6.1A2.6 2.6 0 0 1 29 15v12.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="28.4" r="2" fill="#ffffff" fillOpacity="0.9" />
    </svg>
  );
}

type MithraLogoProps = {
  className?: string;
  markClassName?: string;
};

/** Brand mark plus the MITHRA wordmark. */
export function MithraLogo({
  className = "",
  markClassName = "size-9",
}: MithraLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <MithraMark className={markClassName} />
      <span className="text-lg font-semibold tracking-[0.18em] text-foreground">
        MITHRA
      </span>
    </span>
  );
}
