import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REVIEWS, HOURS, SITE } from "@/lib/site-data";
import { ReviewsSection } from "@/components/site/reviews-section";

function cleanTel(phone: string) {
  return phone.replace(/[^0-9]/g, "");
}

export default function ContactPage() {
  const tel = cleanTel(SITE.phone);
  const bookingPath = (SITE as any).bookingPath || "/book";

  const fullAddress = `${SITE.address}, ${SITE.neighborhood}, Dallas, TX`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  return (
    <div className="bg-[var(--background)] px-6 py-16 fade-in">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl">Visit the salon</h1>
          <p className="max-w-3xl text-lg md:text-xl text-[var(--accent-dark)]">
            We’re near the Dallas Arts District with easy parking for guests—and
            a countryside calm the moment you step inside.
          </p>

          {/* Only booking CTA (removed Get directions + Call) */}
          <div className="pt-2">
            <a
              href={bookingPath}
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tracking-[0.02em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] bg-[var(--accent-tone)] text-[var(--background)]"
            >
              Book Appointment
            </a>
          </div>
        </header>

        {/* Main grid */}
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="text-base text-foreground">{SITE.address}</div>
                <div>{SITE.neighborhood}, Dallas, TX</div>
                {SITE.parkingNote ? (
                  <div className="pt-2 text-xs">{SITE.parkingNote}</div>
                ) : null}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <CardTitle className="font-serif text-2xl">Map</CardTitle>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold underline underline-offset-4 opacity-80 hover:opacity-100"
                >
                  Open in Google Maps
                </a>
              </CardHeader>
              <CardContent>
                <div className="aspect-[16/11] w-full overflow-hidden rounded-xl border border-[color-mix(in_oklab,var(--accent-dark),transparent_86%)]">
                  <iframe
                    title="Jackvilla Dallas map"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.333721611392!2d-96.8058303!3d32.7934768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99326ddf079d%3A0xb3cf08a9fcd24177!2sDallas%20Arts%20District!5e0!3m2!1sen!2sus!4v1690000000000"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">What to expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium text-foreground">Arrival</span>
                  <span className="text-right">
                    Please arrive 5–10 minutes early for a relaxed start.
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium text-foreground">Parking</span>
                  <span className="text-right">
                    Easy parking nearby; validated for salon guests.
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium text-foreground">Pre-service chat</span>
                  <span className="text-right">
                    We’ll confirm goals, tone, and maintenance before we begin.
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm">
                <div>
                  <div className="text-muted-foreground">Phone</div>
                  <a className="text-lg font-semibold" href={`tel:${tel}`}>
                    {SITE.phone}
                  </a>
                </div>

                <div>
                  <div className="text-muted-foreground">Email</div>
                  <a
                    className="text-sm font-medium underline underline-offset-4"
                    href={`mailto:${SITE.email}`}
                  >
                    {SITE.email}
                  </a>
                </div>

                {(SITE as any).instagram ? (
                  <div>
                    <div className="text-muted-foreground">Instagram</div>
                    <a
                      className="text-sm font-medium underline underline-offset-4"
                      href={(SITE as any).instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow updates
                    </a>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {HOURS.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex items-center justify-between gap-6"
                  >
                    <span>{slot.day}</span>
                    <span className="font-medium text-foreground">
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Book online for the best availability. Not sure what to pick?
                  Call or email and we’ll help you choose.
                </p>
                <a
                  href={bookingPath}
                  className="inline-flex w-full items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tracking-[0.02em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] bg-[var(--accent-tone)] text-[var(--background)]"
                >
                  Book Appointment
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="pt-6">
          <ReviewsSection
            title="Reviews from Dallas locals."
            subtitle="A calm, detailed experience and results that last."
            linkHref="https://www.google.com/search?q=Jackvilla+Dallas+reviews"
            linkLabel="See review highlights ->"
            reviews={REVIEWS}
            summaryLabel="from 120+ guests"
          />
        </div>
      </div>
    </div>
  );
}
