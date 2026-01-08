import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GALLERY, IMAGES, REVIEWS, SERVICES, SITE } from "@/lib/site-data";
import {
  ConsultationIllustration,
  PhotoReadyIllustration,
  ProductRitualIllustration,
} from "@/components/Illustrations";
import { BeforeAfterSlider } from "@/components/site/before-after-slider";
import { ReviewsSection } from "@/components/site/reviews-section";

export default function HomePage() {
  const beforeAfterItems = [
    {
      title: "Soft balayage refresh",
      detail: "Neutralize brass and lift dimension.",
      before: IMAGES.gallery[0],
      after: IMAGES.gallery[1],
    },
    {
      title: "Modern bob reset",
      detail: "Sharper shape and glossy finish.",
      before: IMAGES.gallery[3],
      after: IMAGES.gallery[4],
    },
    {
      title: "Gloss + tone shift",
      detail: "Richer brunette with shine.",
      before: IMAGES.gallery[5],
      after: IMAGES.gallery[6],
    },
  ];
  const featuredReview = REVIEWS[0];

  return (
    <div className="bg-[var(--background)]">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 fade-in">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#fdf9f2_0%,_#f4efe6_55%,_#efe2d0_100%)]" />
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[rgba(176,118,58,0.16)] blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100svh-88px)] max-w-6xl items-center gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-12">
          <div className="space-y-5 md:pr-4">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Hair studio · {SITE.neighborhood}
            </p>

      <h1 className="font-serif text-[38px] font-semibold leading-[1.02] tracking-[-0.02em] text-[color-mix(in_oklab,var(--foreground),#000_8%)] sm:text-[50px] lg:text-[64px]">
        {SITE.name}
      </h1>

            <p className="font-script text-2xl text-[var(--accent-dark)] sm:text-3xl">
              {SITE.tagline}
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Elevated color, precision cutting, and signature styling—crafted for easy wear and a finish that stays polished.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/book" className={buttonVariants({ size: "lg" })}>
                Book Appointment
              </Link>
              <Link
                href="/services"
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                View Services
              </Link>
            </div>
          </div>

          <Card className="relative overflow-hidden">
            <div className="relative w-full overflow-hidden rounded-[inherit]">
        <div className="relative h-[60vh] max-h-[620px] w-full md:h-[78vh] md:max-h-[700px]">
          <Image
            src="/hero_image.png"
            alt="Salon hero"
            fill
            className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,20,20,0.18)] via-transparent to-transparent" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="px-6 py-14 fade-up">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 stagger">
          {[
            {
              title: "Discovery-led approach",
              detail:
                "We align on tone, maintenance, and inspiration so you leave with a roadmap that fits your schedule.",
              Icon: ConsultationIllustration,
            },
            {
              title: "Premium product ritual",
              detail:
                "Professional systems selected for shine, strength, and color longevity with no one-size-fits-all.",
              Icon: ProductRitualIllustration,
            },
            {
              title: "Results that photograph beautifully",
              detail:
                "Soft dimension, clean lines, and polished styling crafted to look flawless in natural light.",
              Icon: PhotoReadyIllustration,
            },
          ].map(({ title, detail, Icon }) => (
            <Card key={title} className="h-full">
              <CardHeader className="items-center space-y-4 text-center">
                <Icon className="h-14 w-14 text-[var(--accent-dark)] opacity-70" />
                <CardTitle className="font-serif text-xl">{title}</CardTitle>
                <CardDescription>{detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* MID TESTIMONIAL */}
      <section className="px-6 pb-4 pt-6 fade-up">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-[var(--secondary)]/60">
            <CardContent className="space-y-3 py-6 text-center text-sm text-muted-foreground">
              <div className="text-[var(--accent-dark)]">*****</div>
              <p>"{featuredReview.quote}"</p>
              <div className="text-xs uppercase tracking-[0.22em]">
                {featuredReview.name} · {featuredReview.service}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

{/* SERVICES */}
      <section className="px-6 py-16 fade-up">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">
                A curated menu for modern hair.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                From dimensional color to clean, wearable cuts—each service is designed for consistency, comfort, and
                lasting finish.
              </p>
            </div>
            <Link href="/services" className="text-sm font-medium text-[var(--accent)] hover:opacity-80">
              Explore full menu →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 stagger">
            {SERVICES.slice(0, 3).map((service, index) => (
              <Card key={service.title} className="overflow-hidden">
                <div className="relative h-44 w-full">
                  <Image
                    src={IMAGES.serviceIllustrations[index]}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 30vw, 90vw"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      Starting at{" "}
                      <span className="font-semibold text-[var(--foreground)]">
                        {service.startingAt}
                      </span>
                    </span>
                    <span>{service.timeEstimate}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      What's included
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--accent-dark)] opacity-60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-[var(--secondary)] px-3 py-2 text-xs text-muted-foreground">
                    Maintenance:{" "}
                    <span className="font-medium text-[var(--foreground)]">
                      {service.maintenance}
                    </span>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    {service.items.slice(0, 3).map((item) => (
                      <Badge key={item} variant="muted">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <Link href="/book" className="text-sm font-medium text-[var(--accent)] hover:opacity-80">
                    Book Appointment
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    {/* STYLIST (LAYOUT FIX) */}
<section className="px-6 py-16 fade-up">
  <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
    {/* LEFT: copy */}
    <div className="space-y-4 md:pt-6">
      <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
        Meet your stylist
      </p>

      <h2 className="font-serif text-3xl leading-[1.05] sm:text-4xl">
        Signature work backed by serious credentials.
      </h2>

      <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
        With 15+ years behind the chair, Aurore blends fashion-week polish with a
        warm, low-pressure experience. Expect a detailed game plan, honest guidance,
        and hair that grows out beautifully.
      </p>
    </div>

    {/* RIGHT: single unified card */}
    <Card className="overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full bg-[var(--secondary)]">
        <Image
          src="/specialist1.png"
          alt="Aurore S. stylist portrait"
          fill
          className="object-cover object-[50%_18%]"
          sizes="(min-width: 768px) 40vw, 90vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,20,20,0.10)] via-transparent to-transparent" />
      </div>

      {/* Name + role */}
      <CardHeader className="space-y-2">
        <CardTitle className="font-serif text-2xl">Aurore S.</CardTitle>
        <CardDescription>Master colorist + texture specialist</CardDescription>
      </CardHeader>

      {/* Details */}
      <CardContent className="space-y-4">
        <div className="grid gap-3 text-sm text-muted-foreground">
          <div className="flex items-center justify-between gap-6">
            <span>Experience</span>
            <span className="font-medium text-[var(--foreground)]">15+ years</span>
          </div>

          <div className="flex items-center justify-between gap-6">
            <span>Certifications</span>
            <span className="font-medium text-[var(--foreground)]">
              Wella Master Color Expert
            </span>
          </div>

          <div className="flex items-center justify-between gap-6">
            <span>Training</span>
            <span className="font-medium text-[var(--foreground)]">
              Vidal Sassoon precision
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Lived-in blondes",
            "Brunette dimension",
            "Precision bobs",
            "Extension blending",
          ].map((item) => (
            <Badge key={item} variant="muted">
              {item}
            </Badge>
          ))}
        </div>

        {/* Optional: small CTA to balance the card */}
        <div className="pt-1">
          <Link
            href="/book"
            className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
          >
            Book Appointment
          </Link>
        </div>
      </CardContent>
    </Card>
  </div>
</section>


      {/* BEFORE + AFTER */}
      <section className="px-6 py-16 fade-up">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">
                Before + after that feels like you.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Slide to see the transformation, tone refinement, and styling
                finish clients love most.
              </p>
            </div>
            <Link href="/gallery" className="text-sm font-medium text-[var(--accent)] hover:opacity-80">
              View more transformations {"->"}
            </Link>
          </div>

          <BeforeAfterSlider items={beforeAfterItems} />
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-16 fade-up">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">Work that speaks for itself.</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Explore dimensional color, seamless blends, and finishes designed to look natural—never overdone.
              </p>
            </div>
            <Link href="/gallery" className="text-sm font-medium text-[var(--accent)] hover:opacity-80">
              View full gallery →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {GALLERY.slice(0, 6).map((item, index) => (
              <Card key={item.title} className="overflow-hidden">
                <div className="group relative">
                  <div className="relative h-52">
                    <Image
                      src={IMAGES.gallery[index]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.18)] via-transparent to-transparent opacity-70" />
                  </div>

                  <div className="flex items-center justify-between px-4 py-3 text-sm">
                    <span className="font-medium">{item.title}</span>
                    <Badge variant="accent">{item.tag}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-16 fade-up">
        <div className="mx-auto max-w-6xl">
          <ReviewsSection
            title="Reviews clients trust."
            subtitle="Soft blends, clean cuts, and a calm experience start to finish."
            linkHref="https://www.google.com/search?q=Jackvilla+Dallas+reviews"
            linkLabel="Read all reviews ->"
            reviews={REVIEWS}
            summaryLabel="from 120+ guests"
          />
        </div>
      </section>

      {/* LOCATION + CTA */}
      <section className="px-6 py-16 fade-up">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(27,26,23,0.08),_transparent_60%)]" />
            <CardHeader className="relative">
              <CardTitle className="font-serif text-2xl">
                Visit the studio
              </CardTitle>
              <CardDescription>
                {SITE.address}. Easy arrival, smooth check-in, and a calm appointment experience from start to finish.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-3 text-sm text-muted-foreground">
              <div>{SITE.parkingNote}</div>
              <div>
                Prefer to talk first? Call <span className="font-medium">{SITE.phone}</span>.
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center gap-6 bg-[var(--secondary)] p-10">
            <h2 className="font-serif text-3xl sm:text-4xl">Ready for your next appointment?</h2>
            <p className="text-muted-foreground">
              Book online in minutes. For bridal, groups, or special requests, call and we’ll take care of the details.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/book" className={buttonVariants({ size: "lg" })}>
                Book Appointment
              </Link>
              <a
                href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
              >
                Call {SITE.phone}
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Tip: If you’re unsure what to choose, start with a consult—we’ll guide you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
