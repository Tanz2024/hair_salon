import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkle, Star, UserFocus } from "@phosphor-icons/react/dist/ssr";
import { IMAGES } from "@/lib/site-data";

const BRAND_VALUES = [
  {
    title: "Healthy luxury",
    description:
      "Calm, elevated service with hair health at the center of every decision.",
    Icon: Heart,
  },
  {
    title: "Listening-first",
    description:
      "We listen closely, map a roadmap, and tailor every step to your goals.",
    Icon: UserFocus,
  },
  {
    title: "Transparent care",
    description:
      "Clear pricing, honest timing, and no rushed appointments or surprises.",
    Icon: Sparkle,
  },
  {
    title: "Refined finish",
    description:
      "Polished results that feel natural and stay beautiful as they grow out.",
    Icon: Star,
  },
];

const SPACES = [
  {
    label: "Outdoor view",
    description:
      "A welcoming exterior that sets the tone for our relaxed, premium approach. Natural light, warm finishes, and a quiet curbside moment make arrivals feel unhurried and intentional. The surrounding streets feel calm and curated, giving you a sense of privacy before you step inside. It is a soft transition from the city into a space designed for focus and comfort.",
    imageIndex: 1,
  },
  {
    label: "Studio lobby",
    description:
      "A warm, quiet space where every visit begins with care and clarity. Soft textures, subtle scent notes, and a calm layout encourage you to settle in before your service. The lobby feels refined but welcoming, with clean lines, earthy tones, and a gentle glow that slows everything down. It is the place where details are confirmed and your appointment starts on the right note.",
    imageIndex: 0,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)] px-6 py-16 fade-in">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)] font-serif">
            Since 1989
          </p>
          <h1 className="font-serif text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Dallas luxury, built on trust.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Jackvilla Dallas began in 1989 with a simple goal: make luxury hair
            feel personal. We focus on thoughtful conversations, clean
            techniques, and results that age beautifully.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our promise is clarity and care: you will always know the roadmap, the
            timing, and the investment before we begin. That transparency is
            why clients return and refer.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every appointment starts with a focused conversation. We talk
            through your inspiration, your routine, and how you want to feel
            when you walk out the door. From there we create a strategy that fits
            your timeline and protects the integrity of your hair.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We are known for dimensional color, soft movement, and polished
            finishes that stay beautiful between visits. The goal is a look
            that feels easy to wear on day one and still looks intentional weeks
            later.
          </p>
          <div className="h-px w-20 bg-[var(--accent)]/60" />
        </div>

        {SPACES.map((space) => (
          <div key={space.label} className="space-y-4 stagger">
            <div className="group relative aspect-[16/7] overflow-hidden rounded-3xl bg-[var(--background)]">
              <Image
                src={IMAGES.about[space.imageIndex]}
                alt={space.label}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 80vw, 95vw"
              />
            </div>
            <div className="text-center font-serif text-base tracking-[0.06em] text-[var(--foreground)]">
              {space.label}
            </div>
            <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground sm:text-base">
              {space.description}
            </p>
          </div>
        ))}

        {/* Brand values */}
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Brand values
            </p>
            <h2 className="font-serif text-3xl">The experience standard</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 stagger">
            {BRAND_VALUES.map(({ title, description, Icon }) => (
              <Card
                key={title}
                className="border border-[color-mix(in_oklab,var(--accent-dark),transparent_80%)] bg-[var(--secondary)]/60 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              >
                <CardContent className="flex gap-4 py-7 text-sm text-muted-foreground">
                  <div className="mt-0.5 rounded-full border border-[color-mix(in_oklab,var(--accent-dark),transparent_70%)] bg-[var(--background)] p-2 text-[var(--accent-dark)]">
                    <Icon size={20} className="opacity-70" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium tracking-[0.02em] text-[var(--foreground)]">
                      {title}
                    </div>
                    <div>{description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-sm text-muted-foreground sm:text-base">
          From first welcome to final finish, every step is designed to feel
          calm, considered, and premium. We keep the experience simple, elevated,
          and grounded in results you can trust.
        </div>
      </div>
    </div>
  );
}
