import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Premium Gym - Salle de Sport à Bab Ezzouar",
  description:
    "Salle de sport moderne à Bab Ezzouar avec équipements de pointe, coaching personnalisé et horaires flexibles. Fitness, Crossfit, Kickboxing, Stretching et Lutte.",
  keywords:
    "salle de sport, gym, fitness, musculation, Bab Ezzouar, Alger, coaching, premium, crossfit, kickboxing, lutte, stretching",
  authors: [{ name: "Premium Gym" }],
  openGraph: {
    title: "Premium Gym - Salle de Sport à Bab Ezzouar",
    description:
      "Transformez votre corps avec nos équipements de pointe, nos cours collectifs variés et notre coaching personnalisé",
    url: "https://premiumgym-babezzouar.com",
    siteName: "Premium Gym",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Gym - Salle de Sport",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Gym - Salle de Sport à Bab Ezzouar",
    description: "Salle de sport moderne avec équipements de pointe et cours collectifs variés",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fbbf24" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}