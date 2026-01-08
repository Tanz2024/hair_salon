type IllustrationProps = {
  className?: string;
  title?: string;
};

function BaseSvg({
  className,
  title,
  children,
}: IllustrationProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

export function ConsultationIllustration({
  className,
  title = "Consultation-led approach",
}: IllustrationProps) {
  return (
    <BaseSvg className={className} title={title}>
      <path d="M10 14.5c0-3 2.5-5.5 5.5-5.5h23c3 0 5.5 2.5 5.5 5.5v13c0 3-2.5 5.5-5.5 5.5H26l-7.5 6v-6H15.5c-3 0-5.5-2.5-5.5-5.5v-13z" />
      <path d="M16 18h16" />
      <path d="M16 23h11" />
      <path d="M36 34h14c2 0 4 2 4 4v14c0 2-2 4-4 4H34c-2 0-4-2-4-4V40" />
      <path d="M40 36.5v-2.2c0-1.3 1-2.3 2.3-2.3h3.4c1.3 0 2.3 1 2.3 2.3v2.2" />
      <path d="M38.8 42.5l1.6 1.6 3-3" />
      <path d="M46.5 43h5.5" />
      <path d="M38.8 48.5l1.6 1.6 3-3" />
      <path d="M46.5 49h5.5" />
      <path d="M50 16l.9 2.4L53.3 19l-2.4.9L50 22.3l-.9-2.4L46.7 19l2.4-.9L50 16z" />
    </BaseSvg>
  );
}

export function ProductRitualIllustration({
  className,
  title = "Premium product ritual",
}: IllustrationProps) {
  return (
    <BaseSvg className={className} title={title}>
      <path d="M28 10h8" />
      <path d="M30 10v6" />
      <path d="M34 10v6" />
      <path d="M26 16h12" />
      <path d="M25 16v34c0 3 2 5 5 5h4c3 0 5-2 5-5V16" />
      <path d="M27 26h10" />
      <path d="M27 30h10" />
      <path d="M47 29c3 4 5 6.5 5 9.2A6 6 0 0 1 40 38.2c0-2.7 2-5.2 7-9.2z" />
      <path d="M46 18l.8 2.2L49 21l-2.2.8L46 24l-.8-2.2L43 21l2.2-.8L46 18z" />
      <path d="M52 22l.6 1.7L54.3 24l-1.7.6L52 26.3l-.6-1.7L49.7 24l1.7-.6L52 22z" />
    </BaseSvg>
  );
}

export function PhotoReadyIllustration({
  className,
  title = "Results that photograph beautifully",
}: IllustrationProps) {
  return (
    <BaseSvg className={className} title={title}>
      <path d="M14 24h10l2.5-4h11L40 24h10c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V28c0-2.2 1.8-4 4-4z" />
      <circle cx="34" cy="37" r="7" />
      <path d="M34 32.5v1.8" />
      <path d="M29.5 37h1.8" />
      <path d="M34 39.7v1.8" />
      <path d="M36.7 37h1.8" />
      <path d="M46 28h4" />
      <path d="M10 30l-4-2" />
      <path d="M10 36H5" />
      <path d="M10 42l-4 2" />
      <path d="M52 14l1.1 3L56 18l-3 1.1L52 22l-1.1-3L48 18l3-1.1L52 14z" />
    </BaseSvg>
  );
}
