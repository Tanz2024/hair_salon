import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IMAGES, POLICIES } from "@/lib/site-data";

export default function PoliciesPage() {
  return (
    <div className="bg-[var(--background)] px-6 py-16 fade-in">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
            Policies
          </p>
          <h1 className="font-serif text-4xl">Salon policies</h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            We respect your time and ours. The guidelines below keep schedules
            on track and ensure every guest receives a consistent, high-quality
            experience.
          </p>
        </div>
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
          <Image
            src={IMAGES.policies}
            alt="Salon interior"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.18)] via-transparent to-transparent" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 stagger">
          {POLICIES.map((policy) => (
            <Card key={policy.title}>
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {policy.detail}
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-[var(--secondary)]">
          <CardContent className="flex flex-col gap-2 p-6 text-sm text-muted-foreground">
            <div className="text-base font-medium text-[var(--foreground)]">
              Questions before you book?
            </div>
            <div>
              Call us and we will walk you through the best service option for
              your goals.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
