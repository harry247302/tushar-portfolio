import { Manrope, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getSiteUrl, profile } from "@/data/profile";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Tushar Sharma is a performance marketer and Meta ads specialist in Delhi. He helps businesses generate leads, improve ROAS, and scale campaigns through testing and optimization.";

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${profile.name} — Performance Marketing Expert & Meta Ads Specialist`,
    template: "%s · Tushar Sharma",
  },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: profile.name,
    title: `${profile.name} — Performance Marketing Expert & Meta Ads Specialist`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Performance Marketing Expert & Meta Ads Specialist`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#080B12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
