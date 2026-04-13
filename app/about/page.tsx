"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import StatsCounter from "@/components/blocks/StatsCounter";
import TeamGrid from "@/components/blocks/TeamGrid";
import FAQAccordion from "@/components/blocks/FAQAccordion";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function AboutPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <section className="relative">
        <HeroSpotlight
          title="A roastery built on restraint."
          subtitle="We roast for sweetness, brew for clarity, and design every detail to feel like a quiet luxury."
          primaryCta={{ label: "Meet the Team", href: "#team" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          image={{ src: "/images/hero.png", alt: "Roastery and coffee craft" }}
          overlayClassName="bg-gradient-to-b from-black/70 via-black/45 to-black/20"
          textClassName="text-white"
          badge={{ label: "About Bean & Brew" }}
        />
      </section>

      <motion.section {...sectionAnim} className="w-full bg-[#F8F4DB] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl text-[#1D1C0D]">
                Our philosophy
              </h2>
              <p className="mt-3 text-[#561922]">
                Bean & Brew is a premium coffee roastery and tasting bar. We
                focus on origin transparency, careful roast development, and
                hospitality that feels editorial—not loud.
              </p>
              <p className="mt-4 text-[#561922]">
                You’ll taste it in the cup: clean acidity, structured sweetness,
                and a finish that lingers like good conversation.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-background">
              <img
                src="/images/product-1.png"
                alt="Coffee tools and roasting details"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <StatsCounter
            title="Measured craft"
            subtitle="Small numbers. Big intention."
            stats={[
              { label: "Roast batches per week", value: 18 },
              { label: "Origins rotated seasonally", value: 12 },
              { label: "Brew recipes dialed-in daily", value: 24 },
              { label: "Tasting seats per session", value: 10 }
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        id="team"
        {...sectionAnim}
        className="w-full bg-[#F8F4DB] py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <TeamGrid
            title="The people behind the pour"
            subtitle="Roasters, baristas, and hosts—trained to obsess over the details."
            members={[
              {
                name: "Mara",
                role: "Head Roaster",
                image: { src: "/images/team-1.png", alt: "Head roaster portrait" }
              },
              {
                name: "Elias",
                role: "Brew Bar Lead",
                image: { src: "/images/team-2.png", alt: "Brew bar lead portrait" }
              },
              {
                name: "Noor",
                role: "Pastry & Pairing",
                image: { src: "/images/team-1.png", alt: "Pastry lead portrait" }
              },
              {
                name: "Jun",
                role: "Hospitality",
                image: { src: "/images/team-1.png", alt: "Hospitality lead portrait" }
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <FAQAccordion
            title="Questions, answered"
            subtitle="A few quick notes before you visit."
            items={[
              {
                question: "Do you offer decaf?",
                answer:
                  "Yes—our decaf rotates seasonally and is brewed with the same care as our single origins."
              },
              {
                question: "Can I book a private cupping?",
                answer:
                  "Absolutely. Use the Contact page to request a private session for groups or teams."
              },
              {
                question: "Do you sell beans?",
                answer:
                  "Yes—whole bean bags are available in-store, and we can recommend a brew method for your setup."
              }
            ]}
          />
        </div>
      </motion.section>
    </main>
  );
}
