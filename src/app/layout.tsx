import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { metadata } from "./metadata";  // Import metadata
import { Inter as FontSans1, JetBrains_Mono as FontSans } from "next/font/google";
import "./globals.css";
import CursorLightEffect from "@/components/CursorLightEffect";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export { metadata }; // Export metadata from this file if needed

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Safe fallback handling for metadata properties
  const siteUrl = metadata?.metadataBase?.href || "https://aamitn.github.io";
  const siteTitle = metadata?.title || "Amit Nandi - Portfolio";  // Directly use metadata.title
  const siteDescription = metadata?.description || "Software Developer, Analyst, and Tech Enthusiast.";

  // JSON-LD Structured Data
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amit Nandi",
    "jobTitle": "Software Developer, Analyst",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/aamitn",
      "https://linkedin.com/in/aamitn",
      "https://twitter.com/amit_nandi"
    ],
    "image": "https://amitn.netlify.app/me.png",
    "description": siteDescription
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteTitle,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background dark:bg-gray-900 text-gray-900 dark:text-white font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* Cursor Light Effect & Mesh Background */}
        <CursorLightEffect />

        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Moved Navbar to the top for better navigation */}
            <Navbar />

            {/* Content Wrapper with padding control */}
            <main className="max-w-2xl mx-auto px-6 py-8 sm:py-16">{children}</main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
