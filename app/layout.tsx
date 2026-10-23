import "@/styles/globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Tom Maudet — Administrateur Systèmes & Réseau",
  description: "Portfolio professionnel - Administrateur Système & Réseau | Infra & Cybersécurité",
  icons: {
    icon: `${process.env.PAGES_BASE_PATH ?? ""}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="text-neutral-900 dark:text-neutral-50">
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
