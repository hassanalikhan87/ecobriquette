"use client"

import Image from "next/image";
import { useState } from "react";

import type { Stat } from "@/lib/types/home";

const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#technology", label: "Technology" },
  { href: "#process", label: "Process" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

type HeroSectionProps = {
  stats: Stat[];
};

export default function HeroSection({ stats }: HeroSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[var(--color-hero-bg)] text-white"
    >
      <Image
        src="/hero-briquettes.jpg"
        alt="EcoBriquette biomass briquettes surrounded by greenery"
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#141516d9] via-[#3a3b3dcc] to-[#b8eb1d59]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-10 sm:px-10 lg:px-12">
        <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
          <HeroCopy />
          <HighlightsStats stats={stats} />
        </div>
      </div>
    </section>
  );
}

function SiteHeader({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6 text-sm font-medium tracking-wide">
      <a className="flex justify-start items-center gap-3" href="#hero">
        <div className="relative h-20 w-48 sm:h-16 sm:w-70">
          {/* <Image
            src="/secondary-logo.svg"
            alt="EcoBriquette logo"
            fill
            sizes="(max-width: 640px) 48px, 48px"
            className="object-contain sm:hidden"
            priority
          /> */}
          <Image
            src="/logo.svg"
            alt="EcoBriquette logo"
            fill
            // sizes="(max-width: 640px) 128px, 160px"
            // className="hidden object-contain sm:block"
            priority
          />
        </div>
        <span className="sr-only">EcoBriquette</span>
      </a>
      <nav className="hidden items-center gap-6 text-white/80 lg:flex">
        {navLinks.map((link) => (
          <a key={link.href} className="hover:text-white" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <a
          className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-white transition hover:border-white hover:bg-white/20 lg:inline-flex"
          href="#contact"
        >
          Work with us
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-white hover:bg-white/20 lg:hidden"
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                className={`block h-0.5 w-6 bg-current transition-transform ${
                  menuOpen && line === 0
                    ? 'translate-y-2 rotate-45'
                    : menuOpen && line === 1
                    ? 'opacity-0'
                    : menuOpen && line === 2
                    ? '-translate-y-2 -rotate-45'
                    : ''
                }`}
              />
            ))}
          </div>
        </button>
      </div>
    </header>
  );
}

function HeroCopy() {
  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
        Modular carbon removal
      </p>
      <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Turn waste biomass into carbon-negative energy and biochar, right where it’s generated.
      </h1>
      <p className="text-base text-white/80 sm:text-lg">
        EcoBriquette’s transportable conversion hubs marry Takachar-inspired field deployment with high-temperature stability similar to advanced biochar reactors, delivering utility-scale impact without the megastructure.
      </p>
      <div className="flex flex-wrap gap-4 text-sm font-medium">
        <a
          href="#impact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent-dark)] px-6 py-3 text-[var(--color-accent-contrast)] transition hover:bg-[var(--color-accent)]"
        >
          Explore the impact
        </a>
        <a
          href="#technology"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-white transition hover:border-white"
        >
          See the technology
        </a>
      </div>
    </div>
  );
}

function HighlightsStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-5 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
      <div className="text-sm uppercase tracking-[0.3em] text-white/60">Highlights</div>
      <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <div className="text-3xl font-semibold text-white">{stat.value}</div>
            <p className="text-xs uppercase tracking-wide text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({
  menuOpen,
  closeMenu,
}: {
  menuOpen: boolean;
  closeMenu: () => void;
}) {
  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-opacity duration-200 lg:hidden ${
        menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div
        className="mx-auto mt-24 w-[min(90%,20rem)] rounded-2xl border border-white/20 p-6 text-sm text-white shadow-xl backdrop-blur"
        style={{ backgroundColor: 'rgba(58, 59, 61, 0.95)' }}
      >
        <nav id="primary-nav" className="space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="mt-6 block rounded-full bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/20"
          onClick={closeMenu}
        >
          Work with us
        </a>
      </div>
    </div>
  );
}
