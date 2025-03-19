import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    icons: {
      icon: "/favicon.ico", // Fallback favicon
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    description: DATA.description,
    keywords: [
      DATA.name,
      "Software Developer",
      "Analyst",
      "Enterprise Apps",
      "Open Source",
      "Scalable Systems",
      "Full Stack Developer",
      "Cloud Computing",
      "DevOps",
      "System Architecture",
      "Software Development",
    ].join(", "),
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
    openGraph: {
      title: DATA.name,
      description: DATA.description,
      url: DATA.url,
      siteName: DATA.name,
      locale: "en_US",
      type: "profile",
      images: [
        {
          url: "https://amitn.netlify.app/meog.png", // Fallback image URL
          width: 1200,
          height: 630,
          alt: DATA.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@aamitn",
      creator: "@aamitn",
      title: DATA.name,
      description: DATA.description,
      images: ["https://amitn.netlify.app/meog.png"], // Fallback image
    },
    verification: {
      google: "Oeb9ojsNiPsDJod_fV54S6M-N4fIKUUfVKQIN4f69Rs",
      yandex: "",
    },
    other: {
      author: DATA.name,
      language: "English",
      "revisit-after": "1 days",
      "content-type": "text/html; charset=utf-8",
      viewport: "width=device-width, initial-scale=1.0",
    },
  };
  