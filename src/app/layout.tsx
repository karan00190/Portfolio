import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Footer } from "@/components/Contact";
import { Nav } from "@/components/Nav";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Karan Katte — Backend Engineer",
  description:
    "Backend engineer specializing in secure, API-driven systems. Building HotelIQ (full-stack revenue management, ETL + ML) and a distributed rate-limiting API gateway. Cyber Security Intern at BARC.",
};

// Runs before hydration/paint so a saved "light" preference is applied on
// first render — without this it would flash the default dark theme for a
// frame before JS corrects it. Dark is the implicit default (no attribute,
// styled via the bare :root rules), matching what the server always renders
// since it has no access to localStorage - only ever setting data-theme
// for the "light" case keeps server and client markup identical, which a
// literal data-theme="dark" attribute would NOT (the server never renders
// that attribute, so client-only script adding it caused a hydration
// mismatch).
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem("portfolio-theme");
    if (saved === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-ground text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
