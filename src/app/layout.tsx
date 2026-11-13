import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import type { PropsWithChildren } from "react";
import { BackToTop } from "@/components/layout/back-to-top";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal"],
});

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
// Use Vercel's generated hostname so canonical and social URLs are absolute in production.
const metadataBase = new URL(
  productionHost ? `https://${productionHost}` : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Denzel Marani — Photography",
    template: "%s — Denzel Marani",
  },
  description:
    "Singapore-based freelance and hobbyist photographer working across events, publicity, portraits, cosplay, and studio photography.",
  applicationName: "Denzel Marani Photography",
  authors: [{ name: "Denzel Marani" }],
  creator: "Denzel Marani",
  category: "Photography",
  keywords: [
    "Denzel Marani",
    "Singapore photographer",
    "event photography",
    "portrait photography",
    "cosplay photography",
    "studio photography",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    title: "Denzel Marani — Photography",
    description:
      "Events, publicity, portraits, cosplay, and creative photography in Singapore.",
    siteName: "Denzel Marani Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denzel Marani — Photography",
    description:
      "Events, publicity, portraits, cosplay, and creative photography in Singapore.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1013",
  colorScheme: "dark",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Scroll reveals hide content only once JS is known to run, so the
            page stays fully visible if scripts are blocked or fail. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
