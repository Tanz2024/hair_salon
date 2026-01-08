import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GALLERY, IMAGES } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <div className="bg-[var(--background)] px-6 py-16 fade-in">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <h1 className="font-serif text-4xl">Hair transformations</h1>
          <p className="font-script text-xl text-[var(--accent-dark)]">
            Dimensional color, easy styling, and signature finishes with
            big-sky softness.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {GALLERY.map((item, index) => (
            <Card
              key={`${item.title}-${index}`}
              className="group relative overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={IMAGES.gallery[index]}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4 text-sm">
                <span className="font-medium">{item.title}</span>
                <Badge variant="accent">{item.tag}</Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-[var(--secondary)] px-8 py-10 text-center">
          <h2 className="flex items-center justify-center gap-2 font-serif text-2xl">
            <InstagramLogo size={22} className="text-[var(--accent-dark)] opacity-70" />
            <span>Follow @jackvilladallas for weekly looks.</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Optional embed spot for your live Instagram feed.
          </p>
        </div>
      </div>
    </div>
  );
}
