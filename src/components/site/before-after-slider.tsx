"use client";

import Image from "next/image";
import { useState } from "react";

import { Card } from "@/components/ui/card";

type BeforeAfterItem = {
  title: string;
  detail: string;
  before: string;
  after: string;
};

type BeforeAfterSliderProps = {
  items: BeforeAfterItem[];
};

function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
  const [value, setValue] = useState(55);
  const sliderValue = `${value}%`;

  return (
    <Card className="overflow-hidden">
      <div className="relative h-60 w-full">
        <Image
          src={item.after}
          alt={`${item.title} after`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 30vw, 90vw"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: sliderValue }}
        >
          <Image
            src={item.before}
            alt={`${item.title} before`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, 90vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 -translate-x-1/2"
          style={{ left: sliderValue }}
        >
          <div className="h-full w-[2px] bg-[rgba(255,255,255,0.7)] shadow-md" />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="space-y-1">
          <div className="text-sm font-medium">{item.title}</div>
          <div className="text-xs text-muted-foreground">{item.detail}</div>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span>Before</span>
          <span>After</span>
        </div>

        <input
          type="range"
          min={10}
          max={90}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="h-2 w-full cursor-pointer accent-[var(--accent)]"
          aria-label={`Adjust before and after slider for ${item.title}`}
        />
      </div>
    </Card>
  );
}

export function BeforeAfterSlider({ items }: BeforeAfterSliderProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3 stagger">
      {items.map((item) => (
        <BeforeAfterCard key={item.title} item={item} />
      ))}
    </div>
  );
}
