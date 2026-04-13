import * as React from "react";

export type TeamMember = {
  name: string;
  role?: string;
};

export type TeamGridProps = {
  members?: TeamMember[];
  className?: string;
};

export default function TeamGrid({
  members = [
    { name: "Alex Morgan", role: "Founder" },
    { name: "Sam Lee", role: "Engineering" },
    { name: "Taylor Kim", role: "Design" },
  ],
  className,
}: TeamGridProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Team</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-lg border border-border bg-background p-6"
            >
              <div className="text-base font-medium">{m.name}</div>
              {m.role ? (
                <div className="mt-1 text-sm text-muted-foreground">
                  {m.role}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
