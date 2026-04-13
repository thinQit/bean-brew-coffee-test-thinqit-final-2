import * as React from "react";

export type StatItem = {
  label: string;
  value: string | number;
};

export type StatsCounterProps = {
  stats?: StatItem[];
  className?: string;
};

export default function StatsCounter({
  stats = [
    { label: "Customers", value: "1k+" },
    { label: "Projects", value: "250+" },
    { label: "Uptime", value: "99.9%" },
  ],
  className,
}: StatsCounterProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-background p-6"
            >
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="mt-2 text-2xl font-semibold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
