"use client";

import { motion } from "framer-motion";

import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import FeaturesGrid from "@/components/blocks/FeaturesGrid";
import BentoGrid from "@/components/blocks/BentoGrid";
import StickyScrollReveal from "@/components/blocks/StickyScrollReveal";
import TestimonialsGrid from "@/components/blocks/TestimonialsGrid";
import CTASplit from "@/components/blocks/CTASplit";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function HomePage() {
  return (
    <main className="bg-[#FEFAE0]">
      {/* HERO (text must be white on background images) */}
      <section className="relative">
        <HeroSpotlight
          title="Heritage in every pour."
          subtitle="Small-batch roasting, seasonal pastries, and a tasting bar designed for slow mornings and sharp conversations."
          primaryCta={{ label: "Explore the Menu", href: "/services" }}
          secondaryCta={{ label: "Reserve a Tasting", href: "/contact" }}
          image={{
            src: "/images/hero.png",
            alt: "Bean & Brew Coffee hero — espresso and roastery ambiance"
          }}
          overlayClassName="bg-gradient-to-b from-black/70 via-black/45 to-black/20"
          textClassName="text-white"
          badge={{ label: "Premium Roastery • Tasting Bar" }}
        />
      </section>

      {/* Menu Highlights */}
      <motion.section
        {...sectionAnim}
        className="w-full bg-[#F8F4DB] py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl text-[#1D1C0D]">
                Menu highlights
              </h2>
              <p className="mt-2 max-w-2xl text-[#561922]">
                A curated selection—built around origin, seasonality, and
                craft-forward technique.
              </p>
            </div>
            <div className="hidden md:block text-sm text-[#561922]">
              Updated weekly • Ask for today’s single origin
            </div>
          </div>

          <div className="mt-10">
            <BentoGrid
              items={[
                {
                  title: "Single Origin Pour-Over",
                  description:
                    "Bright, clean, and expressive—brewed to highlight origin character.",
                  image: { src: "/images/product-1.png", alt: "Pour-over coffee" },
                  href: "/services",
                  tag: "Brew Bar"
                },
                {
                  title: "House Espresso",
                  description:
                    "A burgundy-toned blend: chocolate, dried fruit, and a long finish.",
                  image: { src: "/images/product-2.png", alt: "Espresso shot" },
                  href: "/services",
                  tag: "Signature"
                },
                {
                  title: "Butter Croissant",
                  description:
                    "Laminated, golden, and warm—made for the first sip.",
                  image: { src: "/images/product-3.png", alt: "Croissant pastry" },
                  href: "/services",
                  tag: "Pastry"
                },
                {
                  title: "Seasonal Latte",
                  description:
                    "House syrup, silky microfoam, and a burnt-gold finish.",
                  image: { src: "/images/product-3.png", alt: "Latte art" },
                  href: "/services",
                  tag: "Seasonal"
                }
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* Reservation CTA */}
      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <CTASplit
            eyebrow="Tasting Experience"
            title="Reserve a guided cupping."
            description="A 45-minute tasting led by our roasters—learn extraction, aroma mapping, and how origin shapes flavor."
            primaryCta={{ label: "Book a Tasting", href: "/contact" }}
            secondaryCta={{ label: "View Pricing", href: "/pricing" }}
            image={{
              src: "/images/product-1.png",
              alt: "Coffee cupping and tasting setup"
            }}
          />
        </div>
      </motion.section>

      {/* The Alchemist's Story */}
      <motion.section
        {...sectionAnim}
        className="w-full bg-[#F8F4DB] py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-heading text-3xl text-[#1D1C0D]">
                The alchemist’s story
              </h2>
              <p className="mt-3 text-[#561922]">
                We roast in small batches to preserve nuance—then dial in every
                brew method for clarity, sweetness, and balance.
              </p>

              <div className="mt-8">
                <FeaturesGrid
                  title="Craft, made visible"
                  subtitle="A process you can taste—every day."
                  features={[
                    {
                      title: "Small-batch roasting",
                      description:
                        "Profiled for sweetness and structure—never burnt, never flat."
                    },
                    {
                      title: "Seasonal sourcing",
                      description:
                        "Rotating lots from trusted farms and import partners."
                    },
                    {
                      title: "Precision brewing",
                      description:
                        "Grind, water, and time tuned to the bean—no shortcuts."
                    },
                    {
                      title: "Pastry pairing",
                      description:
                        "A tight pastry menu designed to complement the cup."
                    }
                  ]}
                />
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/product-1.png"
                  alt="Roastery process and espresso tools"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              {/* Intentional asymmetry: offset card */}
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden w-[70%] rounded-2xl bg-background/70 p-5 shadow-lg backdrop-blur-2xl md:block">
                <p className="font-heading text-xl text-[#1D1C0D]">
                  “Roasting is restraint.”
                </p>
                <p className="mt-1 text-sm text-[#561922]">
                  We chase clarity and sweetness—so origin can speak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sticky Scroll: Signature Rituals */}
      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <StickyScrollReveal
            title="Signature rituals"
            subtitle="A modern tasting bar with heritage technique."
            items={[
              {
                title: "Dial-in at open",
                description:
                  "Every morning starts with calibration—espresso, filter, and milk texture.",
                image: { src: "/images/product-1.png", alt: "Dialing in espresso" }
              },
              {
                title: "Origin flights",
                description:
                  "Compare regions side-by-side to learn acidity, sweetness, and body.",
                image: { src: "/images/product-3.png", alt: "Coffee flight tasting" }
              },
              {
                title: "Slow bar pour-over",
                description:
                  "A deliberate brew—balanced extraction, aromatic lift, clean finish.",
                image: { src: "/images/product-1.png", alt: "Pour-over station" }
              }
            ]}
          />
        </div>
      </motion.section>

      {/* Testimonials + Contact prompt */}
      <motion.section
        {...sectionAnim}
        className="w-full bg-[#F8F4DB] py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-6">
          <TestimonialsGrid
            title="Loved by regulars"
            subtitle="A few notes from the community."
            testimonials={[
              {
                name: "Avery M.",
                role: "Weekend regular",
                quote:
                  "The espresso is ridiculously balanced—sweet, structured, and never bitter. The tasting was worth every minute."
              },
              {
                name: "Jordan K.",
                role: "Coffee nerd",
                quote:
                  "Finally a place that treats pour-over like an editorial craft. The origin flight taught me more than any blog."
              },
              {
                name: "Sam R.",
                role: "Pastry-first, coffee-second",
                quote:
                  "Croissants are perfect and the seasonal latte is subtle—not syrupy. The space feels premium but welcoming."
              }
            ]}
          />

          <div className="mt-10 overflow-hidden rounded-3xl bg-background">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-8">
                <h3 className="font-heading text-2xl text-[#1D1C0D]">
                  Planning a visit?
                </h3>
                <p className="mt-2 text-[#561922]">
                  Ask about today’s single origin, reserve a cupping, or inquire
                  about wholesale.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="rounded-full bg-[#722F37] px-5 py-2 text-sm font-medium text-white"
                  >
                    Contact
                  </a>
                  <a
                    href="/pricing"
                    className="rounded-full bg-[#E7E3CA] px-5 py-2 text-sm font-medium text-[#1D1C0D]"
                  >
                    Pricing
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/product-1.png"
                  alt="Coffee bar interior"
                  className="h-full min-h-[240px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
