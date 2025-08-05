import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Premium Gym - Salle de Sport à Bab Ezzouar",
  description:
    "Salle de sport moderne à Bab Ezzouar avec équipements de pointe, coaching personnalisé et horaires flexibles. Rejoignez Premium Gym pour transformer votre corps.",
  keywords:
    "salle de sport, gym, fitness, musculation, Bab Ezzouar, Alger, coaching, premium",
  authors: [{ name: "Premium Gym" }],
  openGraph: {
    title: "Premium Gym - Salle de Sport à Bab Ezzouar",
    description:
      "Transformez votre corps avec nos équipements de pointe et notre coaching personnalisé",
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
    description: "Salle de sport moderne avec équipements de pointe",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
