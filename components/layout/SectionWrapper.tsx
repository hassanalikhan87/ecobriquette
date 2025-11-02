import type { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
      {children}
    </section>
  );
}
