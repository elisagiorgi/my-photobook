import type { Metadata } from "next";
import "./globals.css";
import { PhotobookProvider } from "@/app/context/PhotobookContext";

export const metadata: Metadata = {
  title: "My PhotoBook - Crea il tuo fotolibro personalizzato",
  description:
    "Crea il tuo fotolibro personalizzato con le tue foto preferite. Scegli formato, dimensioni e opzioni extra per un libro unico.",
  openGraph: {
    title: "My PhotoBook - Crea il tuo fotolibro personalizzato",
    description:
      "Crea il tuo fotolibro personalizzato con le tue foto preferite. Scegli formato, dimensioni e opzioni extra per un libro unico.",
    type: "website",
    locale: "it_IT",
    siteName: "My PhotoBook",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "My PhotoBook Logo",
      },
    ],
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <PhotobookProvider>{children}</PhotobookProvider>
      </body>
    </html>
  );
}
