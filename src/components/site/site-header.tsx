"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef } from "react";

import { buttonVariants } from "@/components/ui/button";
import { NAV_ITEMS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const menu = menuRef.current;
      if (!menu || !menu.open) return;
      if (!menu.contains(event.target as Node)) {
        menu.open = false;
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--background)]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <span className="block font-serif text-2xl xl:text-3xl">{SITE.name}</span>
          <span className="block font-script text-sm text-[var(--accent-dark)] xl:text-base">
            Modern Ranch Salon
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-[var(--accent-dark)]",
                pathname === item.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--foreground)]"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book" className={buttonVariants({ size: "sm" })}>
            Book Appointment
          </Link>
        </nav>
        <details ref={menuRef} className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--accent-dark)]">
            <List size={18} className="text-[var(--accent-dark)] opacity-70" />
            <span>Menu</span>
          </summary>
          <div className="absolute right-0 mt-3 w-48 bg-[var(--background)] p-3">
            <div className="flex flex-col gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="py-1">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book"
                className={buttonVariants({ size: "sm", className: "w-full" })}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
