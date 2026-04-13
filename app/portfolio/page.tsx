"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import BentoGrid from "@/components/blocks/BentoGrid";
import StickyScrollReveal from "@/components/blocks/StickyScrollReveal";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <section className="relative">
        <HeroSpotlight
          title="Projects & collaborations."
          subtitle="A look at our seasonal releases, origin spotlights, and partner work."
          primaryCta={{ label: "Wholesale Inquiry", href: "/contact" }}
          secondaryCta={{ label: "Pricing", href: "/pricing" }}
          image={{ src: "/images/product-1.png", alt: "Pour-over station" }}
          overlayClassName="bg-gradient-to-b from-black/70 via-black/45 to-black/20"
          textClassName="text-white"
          badge={{ label: "Portfolio" }}
        />
      </section>

      <motion.section {...sectionAnim} className="w-full bg-[#F8F4DB] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <BentoGrid
            items={[
              {
                title: "Seasonal Blend Release",
                description:
                  "A limited blend designed for milk drinks—chocolate-forward with a dried-fruit lift.",
                image: { src: "/images/product-2.png", alt: "Espresso blend" },
                href: "/contact",
                tag: "Release"
              },
              {
                title: "Origin Spotlight: Washed Ethiopia",
                description:
                  "Floral aromatics and tea-like body—brewed on the slow bar all month.",
                image: { src: "/images/product-1.png", alt: "Single origin coffee" },
                href: "/services",
                tag: "Origin"
              },
              {
                title: "Pastry Pairing Week",
                description:
                  "A rotating pastry lineup paired with three filter coffees.",
                image: { src: "/images/product-3.png", alt: "Pastry pairing" },
                href: "/services",
                tag: "Pairing"
              },
              {
                title: "Partner Café Dial-In",
                description:
                  "Wholesale training and calibration for consistent espresso service.",
                image: { src: "/images/product-1.png", alt: "Espresso calibration" },
                href: "/contact",
                tag: "Wholesale"
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <StickyScrollReveal
            title="How we collaborate"
            subtitle="A simple, premium process."
            items={[
              {
                title: "Taste + align",
                description:
                  "We start with a tasting to match your goals—espresso, filter, or retail.",
                image: { src: "/images/product-3.png", alt: "Cupping table" }
              },
              {
                title: "Build the program",
                description:
                  "Beans, cadence, and training—set up for consistency and growth.",
                image: { src: "/images/product-3.png", alt: "Roastery tools" }
              },
              {
                title: "Support + iterate",
                description:
                  "Ongoing dial-ins and seasonal rotations to keep quality high.",
                image: { src: "/images/product-2.png", alt: "Coffee bar interior" }
              }
            ]}
          />
        </div>
      </motion.section>
    </main>
  );
}
