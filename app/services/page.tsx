"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import HoverEffect from "@/components/blocks/HoverEffect";
import InfiniteMovingCards from "@/components/blocks/InfiniteMovingCards";
import CTASplit from "@/components/blocks/CTASplit";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <section className="relative">
        <HeroSpotlight
          title="Menu, made intentional."
          subtitle="From espresso to slow bar pour-over—everything is tuned for sweetness, clarity, and texture."
          primaryCta={{ label: "Reserve a Tasting", href: "/contact" }}
          secondaryCta={{ label: "View Pricing", href: "/pricing" }}
          image={{ src: "/images/product-2.png", alt: "Coffee bar interior" }}
          overlayClassName="bg-gradient-to-b from-black/70 via-black/45 to-black/20"
          textClassName="text-white"
          badge={{ label: "Menu & Services" }}
        />
      </section>

      <motion.section {...sectionAnim} className="w-full bg-[#F8F4DB] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <HoverEffect
            title="What we serve"
            subtitle="A tight menu—crafted daily."
            items={[
              {
                title: "Espresso & Milk Drinks",
                description:
                  "House espresso, cappuccino, latte, and seasonal specials.",
                href: "/contact",
                image: { src: "/images/product-2.png", alt: "Espresso drink" }
              },
              {
                title: "Slow Bar Pour-Over",
                description:
                  "Single origins brewed to highlight aroma and clarity.",
                href: "/contact",
                image: { src: "/images/product-1.png", alt: "Pour-over coffee" }
              },
              {
                title: "Origin Flights",
                description:
                  "Side-by-side tastings to learn region, process, and profile.",
                href: "/pricing",
                image: { src: "/images/product-2.png", alt: "Coffee flight" }
              },
              {
                title: "Pastry Pairings",
                description:
                  "Seasonal pastries designed to complement the cup.",
                href: "/contact",
                image: { src: "/images/product-3.png", alt: "Pastry" }
              },
              {
                title: "Retail Beans",
                description:
                  "Whole bean bags with brew guidance for home setups.",
                href: "/contact",
                image: { src: "/images/product-2.png", alt: "Coffee beans" }
              },
              {
                title: "Wholesale",
                description:
                  "For restaurants and offices—consistent supply and training.",
                href: "/contact",
                image: { src: "/images/product-3.png", alt: "Coffee equipment" }
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <InfiniteMovingCards
            title="Today’s notes (rotating)"
            subtitle="A few flavor cues you might find in the cup."
            items={[
              { title: "Cacao • Dried cherry • Walnut" },
              { title: "Bergamot • Honey • Jasmine" },
              { title: "Brown sugar • Orange • Cocoa nib" },
              { title: "Stone fruit • Caramel • Black tea" },
              { title: "Toffee • Raisin • Spice" }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#F8F4DB] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <CTASplit
            eyebrow="Wholesale & Events"
            title="Bring Bean & Brew to your space."
            description="We offer wholesale beans, staff training, and tasting events for teams and private groups."
            primaryCta={{ label: "Inquire", href: "/contact" }}
            secondaryCta={{ label: "See Pricing", href: "/pricing" }}
            image={{
              src: "/images/product-2.png",
              alt: "Pour-over station and equipment"
            }}
          />
        </div>
      </motion.section>
    </main>
  );
}
