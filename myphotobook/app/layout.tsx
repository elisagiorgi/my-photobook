import type { Metadata } from "next";
import "./globals.css";
import { PhotobookProvider } from "@/app/context/PhotobookContext";

export const metadata: Metadata = {
  title: "My PhotoBook - Crea il tuo fotolibro personalizzato",
  description:
    "Configura online il tuo fotolibro con formato, dimensioni e opzioni personalizzate. Interfaccia intuitiva per creare ricordi unici.",
  openGraph: {
    title: "My PhotoBook 📸 | Fotolibri personalizzati in pochi click",
    description:
      "✨ Scegli formato, numero di pagine, confezione regalo e copertina personalizzata. Crea il tuo fotolibro perfetto in tempo reale!",
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
