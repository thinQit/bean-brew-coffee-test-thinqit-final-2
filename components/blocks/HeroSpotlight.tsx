import * as React from "react";

export type HeroSpotlightProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function HeroSpotlight({
  title = "About",
  subtitle = "Learn more about our mission, values, and team.",
  className,
}: HeroSpotlightProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
