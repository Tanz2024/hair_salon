import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ADD_ONS, IMAGES, REVIEWS, SERVICES, SITE } from "@/lib/site-data";

export default function ServicesPage() {
  const featuredReview = REVIEWS[2];

  return (
    <div className="bg-[var(--background)] px-6 py-16 fade-in">
      <div className="mx-auto max-w-6xl space-y-14">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Hair services you’ll actually love.
            </h1>

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Prices are starting points. Final cost depends on your hair length,
              thickness, and the look you want. We’ll confirm everything before we
              start.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/book" className={buttonVariants({ size: "lg" })}>
                Book Appointment
              </Link>
              <Link
                href="/gallery"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                See Results
              </Link>
            </div>
          </div>

          {/* Quick notes */}
          <Card className="bg-[var(--secondary)]">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Included in every visit</CardTitle>
              <CardDescription>Simple, smooth, and consistent.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between gap-4">
                <span>Quick consult</span>
                <span className="text-[var(--accent-dark)]">Yes</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Wash + finish</span>
                <span className="text-[var(--accent-dark)]">Yes</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Time needed</span>
                <span className="text-[var(--accent-dark)]">Varies</span>
              </div>

              <div className="pt-2 text-xs">
                Need help? Call <span className="font-medium">{SITE.phone}</span>.
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[var(--secondary)]/60">
          <CardContent className="space-y-3 py-6 text-center text-sm text-muted-foreground">
            <div className="text-[var(--accent-dark)]">*****</div>
            <p>"{featuredReview.quote}"</p>
            <div className="text-xs uppercase tracking-[0.22em]">
              {featuredReview.name} · {featuredReview.service}
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl">Pick what you need.</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Starting prices • total confirmed in the chair
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 stagger">
            {SERVICES.map((service, index) => (
              <Card key={service.title} className="group flex h-full flex-col overflow-hidden">
                <div className="relative h-44 w-full">
                  <Image
                    src={IMAGES.serviceIllustrations[index]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 30vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.20)] via-transparent to-transparent opacity-70" />
                </div>

                <CardHeader className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="font-serif text-2xl leading-snug">
                      {service.title}
                    </CardTitle>
                    <Badge variant="accent" className="shrink-0">
                      From {service.startingAt}
                    </Badge>
                  </div>

                  {/* Optional: if you want more “human” text, you can also simplify descriptions inside site-data */}
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="mt-auto space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Time estimate</span>
                    <span className="font-medium text-[var(--foreground)]">
                      {service.timeEstimate}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      What's included
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.included.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--accent-dark)] opacity-60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-[var(--accent-dark)] opacity-60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-lg bg-[var(--secondary)] px-3 py-2 text-xs text-muted-foreground">
                    Maintenance:{" "}
                    <span className="font-medium text-[var(--foreground)]">
                      {service.maintenance}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href="/book"
                      className="text-sm font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
                    >
                      Book Appointment
                    </Link>
                    <span className="text-xs text-muted-foreground">Depends on hair type</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Add-ons
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl">Extra care, anytime.</h2>
            </div>
            <span className="text-sm text-muted-foreground">Add this to any service</span>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid gap-0 md:grid-cols-2">
                {ADD_ONS.map((addon, i) => (
                  <div
                    key={addon.title}
                    className={[
                      "flex items-center justify-between gap-6 px-6 py-4",
                      "border-[color-mix(in_oklab,var(--accent-dark),transparent_86%)]",
                      i % 2 === 0 ? "md:border-r" : "",
                      i < ADD_ONS.length - 2 ? "border-b md:border-b-0" : "md:border-b-0",
                      i < ADD_ONS.length - 1 ? "md:border-b" : "",
                    ].join(" ")}
                  >
                    <div className="space-y-1">
                      <div className="text-sm font-medium">{addon.title}</div>
                      <div className="text-xs text-muted-foreground">Add during booking</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{addon.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer note */}
        <div className="pt-8 text-sm text-muted-foreground">
          Not sure what to book? Choose a{" "}
          <Link
            href="/consultation"
            className="font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
          >
            discovery visit
          </Link>{" "}
          and we’ll guide you.
        </div>
      </div>
    </div>
  );
}
