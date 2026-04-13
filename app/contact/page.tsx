"use client";

import { motion } from "framer-motion";
import HeroSpotlight from "@/components/blocks/HeroSpotlight";
import ContactForm from "@/components/blocks/ContactForm";
import MovingBorder from "@/components/blocks/MovingBorder";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ContactPage() {
  return (
    <main className="bg-[#FEFAE0]">
      <section className="relative">
        <HeroSpotlight
          title="Let’s make your next cup unforgettable."
          subtitle="Reserve a tasting, ask about wholesale, or plan a private event."
          primaryCta={{ label: "Reserve a Tasting", href: "#form" }}
          secondaryCta={{ label: "View Pricing", href: "/pricing" }}
          image={{ src: "/images/product-2.png", alt: "Espresso tools and bar" }}
          overlayClassName="bg-gradient-to-b from-black/70 via-black/45 to-black/20"
          textClassName="text-white"
          badge={{ label: "Contact" }}
        />
      </section>

      <motion.section {...sectionAnim} className="w-full bg-[#F8F4DB] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-1">
              <h2 className="font-heading text-3xl text-[#1D1C0D]">
                Visit Bean & Brew
              </h2>
              <p className="mt-2 text-[#561922]">
                Share your details and we’ll get back within 1–2 business days.
              </p>

              <div className="mt-6 grid gap-3">
                <MovingBorder
                  title="Hours"
                  description="Mon–Fri 7am–6pm • Sat–Sun 8am–5pm"
                />
                <MovingBorder
                  title="Email"
                  description="hello@beanandbrew.example"
                />
                <MovingBorder
                  title="Location"
                  description="Downtown Roastery & Tasting Bar"
                />
              </div>
            </div>

            <div id="form" className="lg:col-span-2">
              <ContactForm
                title="Send a message"
                subtitle="Tastings, wholesale, events—tell us what you’re planning."
                fields={[
                  { name: "name", label: "Name", type: "text", required: true },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    required: true
                  },
                  {
                    name: "topic",
                    label: "Topic",
                    type: "select",
                    required: true,
                    options: [
                      "Reserve a tasting",
                      "Wholesale inquiry",
                      "Private event",
                      "General question"
                    ]
                  },
                  {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    required: true
                  }
                ]}
                submitLabel="Send"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionAnim} className="w-full bg-[#FEFAE0] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl bg-background">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img
                  src="/images/product-1.png"
                  alt="Coffee shop interior seating"
                  className="h-full min-h-[260px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl text-[#1D1C0D]">
                  What to ask for
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[#561922]">
                  <li>Today’s single origin and recommended brew method</li>
                  <li>Origin flight availability</li>
                  <li>Wholesale sample kit + training options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
