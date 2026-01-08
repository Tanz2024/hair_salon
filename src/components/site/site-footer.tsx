// SiteFooter.tsx
import Link from "next/link";
import {
  Clock,
  Compass,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  Star,
} from "@phosphor-icons/react/dist/ssr";

import { NAV_ITEMS, HOURS, SITE } from "@/lib/site-data";

export function SiteFooter() {
  const socials = [
    { label: "Instagram", href: (SITE as any).instagram ?? "#", Icon: InstagramLogo },
    { label: "Facebook", href: (SITE as any).facebook ?? "#", Icon: FacebookLogo },
    { label: "Yelp", href: (SITE as any).yelp ?? "#", Icon: Star },
  ];

  const telHref = `tel:${String(SITE.phone).replace(/[^\d+]/g, "")}`;

  return (
    <footer className="bg-[var(--background)]">
      <div className="mx-auto h-px w-full max-w-6xl bg-[var(--accent)]/20" />
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-serif text-2xl tracking-tight">{SITE.name}</div>

            <p
              className="text-base text-[var(--accent-dark)] md:text-lg"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Dallas luxury with a country soul.
            </p>

            {/* CSS stamp badge */}
            <div className="pt-2">
          
            </div>

            <div className="text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-[2px] shrink-0 text-[var(--accent-dark)] opacity-70"
                />
                <div className="space-y-0.5">
                  <div>{SITE.address}</div>
                  <div>{SITE.neighborhood}, Dallas, TX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours (aligned) */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 font-semibold uppercase tracking-wide">
              <Clock size={16} className="text-[var(--accent-dark)] opacity-70" />
              <span>Hours</span>
            </div>

            <div className="grid gap-2 text-muted-foreground">
              {HOURS.map((slot) => (
                <div
                  key={slot.day}
                  className="grid grid-cols-[3.25rem_1fr] items-baseline"
                >
                  <span className="text-[var(--foreground)]/90">{slot.day}</span>
                  <span className="justify-self-end text-right whitespace-nowrap tabular-nums">
                    {slot.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 font-semibold uppercase tracking-wide text-[var(--foreground)]/80">
              <Compass size={16} className="text-[var(--accent-dark)] opacity-70" />
              <span>Explore</span>
            </div>

            <nav className="grid gap-2 text-muted-foreground/80">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit transition-opacity hover:opacity-80"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/policies" className="w-fit transition-opacity hover:opacity-80">
                Policies
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-sm">
            <div className="font-semibold uppercase tracking-wide">Contact</div>

            <div className="grid gap-2 text-muted-foreground">
              <a
                href={telHref}
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Phone size={16} className="shrink-0 text-[var(--accent-dark)] opacity-70" />
                <span className="whitespace-nowrap">{SITE.phone}</span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <EnvelopeSimple
                  size={16}
                  className="shrink-0 text-[var(--accent-dark)] opacity-70"
                />
                <span className="break-all sm:break-normal">{SITE.email}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-[2px] shrink-0 text-[var(--accent-dark)] opacity-70"
                />
                <span>Parking: {SITE.parkingNote}</span>
              </div>
            </div>

            <div className="pt-3 text-xs text-muted-foreground">
              <div className="mb-2">Follow along:</div>
              <div className="flex flex-wrap items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                    aria-label={label}
                  >
                    <Icon size={18} className="text-[var(--accent-dark)] opacity-70" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10">
          <div className="h-px w-full bg-[color-mix(in_oklab,var(--accent-dark),transparent_88%)]" />
        </div>
        <div className="pt-5 text-center text-xs text-muted-foreground">
          (c) 2026 {SITE.name}. Proudly serving Dallas, Texas.
        </div>
      </div>
    </footer>
  );
}
