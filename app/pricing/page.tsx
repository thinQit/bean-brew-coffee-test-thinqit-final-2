"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import PricingTable from "@/components/blocks/PricingTable";
import FAQAccordion from "@/components/blocks/FAQAccordion";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function PricingPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <section className="relative">
        <HeroSpotlight
          title="Pricing, kept simple."
          subtitle="Choose a tasting, a flight, or a wholesale plan—crafted for clarity and consistency."
          primaryCta={{ label: "Reserve", href: "/contact" }}
          secondaryCta={{ label: "View Services", href: "/services" }}
          image={{ src: "/images/product-1.png", alt: "Coffee cupping setup" }}
          overlayClassName="bg-gradient-to-b from-black/70 via-black/45 to-black/20"
          textClassName="text-white"
          badge={{ label: "Pricing" }}
        />
      </section>

      <motion.section {...sectionAnim} className="w-full bg-[#F8F4DB] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <PricingTable
            title="Tastings & programs"
            subtitle="Premium experiences—no guesswork."
            plans={[
              {
                name: "Tasting Seat",
                price: "$25",
                description: "Guided cupping (45 minutes).",
                features: [
                  "3 coffees, side-by-side",
                  "Aroma + flavor mapping",
                  "Brew guidance to take home"
                ],
                cta: { label: "Reserve", href: "/contact" },
                highlighted: true
              },
              {
                name: "Origin Flight",
                price: "$18",
                description: "Self-guided flight at the bar.",
                features: [
                  "3 origins, rotating",
                  "Tasting notes card",
                  "Pairing recommendation"
                ],
                cta: { label: "Ask in-store", href: "/contact" }
              },
              {
                name: "Wholesale Starter",
                price: "From $220/mo",
                description: "For small teams and cafés.",
                features: [
                  "Monthly bean supply",
                  "Dial-in support",
                  "Training session available"
                ],
                cta: { label: "Inquire", href: "/contact" }
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl bg-background">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="font-heading text-3xl text-[#1D1C0D]">
                  Retail beans
                </h2>
                <p className="mt-2 text-[#561922]">
                  Whole bean bags available in-store. Ask us to match a coffee
                  to your brew method (espresso, filter, or immersion).
                </p>
                <p className="mt-4 text-sm text-[#561922]">
                  Typical range: $18–$26 per bag (varies by origin and lot size).
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/product-2.png"
                  alt="Coffee beans and tools"
                  className="h-full min-h-[260px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#F8F4DB] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <FAQAccordion
            title="Pricing FAQ"
            subtitle="Quick details before you book."
            items={[
              {
                question: "Do I need to reserve a tasting?",
                answer:
                  "Reservations are recommended—especially on weekends. Walk-ins are welcome when seats are available."
              },
              {
                question: "Can you accommodate groups?",
                answer:
                  "Yes. For groups, use the Contact page and we’ll coordinate a private session."
              },
              {
                question: "Do you offer subscriptions?",
                answer:
                  "We can set up a recurring retail pickup or a wholesale schedule—reach out and we’ll tailor it."
              }
            ]}
          />
        </div>
      </motion.section>
    </main>
  );
}
