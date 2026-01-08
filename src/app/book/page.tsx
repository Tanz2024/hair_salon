import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HOURS, SITE } from "@/lib/site-data";

export default function BookPage() {
  return (
    <div className="bg-[var(--background)] px-6 py-16 fade-in">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] stagger">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="font-serif text-4xl">Book your appointment.</h1>
            <p className="text-xl text-[var(--accent-dark)]">
              Share a few details and we will confirm the best time for your
              visit.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Booking form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="grid gap-4 text-sm text-muted-foreground">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-[var(--foreground)]">Full name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-[var(--foreground)]">Phone</span>
                    <input
                      type="tel"
                      placeholder="(214) 555-0198"
                      className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-[var(--foreground)]">Email</span>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-[var(--foreground)]">Service</span>
                    <select className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]">
                      <option>Consultation</option>
                      <option>Cut + style</option>
                      <option>Color + dimension</option>
                      <option>Extensions</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="space-y-2">
                    <span className="text-[var(--foreground)]">Hair length</span>
                    <select className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]">
                      <option>Chin to shoulder</option>
                      <option>Shoulder to bra-strap</option>
                      <option>Mid-back</option>
                      <option>Waist or longer</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-[var(--foreground)]">Preferred day</span>
                    <input
                      type="date"
                      className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-[var(--foreground)]">Preferred time</span>
                    <input
                      type="time"
                      className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-[var(--foreground)]">
                    Preferred stylist (optional)
                  </span>
                  <select className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]">
                    <option>Any available stylist</option>
                    <option>Aurore</option>
                    <option>Jade</option>
                    <option>Luca</option>
                  </select>
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex items-center justify-between rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-3 text-sm text-[var(--foreground)]">
                    <span>New client?</span>
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                  </label>

                  <fieldset className="space-y-2 rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]">
                    <legend className="px-1 text-xs text-muted-foreground">
                      Preferred contact method
                    </legend>
                    <div className="flex flex-wrap items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          defaultChecked
                          className="h-3.5 w-3.5 accent-[var(--accent)]"
                        />
                        <span>Text</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          className="h-3.5 w-3.5 accent-[var(--accent)]"
                        />
                        <span>Call</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          className="h-3.5 w-3.5 accent-[var(--accent)]"
                        />
                        <span>Email</span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <label className="space-y-2">
                  <span className="text-[var(--foreground)]">Notes</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your hair goals or inspiration."
                    className="w-full rounded-md border border-[color-mix(in_oklab,var(--accent-dark),transparent_82%)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                  />
                </label>

                <button type="button" className={buttonVariants({ size: "lg" })}>
                  Book Appointment
                </button>

                <div className="rounded-md bg-[var(--secondary)] px-4 py-3 text-xs text-muted-foreground">
                  Thank you. Your request goes straight to our concierge team and
                  we will confirm with a personalized time window within 24
                  hours.
                </div>

                <p className="text-xs text-muted-foreground">
                  This form is a request. We will confirm availability by phone
                  or email.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                Call + hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <div className="text-muted-foreground">Phone</div>
                <a className="text-lg font-semibold" href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}>
                  {SITE.phone}
                </a>
              </div>
              <div>
                <div className="text-muted-foreground">Hours</div>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  {HOURS.map((slot) => (
                    <div key={slot.day} className="flex items-center justify-between">
                      <span>{slot.day}</span>
                      <span>{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--secondary)] p-4 text-muted-foreground">
                Prefer to book by phone? Call us and we will confirm the best
                time for your visit.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
