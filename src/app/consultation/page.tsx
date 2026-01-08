import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE } from "@/lib/site-data";

export default function ConsultationPage() {
  return (
    <div className="bg-[var(--background)] px-6 py-16 fade-in">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Consultation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">
            A clear direction before we begin.
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your consultation is a focused conversation about your hair goals,
            timing, and maintenance. We confirm the best service, realistic
            expectations, and an accurate quote so you feel confident before
            booking.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/book" className={buttonVariants({ size: "lg" })}>
              Book Appointment
            </Link>
            <Link
              href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Call the salon
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-[var(--secondary)]">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                What we cover
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between gap-4">
                <span>Hair history + inspiration</span>
                <Badge variant="accent">Included</Badge>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Service match + timing</span>
                <Badge variant="accent">Included</Badge>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Custom quote + maintenance</span>
                <Badge variant="accent">Included</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                How to prepare
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div>Bring 2-3 photos of styles you love.</div>
              <div>Share your schedule and maintenance goals.</div>
              <div>Be ready to discuss past color or treatments.</div>
              <div className="pt-2 text-xs">
                Consultations usually take 10-15 minutes.
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-3 p-6 text-sm text-muted-foreground">
            <div className="text-base font-medium text-[var(--foreground)]">
              What happens next
            </div>
            <div>
              After your consult, we will recommend the right service and book
              the best time for your schedule. For larger changes, we may
              suggest a two-visit approach to protect hair health.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
