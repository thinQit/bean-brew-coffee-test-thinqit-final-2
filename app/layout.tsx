import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";

import NavbarGlass from "@/components/blocks/NavbarGlass";
import FooterMultiColumn from "@/components/blocks/FooterMultiColumn";

const heading = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bean & Brew Coffee",
  description:
    "Premium coffee roastery and tasting bar. Heritage craft, modern ritual."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[#FEFAE0] text-[#1D1C0D]">
        {/* Navbar must be full width */}
        <div className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarGlass
            brand={{
              name: "Bean & Brew",
              tagline: "Premium Roastery",
              href: "/"
            }}
            links={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" }
            ]}
            cta={{
              label: "Reserve a Tasting",
              href: "/contact"
            }}
          />
        </div>

        {/* Page content */}
        <div className="pt-20">{children}</div>

        <FooterMultiColumn
          brand={{
            name: "Bean & Brew Coffee",
            description:
              "A premium roastery and tasting bar—small-batch beans, seasonal pastries, and a ritual worth slowing down for."
          }}
          columns={[
            {
              title: "Explore",
              links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Portfolio", href: "/portfolio" }
              ]
            },
            {
              title: "Visit",
              links: [
                { label: "Contact", href: "/contact" },
                { label: "Reserve a Tasting", href: "/contact" },
                { label: "Menu Highlights", href: "/services" }
              ]
            },
            {
              title: "Hours",
              links: [
                { label: "Mon–Fri: 7am–6pm", href: "/contact" },
                { label: "Sat–Sun: 8am–5pm", href: "/contact" }
              ]
            }
          ]}
          bottom={{
            left: `© ${new Date().getFullYear()} Bean & Brew Coffee`,
            rightLinks: [
              { label: "Privacy", href: "/contact" },
              { label: "Terms", href: "/contact" }
            ]
          }}
        />
      </body>
    </html>
  );
}
