import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

type Review = {
  name: string;
  service: string;
  rating: number;
  quote: string;
};

type ReviewsSectionProps = {
  title: string;
  subtitle: string;
  linkHref: string;
  linkLabel: string;
  reviews: Review[];
  summaryLabel?: string;
};

export function ReviewsSection({
  title,
  subtitle,
  linkHref,
  linkLabel,
  reviews,
  summaryLabel = "from 120+ clients",
}: ReviewsSectionProps) {
  const average =
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
  const averageLabel = `${average.toFixed(1)} average`;
  const stars = "*****";

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </div>
        <Link
          href={linkHref}
          className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
        >
          {linkLabel}
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span className="text-[var(--accent-dark)]">{stars}</span>
        <span className="font-medium text-[var(--foreground)]">{averageLabel}</span>
        <span>{summaryLabel}</span>
      </div>

      <div className="grid gap-4 md:grid-cols-4 stagger">
        {reviews.slice(0, 4).map((review) => (
          <Card key={review.name} className="h-full">
            <CardContent className="space-y-4 p-6">
              <p className="text-sm text-muted-foreground">"{review.quote}"</p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-[var(--foreground)]">
                  {review.name}
                </span>{" "}
                - {review.service}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
