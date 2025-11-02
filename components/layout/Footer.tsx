const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#impact", label: "Impact" },
  { href: "mailto:hello@ecobriquette.com", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-[var(--color-text-secondary)] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <div>
          <p className="font-semibold text-[var(--color-text-primary)]">EcoBriquette</p>
          <p>© {new Date().getFullYear()} EcoBriquette Manufacturing. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a key={link.href} className="hover:text-[var(--color-text-primary)]" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
